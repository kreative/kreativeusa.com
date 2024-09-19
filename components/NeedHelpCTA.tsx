import Container from "./Container";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NeedHelpCTA() {
  return (
    <div id="top_cta" className="pt-44 pb-44 bg-cover">
      <Container>
        <div className="flex justify-center">
          <div className="flex flex-col items-center max-w-[34rem] space-y-3">
            <h3 className="text-2xl font-guthen tracking-wider">
              Have a Question?
            </h3>
            <h2 className="text-5xl font-chedros text-center pb-3">
              Contact our support team and we&apos;ll get back to you soon
            </h2>
            <div className="flex items-center justify-center space-x-3 pt-3 sm:p-0">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 text-white border border-horizon-grey-800"
                  href="/contact-us"
                >
                  Contact us
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                  href="/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get support
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
