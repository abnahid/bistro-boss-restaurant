/* eslint-disable no-unused-vars */
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImg from "../assets/others/authentication1.png";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "./../context/AuthProvider";

const PASSWORD_REQUIREMENTS = [
  { regex: /.{6,}/, text: "At least 6 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
];

const STRENGTH_CONFIG = {
  colors: {
    0: "bg-border",
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-amber-500",
    4: "bg-amber-700",
  },
  texts: {
    0: "Enter a password",
    1: "Weak password",
    2: "Medium password!",
    3: "Strong password!!",
    4: "Very Strong password!!!",
  },
};

const Register = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [type, setType] = useState("password");
  const { createUser, updateUserProfile, setUser, googleLogin, gitHubLogin } =
    useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const axiosPublic = useAxiosPublic();

  const calculateStrength = useMemo(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
    return {
      score: requirements.filter((req) => req.met).length,
      requirements,
    };
  }, [password]);

  const handleGitHub = () => {
    gitHubLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate(location?.state?.from || "/");
        });
      })
      .catch((error) => toast.error(`GitHub Login Failed: ${error.message}`));
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate(location?.state?.from || "/");
        });
      })
      .catch((error) => toast.error(`Google Login Failed: ${error.message}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (name.length < 5) {
      setError({ ...error, name: "Name should be more than 5 characters" });
      return;
    }

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    if (calculateStrength.score < 4) {
      toast.error("Password does not meet complexity requirements");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        updateUserProfile(name, photoUrl)
          .then(() => {
            const userInfo = {
              name,
              email,
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(location?.state?.from || "/");
              }
            });
          })
          .catch((err) => {
            console.error(err);
            toast.error(`Error updating profile: ${err.message}`);
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Error creating user: ${err.message}`);
      });
  };

  return (
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 bg-backgroundPrimary">
      <div className="lg:w-1/2 p-6 sm:p-12">
        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-2xl xl:text-3xl font-extrabold my-8">Sign up</h2>
          <form
            className="mx-auto max-w-sm w-full space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                User name
              </label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter user name"
                />
                {error.name && (
                  <label className="label text-sm text-red-500">
                    {error.name}
                  </label>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-800 text-sm mb-2 block">
                Photo URL
              </label>
              <input
                type="url"
                name="photoUrl"
                className="w-full pr-10 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                placeholder="Enter photo URL"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                className="w-full pr-10 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={isVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  aria-invalid={calculateStrength.score < 4}
                  aria-describedby="password-strength"
                  className="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-secondary transition"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible((prev) => !prev)}
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground"
                >
                  {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="flex gap-2 w-full justify-between mt-2">
                <span
                  className={`${
                    calculateStrength.score >= 1 ? "bg-green-200" : "bg-border"
                  } p-1 rounded-full w-full`}
                ></span>
                <span
                  className={`${
                    calculateStrength.score >= 2 ? "bg-green-300" : "bg-border"
                  } p-1 rounded-full w-full`}
                ></span>
                <span
                  className={`${
                    calculateStrength.score >= 3 ? "bg-green-400" : "bg-border"
                  } p-1 rounded-full w-full`}
                ></span>
                <span
                  className={`${
                    calculateStrength.score >= 4 ? "bg-green-500" : "bg-border"
                  } p-1 rounded-full w-full`}
                ></span>
              </div>

              <p
                id="password-strength"
                className="my-2 text-sm font-medium flex justify-between"
              >
                <span>Must contain:</span>
                <span>
                  {STRENGTH_CONFIG.texts[Math.min(calculateStrength.score, 4)]}
                </span>
              </p>

              <ul className="space-y-1.5" aria-label="Password requirements">
                {calculateStrength.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {req.met ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <X size={16} className="text-muted-foreground/80" />
                    )}
                    <span
                      className={`text-xs ${
                        req.met ? "text-emerald-600" : "text-muted-foreground"
                      }`}
                    >
                      {req.text}
                      <span className="sr-only">
                        {req.met
                          ? " - Requirement met"
                          : " - Requirement not met"}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                required
                className="h-4 w-4 shrink-0 text-primary focus:ring-btnHover border-gray-300 rounded"
              />
              <label
                htmlFor="acceptTerms"
                className="ml-3 block text-sm text-gray-800"
              >
                Accept{" "}
                <a href="#" className="text-neutral-500 font-semibold">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div className="!mt-8">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-Primary  focus:outline-none"
              >
                Sign up
              </button>
            </div>

            <p className="text-gray-800 text-sm !mt-6 text-center">
              Already registered? Go to log in
              <Link
                to="/login"
                className="text-Primary hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                log in
              </Link>
            </p>
            <p className="text-gray-800 text-sm mt-4 text-center">
              Or sign in with
            </p>
            <div className="flex justify-center items-center gap-8 my-5">
              <div className="p-2 rounded-full border border-black hover:border-orange-300 hover:text-orange-300">
                <FaFacebookF className="text-lg" />
              </div>
              <div className="p-2 rounded-full border border-black hover:border-orange-300 hover:text-orange-300">
                <FaGoogle className="text-lg" onClick={handleGoogle} />
              </div>
              <div className="p-2 rounded-full border border-black hover:border-orange-300 hover:text-orange-300">
                <FaGithub className="text-lg" onClick={handleGitHub} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 xl:w-5/12 flex-1 text-center hidden lg:flex items-center">
        <div className="m-12 lg:m-14">
          <img src={loginImg} alt="" className="mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
};

export default Register;
