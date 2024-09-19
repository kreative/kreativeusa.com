import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoCloud1 from "@/components/LogoCloud1";
import LogoCloud6 from "@/components/LogoCloud6";
import Container from "../components/Container";
import SplashContainer from "@/components/SplashContainer";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import EventCard from "@/components/EventCard";
import FloatingCTA3 from "@/components/FloatingCTA3";
import DreamflowBadge from "@/components/DreamflowBadge";
import EventCardType from "@/types/EventCard";
import getLatestEvents from "@/lib/getLatestEvents";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function Home({ events }: { events: EventCardType[] }) {
  return (
    <div>
      <NextSeo
        title="Home"
        description="Kreative Horizon aims to empower students with the resources and opportunities to learn, build, and grow through hackathons, workshops, and more."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-gradient-to-b from-horizon-orange via-horizon-pink to-horizon-purple">
            <div className="py-6 relative flex items-center justify-center h-[85vh] md:h-[75vh] mb-12 overflow-hidden">
              <div className="z-30">
                <Container>
                  <div className="flex flex-col space-y-4 items-center justify-center pt-20 pb-12 md:pt-8">
                    <div>
                      <svg
                        className="h-6 xs:h-8 w-auto mb-3"
                        viewBox="0 0 365 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M236.556 47.5306C246.05 47.5306 250.741 40.9184 250.741 32.4411C250.741 24.0769 246.05 17.4647 236.556 17.4647C227.005 17.4647 222.314 24.0204 222.314 32.4411C222.314 40.9749 227.005 47.5306 236.556 47.5306ZM226.892 32.4976C226.892 24.529 230.17 21.1381 236.556 21.1381C242.942 21.1381 246.163 24.529 246.163 32.4976C246.163 40.4097 242.942 43.8571 236.556 43.8571C230.17 43.8571 226.892 40.4097 226.892 32.4976Z"
                          fill="white"
                        />
                        <path
                          d="M209.372 17.3987C203.777 17.3987 200.273 20.5636 198.521 25.7064V8L194 7V46.5604H198.521V35.7661C198.521 26.0455 201.856 21.1852 208.129 21.1852C212.254 21.1852 214.911 22.9937 214.911 29.0408V46.5604H219.432V28.5322C219.432 21.2418 216.436 17.3987 209.372 17.3987ZM269.017 17.9074C263.648 17.9074 260.37 21.0722 258.674 25.763V19.303L254.153 18.303V46.5604H258.674V36.1617C258.674 28.1931 260.483 22.0895 268.847 22.3721H270.034V17.9074H269.017ZM271.967 13.6688H277.788V8.97802H271.967V13.6688ZM272.589 46.5604H277.11V18.303H272.589V46.5604ZM286.386 43.113L305.488 21.7504V18.303H280.904V21.7504H300.119L280.904 43.113V46.5604H305.77V43.113H286.386ZM320.854 47.4647C330.349 47.4647 335.039 40.8524 335.039 32.3752C335.039 24.011 330.349 17.3987 320.854 17.3987C311.303 17.3987 306.612 23.9545 306.612 32.3752C306.612 40.909 311.303 47.4647 320.854 47.4647ZM311.19 32.4317C311.19 24.4631 314.468 21.0722 320.854 21.0722C327.24 21.0722 330.462 24.4631 330.462 32.4317C330.462 40.3438 327.24 43.7912 320.854 43.7912C314.468 43.7912 311.19 40.3438 311.19 32.4317ZM354.086 17.3987C348.491 17.3987 344.987 20.5636 343.235 25.7064V19.303L338.714 18.303V46.5604H343.235V35.7661C343.235 26.0455 346.57 21.1852 352.843 21.1852C356.968 21.1852 359.624 22.9937 359.624 29.0408V46.5604H364.146V28.5322C364.146 21.2418 361.15 17.3987 354.086 17.3987Z"
                          fill="white"
                        />
                        <path
                          d="M15.0854 32.3027L26.5891 19.3932V18.8481H16.8206L7.81527 29.2035V4.67664L0 0V47.344H7.81527V35.6825L17.0943 47.344H27.1876V46.7988L15.0854 32.3027ZM28.2454 47.344H36.0583V33.2839C36.0583 28.7047 38.6101 26.0347 42.5699 26.0347H45.284L47.3718 18.3516H43.3308C39.6957 18.3516 37.2994 20.4765 36.0583 22.9911H35.8426L35.1908 18.8481H28.2454V47.344ZM59.8614 47.8334C67.621 47.8334 72.1237 43.3122 72.8845 38.1879H64.7932C64.3061 39.4962 62.949 41.0226 59.8568 41.0226C56.0593 41.0226 54.3775 38.6797 54.3218 35.3555H73.258V32.2493C73.258 24.5106 68.3749 18.3516 59.6944 18.3516C50.4687 18.3516 45.8037 25.0534 45.8037 33.1192C45.8083 41.294 50.9095 47.8334 59.8614 47.8334ZM54.3821 30.0641C54.5445 27.3384 56.1173 25.2135 59.699 25.2135C63.0093 25.2135 64.5705 27.3384 64.7445 30.0641H54.3821ZM83.7178 47.8334C87.2439 47.8334 89.7492 46.5808 91.3127 44.783H91.5308V47.0169L99.6151 47.344V28.5957C99.6151 22.6571 94.9501 18.3516 87.1905 18.3516C78.8394 18.3516 74.9816 24.0977 74.9816 29.4401L82.7946 28.2802C82.7946 26.5357 84.314 25.1184 86.9191 25.1184C90.0113 25.1184 91.2594 26.6448 91.2594 28.598V30.9433C90.1204 30.5605 87.2995 30.1244 85.1816 30.1244C77.3686 30.1244 73.7869 33.604 73.7869 38.9001C73.7869 43.9641 77.3199 47.8334 83.7178 47.8334ZM85.8334 41.294C83.3374 41.294 82.036 40.0947 82.036 38.4616C82.036 36.9352 83.4464 35.7359 86.1582 35.7359C87.9037 35.7084 89.6376 36.0236 91.2617 36.6638V36.9375C91.2594 39.2782 89.2528 41.294 85.8334 41.294ZM114.81 47.8334C117.468 47.8334 119.681 47.344 120.56 47.0169V40.0391H120.017C119.15 40.3639 118.232 40.5297 117.306 40.5285C114.81 40.5285 113.668 39.3849 113.668 36.7148V25.9813H120.451V18.8411H113.668V9.0401H113.128L105.693 11.738V18.8481H100.701V25.9813H105.312V38.74C105.312 43.9107 108.245 47.8334 114.81 47.8334ZM127.758 15.953C130.96 15.953 132.806 14.0972 132.806 11.049C132.806 8.05189 130.95 6.1984 127.758 6.1984C124.45 6.1984 122.713 8.05421 122.713 11.049C122.713 14.0995 124.45 15.953 127.758 15.953ZM123.527 47.344H131.878V18.8411H123.527V47.344ZM142.679 47.344H153.369L162.267 19.3932V18.8481H153.802L148.214 39.4498H147.996L142.245 18.8481H133.662V19.3932L142.679 47.344ZM174.982 47.8334C182.739 47.8334 187.244 43.3122 188.003 38.1879H179.918C179.431 39.4962 178.074 41.0226 174.982 41.0226C171.182 41.0226 169.5 38.6797 169.447 35.3555H188.383V32.2493C188.383 24.5106 183.512 18.3516 174.819 18.3516C165.594 18.3516 160.929 25.0534 160.929 33.1192C160.929 41.294 166.028 47.8334 174.982 47.8334ZM169.5 30.0641C169.665 27.3384 171.238 25.2135 174.819 25.2135C178.127 25.2135 179.703 27.3384 179.865 30.0641H169.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h1 className="font-chedros text-5xl sm:text-6xl md:text-7xl font-bold text-white text-center">
                      Hackathons, workshops, and more, so you can go beyond the
                      horizon.
                    </h1>
                    <div className="flex flex-row items-center justify-center space-x-3 pt-6 sm:p-0">
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-white text-black border border-white grow"
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
                          className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-white border border-white grow"
                          href="/get-involved"
                        >
                          Get involved
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </SplashContainer>
        <div className="py-3 md:py-6 lg:py-8">
          <LogoCloud1 />
        </div>
        <Container>
          <div className="py-20 grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start">
              <p className="text-2xl tracking-wide font-guthen mb-4">
                Our mission
              </p>
              <h2 className="text-5xl font-chedros">
                We&apos;re on a mission to give students the tools to build the
                future of tomorrow, today.
              </h2>
              <p className="text-lg text-horizon-grey-700 pt-8">
                When we started Kreative Horizon back in 2019, we had one goal:
                run a fantastic hackathon for the students of Chicago. Since
                then, we have been expanding the reach of our events with the
                hopes of serving the whole midwest, and eventually the nation.
                We believe that events like hackathons, pitch competitions, and
                design jams give students the chance to try out their classroom
                skills in the real world. Plus, they get to network with other
                students on their campus or area, make new friends, connect with
                sponsors (that are looking to hire 👀), and have a great time.
              </p>
              <div className="flex justify-center items-end space-x-10 max-w-[100%] sm:max-w-[75%] mt-8">
                <div className="">
                  <p className="text-7xl lg:text-8xl font-chedros">154</p>
                  <p className="text-2xl font-guthen text-horizon-grey-600">
                    Students empowered
                  </p>
                </div>
                <div className="">
                  <p className="text-7xl lg:text-8xl font-chedros">14</p>
                  <p className="text-2xl font-guthen text-horizon-grey-600">
                    Sponsors served
                  </p>
                </div>
                <div className="">
                  <p className="text-7xl lg:text-8xl font-chedros">24</p>
                  <p className="text-2xl font-guthen text-horizon-grey-600">
                    Projects submitted
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-end items-center">
              <CldImage
                src="kreativehorizon.com/homepage-image-1_zesjjt"
                alt="Kreative Horizon Mission Photo on Homepage of Students at Hackathons"
                className="w-full h-auto"
                width={1080}
                height={1064}
              />
            </div>
          </div>
        </Container>
        <WhatWeDoSection />
        <Container>
          <div className="py-32">
            <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center justify-center space-y-4">
              <p className="text-2xl tracking-wide font-guthen text-left sm:text-center">
                Season One Events
              </p>
              <h2 className="text-5xl font-chedros text-left sm:text-center">
                We&apos;ve got a full slate of events between engineering,
                business, and design.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
                  And you&apos;re invited!
                </span>
              </h2>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 text-white mt-3 sm:m-0"
                  href="/events"
                >
                  See all events &rarr;
                </Link>
              </motion.div>
            </div>
            <div className="pt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event: EventCardType) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="pb-32">
          <LogoCloud6 />
        </div>
        <div className="pt-20 pb-24 sm:py-24 bg-horizon-orange-300">
          <Container>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1 flex flex-col space-y-4 items-start justify-center order-last sm:order-none">
                <p className="font-guthen tracking-wide text-2xl">
                  Why we started
                </p>
                <h2 className="text-4xl md:text-5xl font-chedros">
                  “We started Kreative Horizon to give students the sort of
                  tools they can&apos;t get in the classroom. Events like
                  hackathons and pitch competitions{" "}
                  <span className="text-5xl md:text-6xl underline">
                    give students the chance to build something real and have
                    fun doing it.”
                  </span>
                </h2>
                <p className="text-2xl">Armaan Gupta, Founder</p>
                <Link
                  href="/about-us"
                  className="text-xl hover:underline pt-12 font-bold"
                >
                  Learn more about us &rarr;
                </Link>
              </div>
              <div className="col-span-2 sm:col-span-1 flex justify-center sm:justify-end items-center">
                <CldImage
                  src="kreativehorizon.com/founder-photo_pbibuz"
                  alt="Kreative, LLC Founder Photo"
                  className="w-full h-auto"
                  width={965}
                  height={1267}
                />
              </div>
            </div>
            <div className="pt-12">
              <FloatingCTA3 />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}

export async function getStaticProps() {
  const events: EventCardType[] = await getLatestEvents();

  return {
    props: {
      events,
    },
  };
}
