import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoCloud1 from "../components/LogoCloud1";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import DreamflowBadge from "@/components/DreamflowBadge";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { CldImage } from "next-cloudinary";

export default function AboutUs() {
  return (
    <div>
      <NextSeo
        title="About Us"
        description="Discover the story behind Kreative Horizon and our mission to help students build tomorrow, today."
      />
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col justify-start items-center rounded-[30px] bg-rocket-bg bg-cover bg-bottom pt-20 px-6 xs:px-12 md:px-20 lg:px-24 mt-8 mb-16 sm:mb-24 md:mb-44">
            <p className="text-2xl font-guthen tracking-wide pb-2 text-white">
              About Kreative Horizon
            </p>
            <h1 className="text-center pb-8 text-white text-5xl sm:text-6xl font-chedros">
              We&apos;re on a mission to empower students to build the future of
              tomorrow today. Through hackathons, workshops, and more.
            </h1>
            <svg
              className="h-auto w-[50%] -mb-16 sm:-mb-24 md:-mb-44"
              viewBox="0 0 467 449"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="259.5"
                cy="241.5"
                r="207.5"
                fill="url(#paint0_radial_280_914)"
              />
              <g filter="url(#filter0_i_280_914)">
                <path
                  d="M84.8949 258.262V55.0123V50.9546L81.4256 48.8721L10.7839 6.47259L0 0V12.6126V441.846V449H7.12666H77.7682H84.8949V441.846V356.59L156.066 446.303L158.206 449H161.641H252.873H260V441.846V436.903V434.309L258.342 432.317L152.896 305.63L252.783 193.198L254.59 191.163V188.437V183.494V176.341H247.464H159.167H155.922L153.791 178.798L84.8949 258.262Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_280_914"
                  x="0"
                  y="0"
                  width="260"
                  height="449"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="15" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0.235294 0 0 0 0.85 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_280_914"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_280_914"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(167.278 133.907) rotate(59.144) scale(350.259)"
                >
                  <stop stopColor="#FFBB94" />
                  <stop offset="0.229167" stopColor="#FF7629" />
                  <stop offset="0.723958" stopColor="#FF5EBF" />
                  <stop offset="1" stopColor="#C479FF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </Container>
        <div className="py-24">
          <LogoCloud1 />
        </div>
        <WhatWeDoSection />
        <Container>
          <div className="grid grid-cols-2 gap-8 py-12 md:py-24">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start space-y-3 pr-6">
              <p className="text-2xl font-guthen text-left">In the beginning</p>
              <h2 className="text-5xl font-chedros">
                Kreative horizon started in 2019 with{" "}
                <span className="text-horizon-orange">BuildChicago...</span>
              </h2>
              <p className="text-lg text-horizon-grey-600">
                Kreative Horizon is an organization that aims provide the tools
                and resources to empower individuals to solve meaningful
                problems. Founded in 2019, Kreative Horizon began with its
                first-ever hackathon event, “BuildChicago.” The event was a
                24-hour hackathon that welcomed high school and college students
                to participate. With over 75 participants and a panel of
                esteemed judges, the event was a resounding success.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center">
              <CldImage
                width="560"
                height="529"
                src="kreativehorizon.com/about-us/our-story-1-photo-group_r1fimt"
                alt="BuildChicago pictures and logo photo group"
                className="w-full sm:w-[75%] md:w-full h-auto"
              />
            </div>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-2 gap-8 py-12 md:py-24">
            <div className="col-span-2 md:col-span-1 order-2 md:order-none flex justify-center items-center">
              <CldImage
                width="1077"
                height="814"
                src="kreativehorizon.com/about-us/2020-event-logos-photo-group_1_jjdwid"
                alt="Kreative Horizon 2020 event logos photo group"
                className="w-full xs:w-[80%] sm:w-[60%] md:w-full h-auto"
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start space-y-3 pl-0 md:pl-6">
              <p className="text-2xl font-guthen text-left">
                Following our success
              </p>
              <h2 className="text-5xl font-chedros">
                We planned to run{" "}
                <span className="text-horizon-pink">4 new events</span> across
                the country
              </h2>
              <p className="text-lg text-horizon-grey-600">
                Following the success of “BuildChicago,” Kreative Horizon
                organized four more events. These events include “BuildChicago
                2020,” “BuildNewYork,” “SheBuilds Chicago,” and “SheBuilds SF.”
                Among these events, “SheBuilds SF” had the potential to be the
                largest all-female hackathon in the San Francisco area. The
                event was partnered with Y-Combinator backed Make School, and we
                estimated over 500 attendees from across the nation would
                participate in hacking away at problems they found important to
                solve. Our team had grown, and sponsors were returning to work
                with us. We were excited about the upcoming events.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="grid grid-cols-2 gap-8 pt-6 md:pt-12 pb-12 md:pb-24">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start space-y-3 pr-6">
              <p className="text-2xl font-guthen text-left">However...</p>
              <h2 className="text-5xl font-chedros">
                just two weeks after partnering with Make School,{" "}
                <span className="text-horizon-purple">
                  the unexpected happened.
                </span>
              </h2>
              <p className="text-lg text-horizon-grey-600">
                The nation was hit with the COVID-19 pandemic, and everything
                came to a halt. Venues backed out of hosting events, and people
                hesitated to attend them. The vision we had crafted for 2020 to
                connect hundreds of students was put on hold. It was a
                challenging time for everyone, and we had to make some difficult
                decisions.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center">
              <CldImage
                width="977"
                height="1067"
                src="kreativehorizon.com/about-us/covid19-photo-group_j63qr1"
                alt="COVID19 photo group"
                className="w-full h-auto block xs:hidden md:block"
              />
              <CldImage
                width="1316"
                height="863"
                src="kreativehorizon.com/about-us/covid19-photo-group-tablet_tuag4v"
                alt="COVID19 photo group for mobile"
                className="w-full h-auto hidden xs:block md:hidden"
              />
            </div>
          </div>
        </Container>
        <div className="pt-24 sm:pt-32 pb-8 sm:pb-4 bg-horizon-orange-100">
          <Container>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 sm:col-span-1 flex flex-col justify-start items-start space-y-3">
                <p className="text-2xl font-guthen text-left">
                  But now we&apos;re back!
                </p>
                <h2 className="text-5xl font-chedros">
                  We just ran hackiowastate v1, and now we&apos;re bringing <span className="text-horizon-orange">six new events</span> to the state of iowa
                </h2>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg text-horizon-grey-600">
                  We were thrilled to announce and run our newest event,
                  “HackIowaState.” This 24-hour hackathon event was designed for
                  Iowa State students in Ames, IA. The event is set to take
                  place in April, and we are starting small but mighty. This
                  even was an excellent opportunity for students to showcase
                  their skills and creativity.
                  <br />
                  <br />
                  We are still dedicated to providing a platform for people to
                  come together and explore new ideas. We believe in the power
                  of technology to create a better future, and we want to be a
                  part of that change. We invite you to join us as we craft the
                  world of tomorrow, today!
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-gradient-to-b from-horizon-orange-100 to-transparent ">
          <Container>
            <CldImage
              width="3418"
              height="1716"
              src="kreativehorizon.com/about-us/hackiowastate-photo-group-min_cesmhq"
              alt="HackIowaState v1 Photo Group"
              className="w-full h-auto hidden sm:block"
            />
            <CldImage
              width="1247"
              height="1628"
              src="kreativehorizon.com/about-us/hackiowastate-photo-group-sm-min_btbw4x"
              alt="HackIowaState v1 Photo Group"
              className="w-full h-auto block sm:hidden"
            />
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
                          className="w-[60%] xs:w-full sm:w-[85%] h-auto"
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
                      <Link href="/events/designjamisu-v1">
                        <Image
                          width="642"
                          height="170"
                          src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689575076/kreativehorizon.com/about-us/designjamisu-sticker_fhjnmv.webp"}
                          alt="DesignJamISU v1 Sticker Logo"
                          className="w-[60%] xs:w-full sm:w-[85%] h-auto"
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
                    We&apos;re bringing the best student technology events to
                    Iowa and we want you to be apart of it!
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
                          className="w-[60%] xs:w-full sm:w-[85%] h-auto"
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
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
