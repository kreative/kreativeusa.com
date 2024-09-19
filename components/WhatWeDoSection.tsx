import Link from "next/link";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function WhatWeDoSection() {
  return (
    <div className="bg-horizon-grey-100 py-32">
      <Container>
        <div className="mx-auto max-w-4xl flex flex-col justify-center items-center space-y-4">
          <p className="text-2xl tracking-wide font-guthen text-center">
            What we do
          </p>
          <h2 className="text-5xl font-chedros text-center">
            We serve students and sponsors in tandem, for the benefit of the
            student experience.
          </h2>
          <div className="flex items-center justify-center space-x-3 pt-3 sm:p-0">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 text-white border border-horizon-grey-800"
                href="/get-involved"
              >
                Get involved
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-horizon-grey-800 border border-horizon-grey-800"
                href="/sponsors"
              >
                Become a sponsor
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          <div className="col-span-2 sm:col-span-1">
            <motion.div
              whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/events"
                className="p-12 bg-horizon-grey-200 flex flex-col justify-start items-center rounded-2xl space-y-6"
              >
                <CldImage
                  src="kreativehorizon.com/ikons/Hammer_And_Wrench_Ikon_1_bgdo3x"
                  alt="Hammer and Wrench Ikon"
                  width="280"
                  height="280"
                  className="w-32 h-auto"
                />
                <h3 className="text-4xl sm:text-2xl md:text-3xl font-chedros text-horizon-grey-700 text-center">
                  Builder Events
                </h3>
                <p className="text-xl sm:text-lg text-horizon-grey-600 text-center">
                  Designed to bring students together to solve tomorrow&apos;s
                  problems, today.
                </p>
              </Link>
            </motion.div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <motion.div
              whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/sponsors"
                className="p-12 bg-horizon-grey-200 flex flex-col justify-start items-center rounded-2xl space-y-6"
              >
                <CldImage
                  src="kreativehorizon.com/ikons/Handshake_Ikon_1_ba5lzf"
                  alt="Handshake Ikon"
                  width="280"
                  height="280"
                  className="w-32 h-auto"
                />
                <h3 className="text-4xl sm:text-2xl md:text-3xl font-chedros text-horizon-grey-700 text-center">
                  Sponsorships
                </h3>
                <p className="text-xl sm:text-lg text-horizon-grey-600 text-center">
                  The fastest way to get in front of the most motivated students
                  on campus.
                </p>
              </Link>
            </motion.div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <motion.div
              whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/community"
                className="p-12 bg-horizon-grey-200 flex flex-col justify-start items-center rounded-2xl space-y-6"
              >
                <CldImage
                  src="kreativehorizon.com/ikons/PotPlant_Ikon_1_y5wjgo"
                  alt="Pot Plant Ikon"
                  width="280"
                  height="280"
                  className="w-32 h-auto"
                />
                <h3 className="text-4xl sm:text-2xl md:text-3xl font-chedros text-horizon-grey-700 text-center">
                  Horizon clubs
                </h3>
                <p className="text-xl sm:text-lg text-horizon-grey-600 text-center">
                  We&apos;re building a network of student organizations to help
                  students grow.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
