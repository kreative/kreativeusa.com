import { useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function FloatingCTA() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubscription = async (e: any) => {
    e.preventDefault();

    if (
      email === "" ||
      email === undefined ||
      email === null ||
      !validateEmail(email)
    ) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setShowSpinner(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      toast.error(
        "There was an error subscribing to the newsletter. Please try again later :("
      );
      setShowSpinner(false);
      return;
    }

    console.log("Success! You have been subscribed.");
    window.location.href = "/newsletter/thank-you";
  };

  return (
    <Container>
      <div className="w-full bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple xl:bg-floating-cta-w-logo xl:bg-cover xl:bg-right rounded-[2rem] grid grid-cols-1 xl:grid-cols-10 gap-4 px-8 lg:pr-12 xl:pr-0 lg:pl-12 pt-12 z-10">
        <div className="xl:col-span-6 pt-28 md:pt-44 xl:pt-36 pb-12 xl:pb-24">
          <svg
            className="h-16 w-auto mb-6"
            viewBox="0 0 385 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 35.1543L15.4841 0.360093H22.5059C28.4475 0.360093 31.8684 6.39169 29.2127 12.1982C27.9524 14.989 24.8916 17.1495 21.7407 17.6897C24.1264 19.9853 24.6665 23.9013 22.776 28.0424C20.7955 32.4986 16.5644 35.1543 11.0279 35.1543H0ZM8.05713 30.428H10.8929C13.7286 30.428 16.2493 28.8076 17.3746 26.2419C19.1301 22.2809 17.8697 18.995 14.4488 18.995H13.2335L8.05713 30.428ZM15.124 14.6739H17.7347C20.3904 14.6739 22.686 13.2335 23.6763 11.0279C25.1166 7.92209 23.6312 5.08634 21.0656 5.08634H19.4001L15.124 14.6739Z"
              fill="white"
            />
            <path
              d="M53.1759 0.360093L50.9703 5.3114H41.0227L36.7466 15.034L46.064 14.989L43.8585 19.8502H34.541L29.9498 30.203H39.8524L37.6918 35.1543H21.8026L37.2867 0.360093H53.1759Z"
              fill="white"
            />
            <path
              d="M46.5254 35.1543L52.9621 20.7955L54.5826 0.360093H60.209L59.5339 8.37221L59.0387 13.6386L63.0898 8.46223L69.4815 0.360093H75.6931L58.7236 21.4707L52.602 35.1543H46.5254Z"
              fill="white"
            />
            <path
              d="M74.6916 35.6944C66.1394 35.6944 64.2488 26.0169 70.3705 12.2882C73.7013 4.72625 78.7877 0 83.604 0C92.1112 0 94.0017 9.58753 87.9701 23.2712C84.5042 30.8782 79.5079 35.6944 74.6916 35.6944ZM75.0067 30.8782C77.3473 30.8782 79.868 27.5923 83.0188 20.7505C87.2949 11.478 86.8448 4.77126 83.2889 4.77126C80.9033 4.77126 78.3826 7.87708 75.4118 14.4938C71.0456 24.1264 71.4057 30.8782 75.0067 30.8782Z"
              fill="white"
            />
            <path
              d="M85.1885 35.1543L100.673 0.360093H106.344L105.084 23.2261L115.166 0.360093H120.613L105.129 35.1543H99.5473L100.718 12.1532L90.4549 35.1543H85.1885Z"
              fill="white"
            />
            <path
              d="M107.826 35.1543L123.31 0.360093H127.362C136.409 0.360093 139.785 10.0827 134.293 22.4609C130.647 30.428 125.201 35.1543 117.279 35.1543H107.826ZM115.928 30.203H117.549C122.275 30.203 126.146 26.647 128.757 20.8855C132.673 12.1982 131.908 5.3114 127.046 5.3114H126.956L115.928 30.203Z"
              fill="white"
            />
            <path
              d="M170.595 0.360093L168.389 5.3114H161.817L148.539 35.1543H142.462L155.831 5.3114H149.259L151.42 0.360093H170.595Z"
              fill="white"
            />
            <path
              d="M191.316 0.360093L175.787 35.1543H169.756L176.372 20.5254H169.441L162.869 35.1543H156.882L172.366 0.360093H178.353L171.601 15.5291H178.533L185.285 0.360093H191.316Z"
              fill="white"
            />
            <path
              d="M209.926 0.360093L207.721 5.3114H197.773L193.497 15.034L202.814 14.989L200.609 19.8502H191.291L186.7 30.203H196.603L194.442 35.1543H178.553L194.037 0.360093H209.926Z"
              fill="white"
            />
            <path
              d="M56.1748 53.7751V146.56H32.6486V111.03H23.5262V146.56H0V53.7751H23.5262V90.0247H32.6486V53.7751H56.1748Z"
              fill="white"
            />
            <path
              d="M91.7155 148C70.83 148 58.5867 130.235 58.5867 99.9873C58.5867 70.0994 70.83 52.6948 91.7155 52.6948C112.361 52.6948 124.364 70.0994 124.364 99.9873C124.364 130.235 112.361 148 91.7155 148ZM83.1932 99.9873C83.1932 117.392 86.194 127.355 91.4754 127.355C96.7568 127.355 99.7576 117.392 99.7576 99.9873C99.7576 82.9428 96.7568 73.3403 91.4754 73.3403C86.194 73.3403 83.1932 82.9428 83.1932 99.9873Z"
              fill="white"
            />
            <path
              d="M126.713 146.56V53.7751H153.96C173.045 53.7751 185.529 65.5382 185.529 81.8625C185.529 91.345 180.847 98.667 173.165 102.868C177.607 106.469 180.127 112.231 181.328 119.793L183.128 131.796C184.088 138.157 185.169 143.079 186.369 146.56H162.243C161.162 143.439 160.322 138.998 159.482 133.596L158.041 123.994C156.961 117.272 155.041 114.631 151.92 114.631H150.239V146.56H126.713ZM150.239 95.066H152.28C157.681 95.066 161.282 90.7449 161.282 84.6233C161.282 78.0215 157.681 73.5803 152.28 73.5803H150.239V95.066Z"
              fill="white"
            />
            <path
              d="M211.662 53.7751V146.56H188.136V53.7751H211.662Z"
              fill="white"
            />
            <path
              d="M214.37 146.56V126.874L233.695 75.6209L214.61 75.7409V53.7751H259.622V73.9404L240.417 124.834L260.342 124.594V146.56H214.37Z"
              fill="white"
            />
            <path
              d="M292.628 148C271.742 148 259.499 130.235 259.499 99.9873C259.499 70.0994 271.742 52.6948 292.628 52.6948C313.273 52.6948 325.277 70.0994 325.277 99.9873C325.277 130.235 313.273 148 292.628 148ZM284.106 99.9873C284.106 117.392 287.107 127.355 292.388 127.355C297.669 127.355 300.67 117.392 300.67 99.9873C300.67 82.9428 297.669 73.3403 292.388 73.3403C287.107 73.3403 284.106 82.9428 284.106 99.9873Z"
              fill="white"
            />
            <path
              d="M327.626 146.56V53.7751H351.272L363.395 94.4659V53.7751H384.281V146.56H360.874L348.391 106.469V146.56H327.626Z"
              fill="white"
            />
          </svg>
          <h2 className="text-5xl text-white font-chedros w-full">
            YOU NEED MORE EMAILS. JOIN THE NEWSLETTER.
          </h2>
          <p className="text-xl text-white w-full lg:w-[70%] xl:w-[85%] mb-4">
            Your inbox could use a few more things to read. Get new events,
            programs, discounts, and giveaways straight to your phone. We
            promise it&apos;ll be worth it :)
          </p>
          <div className="bg-white bg-opacity-[.85] rounded-lg px-2 xs:pl-4 xs:pr-1 pt-1 pb-2 xs:pb-1 block xs:flex justify-between items-center w-full md:w-[75%] lg:w-[60%] xs:space-x-1">
            <input
              type="email"
              placeholder="Email Address"
              name={"email"}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-2 xs:px-0 xs:mr-2 py-2 placeholder-[#E33232] placeholder-opacity-75 text-[#E33232] text-opacity-85 w-full border-transparent focus:border-transparent focus:ring-0"
            />
            <motion.div
              whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                className="bg-white py-3 px-6 md:py-1.5 md:px-4 rounded-md text-horizon-purple-darker w-full xs:w-auto font-bold"
                onClick={handleSubscription}
              >
                {showSpinner ? (
                  <div className="flex justify-center items-center space-x-3">
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
                  "Subscribe"
                )}
              </button>
            </motion.div>
          </div>
        </div>
        <div className="xl:col-span-4" />
      </div>
    </Container>
  );
}
