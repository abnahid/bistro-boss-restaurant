import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import SectionTitle from "./../../components/SectionTitle";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form Submitted!");
  };

  return (
    <>
      <SectionTitle
        heading="Send Us a Message"
        subHeading="CONTACT FORM"
      ></SectionTitle>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg  mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className={`input input-bordered w-full ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className={`input input-bordered w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              className={`input input-bordered w-full ${
                errors.phone ? "border-red-500" : ""
              }`}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message*
            </label>
            <textarea
              id="message"
              rows="5"
              className={`textarea textarea-bordered w-full ${
                errors.message ? "border-red-500" : ""
              }`}
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message here"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* reCAPTCHA (Placeholder) */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">reCAPTCHA</label>
            <div className="w-full h-16 bg-gray-200 flex items-center justify-center rounded">
              <p className="text-gray-500">[reCAPTCHA Placeholder]</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button type="submit" className="btn btn-primary">
              Send Message <FiSend className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
