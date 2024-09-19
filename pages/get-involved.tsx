import Link from "next/link";
import Image from "next/image";
import SplashContainer from "@/components/SplashContainer";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoCloud1 from "@/components/LogoCloud1";
import LogoCloud6 from "@/components/LogoCloud6";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function GetInvolved() {
  return (
      <div>
        <NextSeo
            title="Get Involved"
            description="Whether you're a student or a sponsor, there is a home for you with Kreative Horizon."
        />
        <Navbar />
        <main>
          <SplashContainer>
            <div className="bg-gradient-to-b from-horizon-orange via-horizon-pink to-horizon-purple">
              <Container>
                <div className="pt-36 md:pt-64 pb-16">
                  <p className="tracking-wide font-guthen text-white text-2xl text-center mb-4">
                    Get involved
                  </p>
                  <h1 className="text-5xl md:text-7xl font-chedros text-white text-center">
                    whether you&apos;re a Student or an organization, there is a
                    home for you with Kreative.
                  </h1>
                </div>
              </Container>
            </div>
          </SplashContainer>
          <Container>
            <div className="py-16">
              <LogoCloud6 />
            </div>
          </Container>
          <Container>
            <div className="py-24 grid grid-cols-3 gap-4">
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 xs:col-span-1 flex justify-start xs:justify-center items-center">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/events/hackisu-v2">
                        <Image
                            width="674"
                            height="154"
                            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1690591105/kreativehorizon.com/about-us/hackisu_v2_2x_tyt9l0.png"}
                            alt="HackISU v2 Sticker Logo"
                            className="w-[80%] xs:w-full sm:w-[85%] h-auto"
                        />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-end xs:justify-center items-center">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/events/dataisu-v1">
                        <Image
                            width="489"
                            height="165"
                            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1690590402/kreativehorizon.com/about-us/dataisu_v1_2x_itgjv8.png"}
                            alt="DataISU v1 Sticker Logo"
                            className="w-[100%] xs:w-full sm:w-[85%] h-auto"
                        />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-start xs:justify-center items-center">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/events/designjamisu-v1">
                        <Image
                            width="642"
                            height="170"
                            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689575076/kreativehorizon.com/about-us/designjamisu-sticker_fhjnmv.webp"}
                            alt="DesignJamISU v1 Sticker Logo"
                            className="w-[80%] xs:w-full sm:w-[85%] h-auto"
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex justify-center items-center">
                <div className="py-12 flex flex-col justify-center items-center max-w-lg space-y-3">
                  <p className="text-2xl font-guthen tracking-wide">
                    If you&apos;re a student....
                  </p>
                  <h2 className="text-5xl font-chedros text-center">
                    Discover all the new events on the horizon for 2023-24
                  </h2>
                  <p className="text-lg text-horizon-grey-600 text-center pb-3">
                    Hackathons, datathons, design jams, and pitch competitions.
                    We&apos;re bringing the best student technology events to Iowa
                    and we want you to be apart of it!
                  </p>
                  <div className="flex items-center justify-center space-x-3 pt-3 sm:p-0">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link
                          className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 text-white border border-border"
                          href="/events"
                      >
                        See events
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
                          className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                          href="/get-involved"
                      >
                        Get involved
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 xs:col-span-1 flex justify-end xs:justify-center items-center">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/events/pitchames-v1">
                        <Image
                            width="661"
                            height="203"
                            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689575076/kreativehorizon.com/about-us/pitchames-sticker_qjxm7u.webp"}
                            alt="PitchAmes v1 Sticker Logo"
                            className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                        />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-start xs:justify-center items-center">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/events/hackisu-v3">
                        <Image
                            width="688"
                            height="173"
                            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689575076/kreativehorizon.com/about-us/hackisu-v3-sticker_o9hr8n.webp"}
                            alt="HackISU v3 Sticker Logo"
                            className="w-[100%] xs:w-full sm:w-[85%] h-auto"
                        />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="col-span-3 xs:col-span-1 flex justify-end xs:justify-center items-center">
                    <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/events/builddsm-v1">
                        <Image
                            width="566"
                            height="185"
                            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689574875/kreativehorizon.com/about-us/builddsm-sticker_it79ii.webp"}
                            alt="BuildDSM v1 Sticker Logo"
                            className="w-[60%] xs:w-full sm:w-[85%] h-auto"
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <div className="bg-horizon-grey-100 py-32">
            <Container>
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl text-center font-guthen tracking-wide mb-4">
                  Sponsor Horizon
                </p>
                <h2 className="text-5xl font-chedros text-center mb-4">
                  support the future innovators of Iowa
                </h2>
                <p className="text-lg text-horizon-grey-600 text-center mb-8">
                  Sponsors help us support students with space, food, workshops,
                  and mentorship. As a sponsor, you&apos;ll support the next
                  generation of innovators while gaining marketing, recruiting,
                  and sales benefits. Our partnership can help you increase your
                  brand visibility, tap into a talent pool of young professionals,
                  and expand your customer base.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <Link
                        className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 text-white border border-horizon-grey-800"
                        href="/sponsors/interest-form"
                    >
                      Want to learn more?
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
                        className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                        href="/sponsors"
                    >
                      Learn more
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="pt-24">
                <LogoCloud1 />
              </div>
            </Container>
          </div>
        </main>
        <Footer />
        <DreamflowBadge />
      </div>
  );
}
