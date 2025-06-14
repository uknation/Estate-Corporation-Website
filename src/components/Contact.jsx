import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c37582ba-b726-436f-a536-acdec6e856b8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
       // alert("Form Submitted Successfully");
        toast.success('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Something went wrong.");
       // alert(data.message || "Something went wrong.");
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error. Please try again.");
      alert("Network error. Please try again.");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let`s Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          disabled={result === "Sending..."}
        >
          { "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
