import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function MoneyManagerFeedbackForm() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmssion = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      email === undefined ||
      email === null ||
      !validateEmail(email) ||
      message === "" ||
      message === undefined ||
      message === null
    ) {
      toast.error("Please fill out all fields!");
      return;
    }

    setShowSpinner(true);

    const res = await fetch("/api/collect-library-feedback", {
      body: JSON.stringify({ email, message, libraryItem: "Money Manager" }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      toast.error(
        "There was an error submitting the form. Please try again later :("
      );
      setShowSpinner(false);
      return;
    }

    setShowSpinner(false);
    console.log("Success! You have submitted the form.");
    toast.success("Success! Thank you for your feedback!");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form
        name="contact-form"
        method="POST"
        className="grid grid-cols-1 gap-6"
        action={`/api/collect-library-feedback`}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium leading-6 text-horizon-grey-800"
          >
            Email<span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              placeholder="you@example.com"
              required
              aria-required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-base leading-6 text-horizon-grey-800"
          >
            Message<span className="text-horizon-pink"> *</span>
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Here's what I think about the Money Manager..."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
              defaultValue={""}
              required
              aria-required="true"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <motion.div
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              type="submit"
              className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg"
              onClick={handleSubmssion}
            >
              {showSpinner ? (
                <div className="flex justify-center items-center space-x-3">
                  <span>Submitting...</span>
                  <motion.span
                    className="flex items-center w-5 h-5 border-2 border-white border-t-horizon-orange rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    role="status"
                  />
                </div>
              ) : (
                "Submit now"
              )}
            </button>
          </motion.div>
        </div>
      </form>
    </div>
  );
}
