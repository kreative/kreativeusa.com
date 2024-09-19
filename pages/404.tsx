import Link from "next/link";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <div>
      <NextSeo title="404 Not Found" />
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 min-h-[80vh] pb-24">
            <CldImage
              src="kreativehorizon.com/404-cat_e6qp0c"
              alt="404 Cat GIF"
              width="300"
              height="350"
              className="h-[30vh] w-auto rounded-full mb-3"
            />
            <p className="text-2xl font-guthen tracking-wider">
              Whoops... Looks like you&apos;re lost!
            </p>
            <h1 className="text-6xl xs:text-7xl font-chedros text-center">
              We couldn&apos;t find this page
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-3 pt-3 sm:p-0">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white"
                  href="/"
                >
                  Go back home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-horizon-grey-800"
                  href="/support"
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  Contact support <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
