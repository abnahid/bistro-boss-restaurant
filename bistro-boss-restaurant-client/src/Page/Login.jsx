import { Eye, EyeOff } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import loginImg from "../assets/others/authentication1.png";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const [type, setType] = useState("password");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => toast.error(`Google Login Failed: ${error.message}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userCaptchaValue = e.target.captcha.value;

    if (!validateCaptcha(userCaptchaValue)) {
      toast.error("Invalid captcha. Please try again.");
      return;
    }

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`User Login successfully: ${user.email}`);
        e.target.reset();
        setUser(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 bg-backgroundPrimary">
      <div className=" lg:w-1/2 xl:w-5/12 flex-1  text-center hidden lg:flex items-center">
        <div className="m-12 lg:m-14 ">
          <img src={loginImg} alt="" className="mix-blend-multiply" />
        </div>
      </div>
      <div className="lg:w-1/2 p-6 sm:p-12">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
          <div className="w-full flex-1 mt-8">
            <form
              className="mx-auto max-w-sm space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="relative">
                  <input
                    type={type}
                    name="password"
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <span
                    className="text-xl w-5 h-5  absolute right-4 top-7 transform -translate-y-1/2 cursor-pointer text-gray-300"
                    onClick={() =>
                      setType(type === "password" ? "text" : "password")
                    }
                  >
                    {type === "password" ? <EyeOff /> : <Eye />}
                  </span>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              <button
                className="mt-5 tracking-wide font-semibold bg-orange-300 text-gray-50 w-full py-4 rounded-lg hover:bg-Primary transition-all duration-300 ease-in-out"
                disabled={disabled}
              >
                Sign Up
              </button>
            </form>

            <p className="text-gray-800 text-sm !mt-6 text-center">
              New here?
              <Link
                to="/register"
                className="text-Primary hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                Create a New Account
              </Link>
            </p>
            <p className="text-gray-800 text-sm mt-4 text-center">
              Or sign in with
            </p>
            <div className="flex justify-center items-center gap-8 my-5">
              <div className="p-2 rounded-full border border-black hover:border-orange-300 hover:text-orange-300">
                <FaFacebookF className="text-lg " />
              </div>
              <div className="p-2 rounded-full border border-black hover:border-orange-300 hover:text-orange-300">
                <FaGoogle className="text-lg " onClick={handleGoogle} />
              </div>
              <div className="p-2 rounded-full border border-black hover:border-orange-300 hover:text-orange-300">
                <FaGithub className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
