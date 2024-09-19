import Link from "next/link";
import { useState, useRef } from "react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Accordian from "@/components/Accordian";
import Star from "@/components/Star";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import EventCard from "@/components/EventCard";
import LogoCloud6 from "@/components/LogoCloud6";
import SuccessAlert from "@/components/SuccessAlert";
import ErrorAlert from "@/components/ErrorAlert";
import LeagueBadge from "@/components/LeagueBadge";
import getEventDetails from "@/lib/getEventDetails";
import getStudentReviews from "@/lib/getStudentReviews";
import getLatestEvents from "@/lib/getLatestEvents";
import FAQ from "@/types/FAQ";
import StudentReview from "@/types/StudentReview";
import { NextSeo } from "next-seo";
import { CldImage } from "next-cloudinary";
import { Calendar, MapPin, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import EventCardType from "@/types/EventCard";
import { useRouter } from "next/router";

function ReasonItem({ reason }: { reason: string }) {
  return (
    <div className="flex space-x-4 items-start justify-start">
      <div>
        <Sparkle className="w-10 h-10 text-horizon-orange-300" />
      </div>
      <p className="text-lg text-horizon-grey-700 font-bold italic">{reason}</p>
    </div>
  );
}

function TestimonialRef({
  testimonial,
  name,
  organization,
  major,
  highlight,
}: {
  testimonial: string;
  name: string;
  major: string;
  organization: string;
  highlight: string;
}) {
  const splitWords = testimonial.split(highlight);
  const firstPart = splitWords[0];
  const secondPart = splitWords[1];

  return (
    <div className="bg-horizon-purple-50 rounded-2xl p-10">
      <div className="flex justify-start items-center space-x-2 pb-4">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-lg">
        <span>{firstPart}</span>
        <span className="font-bold text-horizon-purple">{highlight}</span>
        <span>{secondPart}</span>
      </p>
      <div className="grid grid-cols-2 gap-4 pt-6">
        <div className="col-span-1">
          <p className="text-md font-bold">{name}</p>
          <p className="text-md">{major}</p>
        </div>
        <div className="col-span-1 flex justify-end items-center">
          {organization === "Iowa State University" && (
            <CldImage
              src="kreativehorizon.com/universities/iowa-state-black_pi77dz"
              alt="Iowa State University Logo in Black"
              className="w-28 h-auto"
              width={650}
              height={210}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventPageTemplate({
  event,
  relatedEvents,
  reviews1,
  reviews2,
  reviews3,
}: {
  event: any;
  relatedEvents: EventCardType[];
  reviews1: StudentReview[];
  reviews2: StudentReview[];
  reviews3: StudentReview[];
}) {
  const router = useRouter();
  const leadSuccess =
    router.query?.lead_success && router.query.lead_success === "true";
  const leadFailure =
    router.query?.lead_success && router.query.lead_success === "false";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const imageRef = useRef<null | HTMLDivElement>(null);
  const appBoxRef = useRef<null | HTMLDivElement>(null);

  const handleBottomButton = (e: any) => {
    e.preventDefault();
    imageRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  const handleTopButton = (e: any) => {
    e.preventDefault();
    appBoxRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  const faqs: FAQ[] = event.faqs.map((faq: any) => {
    return {
      question: faq.question,
      answer: <p>{faq.answer}</p>,
    };
  });

  const handleKeyPressAppbox = (e: any) => {
    if (e.key === "Enter") {
      document.getElementById("create-download-btn")?.click();
    }
  };

  const handleKeyPressLeadbox = (e: any) => {
    if (e.key === "Enter") {
      document.getElementById("leadbox-download-btn")?.click();
    }
  };

  return (
    <div>
      <NextSeo
        title={`${event.seo_title} | Events`}
        description={`${event.seo_description}`}
      />
      <Navbar />
      <main>
        <Container>
          <div className="max-w-5xl mx-auto pt-12 pb-32">
            <div ref={imageRef}>
              <CldImage
                src={`kreativehorizon.com/events/${event.page_cld_id}`}
                alt={event.page_alt}
                className="w-full h-auto rounded-2xl"
                width={1826}
                height={946}
              />
            </div>
            {leadSuccess && (
              <div className={"mt-8"}>
                <SuccessAlert
                  message={"You're in! We'll reach out when you can register."}
                />
              </div>
            )}
            {leadFailure && (
              <div className={"mt-8"}>
                <ErrorAlert
                  message={
                    "Unfortunately our system is down right now, please try again later."
                  }
                />
              </div>
            )}
            <div className="pt-12 grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <h1 className="text-5xl xs:text-6xl sm:text-7xl font-chedros">
                  {event.title}
                </h1>
                <div className="flex justify-start items-center mt-1">
                  <CldImage
                    src={`kreativehorizon.com/organizers/${event.organizer.logo}`}
                    alt={`${event.organizer.name} logo for the organizer of ${event.title} event`}
                    className="w-7 h-auto rounded-full border border-horizon-grey-400"
                    width="222"
                    height="222"
                  />
                  <p className="text-xl ml-2 text-horizon-grey-700">{`by ${event.organizer.name}`}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="col-span-2 xs:col-span-1">
                    <div className="flex space-x-4 items-start justify-start">
                      <div className="p-2 bg-horizon-orange-100 rounded-lg">
                        <Calendar className="w-8 h-8 text-horizon-orange" />
                      </div>
                      <div>
                        <p className="text-md font-bold">
                          {event.date_top_label}
                        </p>
                        <p className="text-base text-horizon-grey-700">
                          {event.date_bottom_label}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 xs:col-span-1">
                    <div className="flex space-x-4 items-start justify-start">
                      <div className="p-2 bg-horizon-orange-100 rounded-lg">
                        <MapPin className="w-8 h-8 text-horizon-orange" />
                      </div>
                      <div>
                        <a
                          href={event.google_maps_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-horizon-purple"
                        >
                          <p className="text-md font-bold">{event.location}</p>
                          <p className="text-base">
                            {event.address}, {event.city}, {event.state}{" "}
                            {event.zip}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"block lg:hidden"}>
                  {Date.now() <
                    new Date(event.registration_opens_date).getTime() && (
                    <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-[4px] rounded-[20px] shadow-xl">
                      <div
                        id={"lead-box"}
                        className="px-6 py-8 bg-horizon-grey-100 rounded-2xl"
                      >
                        <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.06, 1] }} // Define scale keyframes
                          transition={{
                            repeat: Infinity, // Infinite repeat
                            duration: 1, // Total duration for one bounce cycle
                            ease: "easeInOut", // Easing function for smoother animation
                          }}
                        >
                          <h2 className="text-3xl font-chedros text-center mb-3">
                            Registration will be opening on{" "}
                            {event.registration_opens_date_label}
                          </h2>
                        </motion.div>
                        <p className="text-horizon-grey-700 font-md text-center">
                          We&apos;ll let you know when registration opens so you
                          don&apos;t miss your spot.
                        </p>
                        <div className="mt-6">
                          <form
                            method="POST"
                            className="grid grid-cols-1 gap-3"
                            action={`/api/collect-lead?event=${event.slug}&function=leadbox`}
                          >
                            <p className="hidden">
                              <label id="contact-form-bot-label">
                                Dont fill this out if youre human:{" "}
                                <input
                                  name="botField"
                                  aria-labelledby="contact-form-bot-label"
                                />
                              </label>
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="col-span-1">
                                    <input
                                      type="text"
                                      name="firstName"
                                      id="firstName"
                                      className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                      placeholder="First name"
                                      value={firstName}
                                      onChange={(e) =>
                                        setFirstName(e.target.value)
                                      }
                                      required
                                      aria-required="true"
                                      onKeyUp={handleKeyPressLeadbox}
                                    />
                                  </div>
                                  <div className="col-span-1">
                                    <input
                                      type="text"
                                      name="lastName"
                                      id="lastName"
                                      className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                      placeholder="Last name"
                                      value={lastName}
                                      onChange={(e) =>
                                        setLastName(e.target.value)
                                      }
                                      required
                                      aria-required="true"
                                      onKeyUp={handleKeyPressLeadbox}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                  placeholder="Personal email address"
                                  onChange={(e) => setEmail(e.target.value)}
                                  value={email}
                                  required
                                  aria-required="true"
                                  onKeyUp={handleKeyPressLeadbox}
                                />
                              </div>
                            </div>
                            <div>
                              <motion.div
                                whileHover={{
                                  scale: 1.03,
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.97 }}
                              >
                                <button
                                  type="submit"
                                  id={"reminder-btn"}
                                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg w-full"
                                  onClick={(e) => setShowSpinner(true)}
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
                                      <span>Setting reminder...</span>
                                    </div>
                                  ) : (
                                    "Set a reminder"
                                  )}
                                </button>
                              </motion.div>
                            </div>
                          </form>
                        </div>
                        <div className="flex justify-center items-center">
                          <svg
                            className="h-4 w-auto mt-6 fill-horizon-grey-500"
                            viewBox="0 0 856 79"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.1402 37.516C15.6158 37.516 17.7868 38.1063 19.6531 39.2871C21.5575 40.4297 23.0238 42.1246 24.0522 44.3717C25.1187 46.5808 25.6519 49.2469 25.6519 52.3701C25.6519 55.4933 25.1187 58.1784 24.0522 60.4256C23.0238 62.6346 21.5575 64.3295 19.6531 65.5102C17.7868 66.6529 15.6158 67.2242 13.1402 67.2242C10.7026 67.2242 8.74106 66.6529 7.25565 65.5102C5.77024 64.3676 4.68475 62.6727 3.99918 60.4256V78.0791H0V38.0873H3.99918V44.3146C4.68475 42.0674 5.77024 40.3725 7.25565 39.2299C8.74106 38.0873 10.7026 37.516 13.1402 37.516ZM13.1402 63.2821C15.6158 63.2821 17.6535 62.349 19.2532 60.4827C20.8529 58.6164 21.6527 55.9122 21.6527 52.3701C21.6527 48.828 20.8529 46.1237 19.2532 44.2575C17.6535 42.3912 15.6158 41.458 13.1402 41.458C10.3598 41.458 8.13166 42.2388 6.45582 43.8004C4.81806 45.3239 3.99918 48.1805 3.99918 52.3701C3.99918 56.5597 4.81806 59.4353 6.45582 60.9969C8.13166 62.5204 10.3598 63.2821 13.1402 63.2821Z" />
                            <path d="M43.0938 67.2242C40.5039 67.2242 38.2377 66.6148 36.2952 65.396C34.3528 64.1772 32.8483 62.4442 31.7819 60.197C30.7535 57.9499 30.2393 55.3409 30.2393 52.3701C30.2393 49.3993 30.7535 46.7903 31.7819 44.5431C32.8483 42.296 34.3528 40.563 36.2952 39.3442C38.2377 38.1254 40.5039 37.516 43.0938 37.516C45.6838 37.516 47.95 38.1254 49.8924 39.3442C51.8349 40.563 53.3203 42.296 54.3487 44.5431C55.4151 46.7903 55.9483 49.3993 55.9483 52.3701C55.9483 55.3409 55.4151 57.9499 54.3487 60.197C53.3203 62.4442 51.8349 64.1772 49.8924 65.396C47.95 66.6148 45.6838 67.2242 43.0938 67.2242ZM43.0938 63.2821C45.8361 63.2821 47.9881 62.368 49.5496 60.5398C51.1493 58.7116 51.9492 55.9884 51.9492 52.3701C51.9492 48.7518 51.1493 46.0285 49.5496 44.2003C47.9881 42.3721 45.8361 41.458 43.0938 41.458C40.3515 41.458 38.1806 42.3721 36.5809 44.2003C35.0193 46.0285 34.2385 48.7518 34.2385 52.3701C34.2385 55.9884 35.0193 58.7116 36.5809 60.5398C38.1806 62.368 40.3515 63.2821 43.0938 63.2821Z" />
                            <path d="M93.5272 38.0873H97.5264L89.0139 66.6529H84.729L78.4446 44.6003L72.1031 66.6529H67.8182L59.3628 38.0873H63.362L69.5322 59.9685L69.7035 60.4256L76.5593 38.0873H80.2728L87.0714 60.3684L87.2428 59.9685L93.5272 38.0873Z" />
                            <path d="M103.868 54.1983C104.135 57.2072 105.049 59.4734 106.611 60.9969C108.172 62.5204 110.191 63.2821 112.667 63.2821C114.838 63.2821 116.647 62.7299 118.094 61.6253C119.541 60.4827 120.532 58.8069 121.065 56.5978H125.178C124.607 59.8352 123.198 62.4252 120.951 64.3676C118.742 66.272 115.98 67.2242 112.667 67.2242C110.077 67.2242 107.81 66.6148 105.868 65.396C103.926 64.1772 102.421 62.4442 101.355 60.197C100.326 57.9499 99.8121 55.3409 99.8121 52.3701C99.8121 49.3993 100.326 46.7903 101.355 44.5431C102.421 42.296 103.926 40.563 105.868 39.3442C107.81 38.1254 110.077 37.516 112.667 37.516C116.666 37.516 119.808 38.9633 122.093 41.858C124.378 44.7145 125.521 48.828 125.521 54.1983H103.868ZM121.293 50.5419C120.57 44.486 117.694 41.458 112.667 41.458C110.191 41.458 108.172 42.2198 106.611 43.7433C105.049 45.2668 104.135 47.533 103.868 50.5419H121.293Z" />
                            <path d="M140.777 38.0873C141.577 38.0873 142.225 38.1635 142.72 38.3158C143.215 38.4301 143.786 38.6967 144.434 39.1157V43.1148C143.824 42.6959 143.253 42.4293 142.72 42.315C142.187 42.1627 141.539 42.0865 140.777 42.0865C139.787 42.0865 138.816 42.3912 137.864 43.0006C136.95 43.5719 136.188 44.486 135.578 45.7429C134.969 46.9617 134.664 48.5042 134.664 50.3705V66.6529H130.665V38.0873H134.664V44.5431C135.236 42.5245 136.074 40.9439 137.178 39.8012C138.283 38.6586 139.482 38.0873 140.777 38.0873Z" />
                            <path d="M151.347 54.1983C151.614 57.2072 152.528 59.4734 154.09 60.9969C155.651 62.5204 157.67 63.2821 160.146 63.2821C162.317 63.2821 164.126 62.7299 165.573 61.6253C167.02 60.4827 168.011 58.8069 168.544 56.5978H172.657C172.086 59.8352 170.677 62.4252 168.43 64.3676C166.221 66.272 163.459 67.2242 160.146 67.2242C157.556 67.2242 155.29 66.6148 153.347 65.396C151.405 64.1772 149.9 62.4442 148.834 60.197C147.805 57.9499 147.291 55.3409 147.291 52.3701C147.291 49.3993 147.805 46.7903 148.834 44.5431C149.9 42.296 151.405 40.563 153.347 39.3442C155.29 38.1254 157.556 37.516 160.146 37.516C164.145 37.516 167.287 38.9633 169.572 41.858C171.858 44.7145 173 48.828 173 54.1983H151.347ZM168.772 50.5419C168.049 44.486 165.173 41.458 160.146 41.458C157.67 41.458 155.651 42.2198 154.09 43.7433C152.528 45.2668 151.614 47.533 151.347 50.5419H168.772Z" />
                            <path d="M202.68 26.6611V66.6529H198.681V60.4256C197.996 62.6727 196.91 64.3676 195.425 65.5102C193.939 66.6529 191.978 67.2242 189.54 67.2242C187.064 67.2242 184.874 66.6529 182.97 65.5102C181.104 64.3295 179.637 62.6346 178.571 60.4256C177.543 58.1784 177.028 55.4933 177.028 52.3701C177.028 49.2469 177.543 46.5808 178.571 44.3717C179.637 42.1246 181.104 40.4297 182.97 39.2871C184.874 38.1063 187.064 37.516 189.54 37.516C191.978 37.516 193.939 38.0873 195.425 39.2299C196.91 40.3725 197.996 42.0674 198.681 44.3146V26.6611H202.68ZM189.54 63.2821C192.32 63.2821 194.53 62.5204 196.167 60.9969C197.843 59.4353 198.681 56.5597 198.681 52.3701C198.681 48.1805 197.843 45.3239 196.167 43.8004C194.53 42.2388 192.32 41.458 189.54 41.458C187.064 41.458 185.027 42.3912 183.427 44.2575C181.827 46.1237 181.028 48.828 181.028 52.3701C181.028 55.9122 181.827 58.6164 183.427 60.4827C185.027 62.349 187.064 63.2821 189.54 63.2821Z" />
                            <path d="M232.403 37.516C234.879 37.516 237.05 38.1063 238.916 39.2871C240.82 40.4297 242.287 42.1246 243.315 44.3717C244.382 46.5808 244.915 49.2469 244.915 52.3701C244.915 55.4933 244.382 58.1784 243.315 60.4256C242.287 62.6346 240.82 64.3295 238.916 65.5102C237.05 66.6529 234.879 67.2242 232.403 67.2242C229.966 67.2242 228.004 66.6529 226.519 65.5102C225.033 64.3676 223.948 62.6727 223.262 60.4256V66.6529H219.263V26.6611H223.262V44.3146C223.948 42.0674 225.033 40.3725 226.519 39.2299C228.004 38.0873 229.966 37.516 232.403 37.516ZM232.403 63.2821C234.879 63.2821 236.917 62.349 238.516 60.4827C240.116 58.6164 240.916 55.9122 240.916 52.3701C240.916 48.828 240.116 46.1237 238.516 44.2575C236.917 42.3912 234.879 41.458 232.403 41.458C229.623 41.458 227.395 42.2388 225.719 43.8004C224.081 45.3239 223.262 48.1805 223.262 52.3701C223.262 56.5597 224.081 59.4353 225.719 60.9969C227.395 62.5204 229.623 63.2821 232.403 63.2821Z" />
                            <path d="M272.41 38.0873L261.955 66.6529C261.041 69.2047 260.088 71.2805 259.098 72.8802C258.108 74.4798 256.851 75.7367 255.327 76.6508C253.842 77.603 251.957 78.0791 249.671 78.0791V74.137C251.728 74.137 253.328 73.5657 254.471 72.4231C255.613 71.2805 256.68 69.3571 257.67 66.6529L247.215 38.0873H251.5L259.841 60.8255L268.125 38.0873H272.41Z" />
                            <path d="M323.946 47.3036L340.682 28.5228V27.7297H326.471L313.37 42.7948V7.11305L302 0.309448V69.1858H313.37V52.2206L326.869 69.1858H341.553V68.3927L323.946 47.3036ZM343.092 69.1858H354.458V48.7311C354.458 42.0692 358.17 38.1848 363.931 38.1848H367.879L370.917 27.0075H365.038C359.75 27.0075 356.263 30.0988 354.458 33.7571H354.144L353.196 27.7297H343.092V69.1858ZM389.087 69.8978C400.375 69.8978 406.926 63.3204 408.033 55.8654H396.262C395.553 57.7688 393.579 59.9894 389.08 59.9894C383.555 59.9894 381.109 56.5809 381.028 51.7448H408.576V47.2259C408.576 35.9676 401.472 27.0075 388.844 27.0075C375.422 27.0075 368.635 36.7573 368.635 48.4915C368.642 60.3843 376.063 69.8978 389.087 69.8978ZM381.115 44.0469C381.352 40.0815 383.64 36.9902 388.851 36.9902C393.666 36.9902 395.938 40.0815 396.191 44.0469H381.115ZM423.793 69.8978C428.923 69.8978 432.568 68.0755 434.842 65.46H435.16V68.7099L446.921 69.1858V41.9106C446.921 33.2711 440.134 27.0075 428.845 27.0075C416.696 27.0075 411.084 35.3669 411.084 43.139L422.45 41.4516C422.45 38.9138 424.661 36.8518 428.45 36.8518C432.949 36.8518 434.765 39.0724 434.765 41.914V45.3259C433.108 44.7691 429.004 44.1346 425.923 44.1346C414.556 44.1346 409.346 49.1968 409.346 56.9015C409.346 64.2687 414.485 69.8978 423.793 69.8978ZM426.871 60.3843C423.24 60.3843 421.346 58.6395 421.346 56.2636C421.346 54.043 423.398 52.2983 427.344 52.2983C429.883 52.2582 432.405 52.7169 434.768 53.6482V54.0464C434.765 57.4516 431.845 60.3843 426.871 60.3843ZM469.026 69.8978C472.893 69.8978 476.113 69.1858 477.392 68.7099V58.5585H476.602C475.341 59.0311 474.004 59.2723 472.657 59.2706C469.026 59.2706 467.365 57.6068 467.365 53.7224V38.1072H477.233V27.7196H467.365V13.461H466.579L455.763 17.3859V27.7297H448.5V38.1072H455.209V56.6686C455.209 64.1911 459.475 69.8978 469.026 69.8978ZM487.864 23.518C492.521 23.518 495.207 20.8181 495.207 16.3836C495.207 12.0234 492.508 9.32692 487.864 9.32692C483.051 9.32692 480.524 12.0268 480.524 16.3836C480.524 20.8215 483.051 23.518 487.864 23.518ZM481.708 69.1858H493.857V27.7196H481.708V69.1858ZM509.571 69.1858H525.122L538.067 28.5228V27.7297H525.753L517.623 57.7013H517.306L508.939 27.7297H496.453V28.5228L509.571 69.1858ZM556.565 69.8978C567.85 69.8978 574.404 63.3204 575.507 55.8654H563.746C563.038 57.7688 561.063 59.9894 556.565 59.9894C551.037 59.9894 548.59 56.5809 548.512 51.7448H576.061V47.2259C576.061 35.9676 568.974 27.0075 556.328 27.0075C542.907 27.0075 536.12 36.7573 536.12 48.4915C536.12 60.3843 543.538 69.8978 556.565 69.8978ZM548.59 44.0469C548.83 40.0815 551.118 36.9902 556.328 36.9902C561.141 36.9902 563.432 40.0815 563.669 44.0469H548.59Z" />
                            <path d="M584.988 28.552L587.366 17.197H628.72L626.341 28.552H611.687L602.864 69.9055H590.818L599.642 28.552H584.988Z" />
                            <path d="M620.965 69.9055L632.166 17.197H644.212L633.01 69.9055H620.965Z" />
                            <path d="M674.729 27.6313C666.366 27.6313 657.927 35.1501 656.162 43.5129C654.398 51.8757 659.615 59.4712 667.978 59.4712C672.351 59.4712 676.877 56.7859 680.253 53.7938L687.388 62.847C681.174 68.1409 673.348 71.44 665.369 71.44C650.024 71.44 640.127 58.9342 643.426 43.5129C646.649 28.1683 661.84 15.5858 677.261 15.5858C685.164 15.5858 691.608 18.8849 695.598 24.1788L684.626 33.232C682.478 30.2399 679.102 27.6313 674.729 27.6313Z" />
                            <path d="M739.265 24.1788L715.941 43.4362L731.286 62.847L720.852 71.44L705.814 52.336L702.131 69.9055H690.086L701.287 17.197H713.333L709.65 34.5363L732.59 15.5858L739.265 24.1788Z" />
                            <path d="M733.822 69.9055L745.023 17.197H774.945L772.413 29.2425H754.46L752.696 37.7587H767.273L764.818 49.3438H750.241L748.399 57.8601H766.276L763.744 69.9055H733.822Z" />
                            <path d="M774.757 28.552L777.135 17.197H818.488L816.11 28.552H801.456L792.633 69.9055H780.587L789.411 28.552H774.757Z" />
                            <path d="M836.666 37.2984C848.788 39.5233 853.775 45.7379 851.78 55.4049C850.092 63.2307 841.192 71.3633 829.3 71.3633C819.864 71.3633 814.416 66.3763 813.189 65.2254L823.393 55.4049C824.85 56.6325 826.308 60.0083 831.679 60.0083C836.129 60.0083 838.507 57.0928 839.044 55.4049C839.428 54.2541 839.888 51.4153 832.062 49.8809C831.909 49.8809 831.679 49.8042 831.602 49.8042C819.326 47.5025 814.186 41.2879 816.181 31.6976C817.869 23.7952 826.769 15.6625 838.737 15.6625C848.558 15.6625 854.159 21.1099 854.926 22.0305C855.233 22.2607 856 23.0279 856 23.0279L845.719 32.7717C845.719 32.7717 844.952 31.9278 844.568 31.6209C842.88 30.2399 841.499 27.6313 836.129 27.6313C831.679 27.6313 829.3 30.0097 828.917 31.6976C828.61 33.0019 828.073 35.6105 836.129 37.2216C836.282 37.2216 836.512 37.2216 836.666 37.2984Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {Date.now() >=
                    new Date(event.registration_opens_date).getTime() &&
                    Date.now() <=
                      new Date(event.registration_closes_date).getTime() && (
                      <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-[4px] rounded-[20px] shadow-xl">
                        <div
                          id={"app-box"}
                          className="px-6 py-8 bg-horizon-grey-100 rounded-2xl"
                        >
                          <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.06, 1] }} // Define scale keyframes
                            transition={{
                              repeat: Infinity, // Infinite repeat
                              duration: 1, // Total duration for one bounce cycle
                              ease: "easeInOut", // Easing function for smoother animation
                            }}
                          >
                            <h2 className="text-3xl font-chedros text-center mb-3">
                              Apply to participate and secure your spot now
                            </h2>
                          </motion.div>
                          <p className="text-horizon-grey-700 font-md text-center">
                            We use your application to ensure that only
                            committed students are coming and to get to know you
                            better!
                          </p>
                          <div className="mt-6">
                            <form
                              method="POST"
                              className="grid grid-cols-1 gap-3"
                              action={`/api/collect-lead?event=${event.slug}&form_id=${event.typeform_id}&function=appbox`}
                            >
                              <p className="hidden">
                                <label id="contact-form-bot-label">
                                  Dont fill this out if youre human:{" "}
                                  <input
                                    name="botField"
                                    aria-labelledby="contact-form-bot-label"
                                  />
                                </label>
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="col-span-1">
                                      <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(e) =>
                                          setFirstName(e.target.value)
                                        }
                                        required
                                        aria-required="true"
                                        onKeyUp={handleKeyPressLeadbox}
                                      />
                                    </div>
                                    <div className="col-span-1">
                                      <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(e) =>
                                          setLastName(e.target.value)
                                        }
                                        required
                                        aria-required="true"
                                        onKeyUp={handleKeyPressLeadbox}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                    placeholder="Personal email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-required="true"
                                    onKeyUp={handleKeyPressAppbox}
                                  />
                                </div>
                              </div>
                              <div>
                                <motion.div
                                  whileHover={{
                                    scale: 1.03,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  <button
                                    type="submit"
                                    id={"continue-btn"}
                                    className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg w-full"
                                    onClick={(e) => setShowSpinner(true)}
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
                                        <span>Connecting...</span>
                                      </div>
                                    ) : (
                                      "Continue  👉"
                                    )}
                                  </button>
                                </motion.div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="flex justify-center items-center"
                            ref={appBoxRef}
                          >
                            <svg
                              className="h-4 w-auto mt-6 fill-horizon-grey-500"
                              viewBox="0 0 856 79"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.1402 37.516C15.6158 37.516 17.7868 38.1063 19.6531 39.2871C21.5575 40.4297 23.0238 42.1246 24.0522 44.3717C25.1187 46.5808 25.6519 49.2469 25.6519 52.3701C25.6519 55.4933 25.1187 58.1784 24.0522 60.4256C23.0238 62.6346 21.5575 64.3295 19.6531 65.5102C17.7868 66.6529 15.6158 67.2242 13.1402 67.2242C10.7026 67.2242 8.74106 66.6529 7.25565 65.5102C5.77024 64.3676 4.68475 62.6727 3.99918 60.4256V78.0791H0V38.0873H3.99918V44.3146C4.68475 42.0674 5.77024 40.3725 7.25565 39.2299C8.74106 38.0873 10.7026 37.516 13.1402 37.516ZM13.1402 63.2821C15.6158 63.2821 17.6535 62.349 19.2532 60.4827C20.8529 58.6164 21.6527 55.9122 21.6527 52.3701C21.6527 48.828 20.8529 46.1237 19.2532 44.2575C17.6535 42.3912 15.6158 41.458 13.1402 41.458C10.3598 41.458 8.13166 42.2388 6.45582 43.8004C4.81806 45.3239 3.99918 48.1805 3.99918 52.3701C3.99918 56.5597 4.81806 59.4353 6.45582 60.9969C8.13166 62.5204 10.3598 63.2821 13.1402 63.2821Z" />
                              <path d="M43.0938 67.2242C40.5039 67.2242 38.2377 66.6148 36.2952 65.396C34.3528 64.1772 32.8483 62.4442 31.7819 60.197C30.7535 57.9499 30.2393 55.3409 30.2393 52.3701C30.2393 49.3993 30.7535 46.7903 31.7819 44.5431C32.8483 42.296 34.3528 40.563 36.2952 39.3442C38.2377 38.1254 40.5039 37.516 43.0938 37.516C45.6838 37.516 47.95 38.1254 49.8924 39.3442C51.8349 40.563 53.3203 42.296 54.3487 44.5431C55.4151 46.7903 55.9483 49.3993 55.9483 52.3701C55.9483 55.3409 55.4151 57.9499 54.3487 60.197C53.3203 62.4442 51.8349 64.1772 49.8924 65.396C47.95 66.6148 45.6838 67.2242 43.0938 67.2242ZM43.0938 63.2821C45.8361 63.2821 47.9881 62.368 49.5496 60.5398C51.1493 58.7116 51.9492 55.9884 51.9492 52.3701C51.9492 48.7518 51.1493 46.0285 49.5496 44.2003C47.9881 42.3721 45.8361 41.458 43.0938 41.458C40.3515 41.458 38.1806 42.3721 36.5809 44.2003C35.0193 46.0285 34.2385 48.7518 34.2385 52.3701C34.2385 55.9884 35.0193 58.7116 36.5809 60.5398C38.1806 62.368 40.3515 63.2821 43.0938 63.2821Z" />
                              <path d="M93.5272 38.0873H97.5264L89.0139 66.6529H84.729L78.4446 44.6003L72.1031 66.6529H67.8182L59.3628 38.0873H63.362L69.5322 59.9685L69.7035 60.4256L76.5593 38.0873H80.2728L87.0714 60.3684L87.2428 59.9685L93.5272 38.0873Z" />
                              <path d="M103.868 54.1983C104.135 57.2072 105.049 59.4734 106.611 60.9969C108.172 62.5204 110.191 63.2821 112.667 63.2821C114.838 63.2821 116.647 62.7299 118.094 61.6253C119.541 60.4827 120.532 58.8069 121.065 56.5978H125.178C124.607 59.8352 123.198 62.4252 120.951 64.3676C118.742 66.272 115.98 67.2242 112.667 67.2242C110.077 67.2242 107.81 66.6148 105.868 65.396C103.926 64.1772 102.421 62.4442 101.355 60.197C100.326 57.9499 99.8121 55.3409 99.8121 52.3701C99.8121 49.3993 100.326 46.7903 101.355 44.5431C102.421 42.296 103.926 40.563 105.868 39.3442C107.81 38.1254 110.077 37.516 112.667 37.516C116.666 37.516 119.808 38.9633 122.093 41.858C124.378 44.7145 125.521 48.828 125.521 54.1983H103.868ZM121.293 50.5419C120.57 44.486 117.694 41.458 112.667 41.458C110.191 41.458 108.172 42.2198 106.611 43.7433C105.049 45.2668 104.135 47.533 103.868 50.5419H121.293Z" />
                              <path d="M140.777 38.0873C141.577 38.0873 142.225 38.1635 142.72 38.3158C143.215 38.4301 143.786 38.6967 144.434 39.1157V43.1148C143.824 42.6959 143.253 42.4293 142.72 42.315C142.187 42.1627 141.539 42.0865 140.777 42.0865C139.787 42.0865 138.816 42.3912 137.864 43.0006C136.95 43.5719 136.188 44.486 135.578 45.7429C134.969 46.9617 134.664 48.5042 134.664 50.3705V66.6529H130.665V38.0873H134.664V44.5431C135.236 42.5245 136.074 40.9439 137.178 39.8012C138.283 38.6586 139.482 38.0873 140.777 38.0873Z" />
                              <path d="M151.347 54.1983C151.614 57.2072 152.528 59.4734 154.09 60.9969C155.651 62.5204 157.67 63.2821 160.146 63.2821C162.317 63.2821 164.126 62.7299 165.573 61.6253C167.02 60.4827 168.011 58.8069 168.544 56.5978H172.657C172.086 59.8352 170.677 62.4252 168.43 64.3676C166.221 66.272 163.459 67.2242 160.146 67.2242C157.556 67.2242 155.29 66.6148 153.347 65.396C151.405 64.1772 149.9 62.4442 148.834 60.197C147.805 57.9499 147.291 55.3409 147.291 52.3701C147.291 49.3993 147.805 46.7903 148.834 44.5431C149.9 42.296 151.405 40.563 153.347 39.3442C155.29 38.1254 157.556 37.516 160.146 37.516C164.145 37.516 167.287 38.9633 169.572 41.858C171.858 44.7145 173 48.828 173 54.1983H151.347ZM168.772 50.5419C168.049 44.486 165.173 41.458 160.146 41.458C157.67 41.458 155.651 42.2198 154.09 43.7433C152.528 45.2668 151.614 47.533 151.347 50.5419H168.772Z" />
                              <path d="M202.68 26.6611V66.6529H198.681V60.4256C197.996 62.6727 196.91 64.3676 195.425 65.5102C193.939 66.6529 191.978 67.2242 189.54 67.2242C187.064 67.2242 184.874 66.6529 182.97 65.5102C181.104 64.3295 179.637 62.6346 178.571 60.4256C177.543 58.1784 177.028 55.4933 177.028 52.3701C177.028 49.2469 177.543 46.5808 178.571 44.3717C179.637 42.1246 181.104 40.4297 182.97 39.2871C184.874 38.1063 187.064 37.516 189.54 37.516C191.978 37.516 193.939 38.0873 195.425 39.2299C196.91 40.3725 197.996 42.0674 198.681 44.3146V26.6611H202.68ZM189.54 63.2821C192.32 63.2821 194.53 62.5204 196.167 60.9969C197.843 59.4353 198.681 56.5597 198.681 52.3701C198.681 48.1805 197.843 45.3239 196.167 43.8004C194.53 42.2388 192.32 41.458 189.54 41.458C187.064 41.458 185.027 42.3912 183.427 44.2575C181.827 46.1237 181.028 48.828 181.028 52.3701C181.028 55.9122 181.827 58.6164 183.427 60.4827C185.027 62.349 187.064 63.2821 189.54 63.2821Z" />
                              <path d="M232.403 37.516C234.879 37.516 237.05 38.1063 238.916 39.2871C240.82 40.4297 242.287 42.1246 243.315 44.3717C244.382 46.5808 244.915 49.2469 244.915 52.3701C244.915 55.4933 244.382 58.1784 243.315 60.4256C242.287 62.6346 240.82 64.3295 238.916 65.5102C237.05 66.6529 234.879 67.2242 232.403 67.2242C229.966 67.2242 228.004 66.6529 226.519 65.5102C225.033 64.3676 223.948 62.6727 223.262 60.4256V66.6529H219.263V26.6611H223.262V44.3146C223.948 42.0674 225.033 40.3725 226.519 39.2299C228.004 38.0873 229.966 37.516 232.403 37.516ZM232.403 63.2821C234.879 63.2821 236.917 62.349 238.516 60.4827C240.116 58.6164 240.916 55.9122 240.916 52.3701C240.916 48.828 240.116 46.1237 238.516 44.2575C236.917 42.3912 234.879 41.458 232.403 41.458C229.623 41.458 227.395 42.2388 225.719 43.8004C224.081 45.3239 223.262 48.1805 223.262 52.3701C223.262 56.5597 224.081 59.4353 225.719 60.9969C227.395 62.5204 229.623 63.2821 232.403 63.2821Z" />
                              <path d="M272.41 38.0873L261.955 66.6529C261.041 69.2047 260.088 71.2805 259.098 72.8802C258.108 74.4798 256.851 75.7367 255.327 76.6508C253.842 77.603 251.957 78.0791 249.671 78.0791V74.137C251.728 74.137 253.328 73.5657 254.471 72.4231C255.613 71.2805 256.68 69.3571 257.67 66.6529L247.215 38.0873H251.5L259.841 60.8255L268.125 38.0873H272.41Z" />
                              <path d="M323.946 47.3036L340.682 28.5228V27.7297H326.471L313.37 42.7948V7.11305L302 0.309448V69.1858H313.37V52.2206L326.869 69.1858H341.553V68.3927L323.946 47.3036ZM343.092 69.1858H354.458V48.7311C354.458 42.0692 358.17 38.1848 363.931 38.1848H367.879L370.917 27.0075H365.038C359.75 27.0075 356.263 30.0988 354.458 33.7571H354.144L353.196 27.7297H343.092V69.1858ZM389.087 69.8978C400.375 69.8978 406.926 63.3204 408.033 55.8654H396.262C395.553 57.7688 393.579 59.9894 389.08 59.9894C383.555 59.9894 381.109 56.5809 381.028 51.7448H408.576V47.2259C408.576 35.9676 401.472 27.0075 388.844 27.0075C375.422 27.0075 368.635 36.7573 368.635 48.4915C368.642 60.3843 376.063 69.8978 389.087 69.8978ZM381.115 44.0469C381.352 40.0815 383.64 36.9902 388.851 36.9902C393.666 36.9902 395.938 40.0815 396.191 44.0469H381.115ZM423.793 69.8978C428.923 69.8978 432.568 68.0755 434.842 65.46H435.16V68.7099L446.921 69.1858V41.9106C446.921 33.2711 440.134 27.0075 428.845 27.0075C416.696 27.0075 411.084 35.3669 411.084 43.139L422.45 41.4516C422.45 38.9138 424.661 36.8518 428.45 36.8518C432.949 36.8518 434.765 39.0724 434.765 41.914V45.3259C433.108 44.7691 429.004 44.1346 425.923 44.1346C414.556 44.1346 409.346 49.1968 409.346 56.9015C409.346 64.2687 414.485 69.8978 423.793 69.8978ZM426.871 60.3843C423.24 60.3843 421.346 58.6395 421.346 56.2636C421.346 54.043 423.398 52.2983 427.344 52.2983C429.883 52.2582 432.405 52.7169 434.768 53.6482V54.0464C434.765 57.4516 431.845 60.3843 426.871 60.3843ZM469.026 69.8978C472.893 69.8978 476.113 69.1858 477.392 68.7099V58.5585H476.602C475.341 59.0311 474.004 59.2723 472.657 59.2706C469.026 59.2706 467.365 57.6068 467.365 53.7224V38.1072H477.233V27.7196H467.365V13.461H466.579L455.763 17.3859V27.7297H448.5V38.1072H455.209V56.6686C455.209 64.1911 459.475 69.8978 469.026 69.8978ZM487.864 23.518C492.521 23.518 495.207 20.8181 495.207 16.3836C495.207 12.0234 492.508 9.32692 487.864 9.32692C483.051 9.32692 480.524 12.0268 480.524 16.3836C480.524 20.8215 483.051 23.518 487.864 23.518ZM481.708 69.1858H493.857V27.7196H481.708V69.1858ZM509.571 69.1858H525.122L538.067 28.5228V27.7297H525.753L517.623 57.7013H517.306L508.939 27.7297H496.453V28.5228L509.571 69.1858ZM556.565 69.8978C567.85 69.8978 574.404 63.3204 575.507 55.8654H563.746C563.038 57.7688 561.063 59.9894 556.565 59.9894C551.037 59.9894 548.59 56.5809 548.512 51.7448H576.061V47.2259C576.061 35.9676 568.974 27.0075 556.328 27.0075C542.907 27.0075 536.12 36.7573 536.12 48.4915C536.12 60.3843 543.538 69.8978 556.565 69.8978ZM548.59 44.0469C548.83 40.0815 551.118 36.9902 556.328 36.9902C561.141 36.9902 563.432 40.0815 563.669 44.0469H548.59Z" />
                              <path d="M584.988 28.552L587.366 17.197H628.72L626.341 28.552H611.687L602.864 69.9055H590.818L599.642 28.552H584.988Z" />
                              <path d="M620.965 69.9055L632.166 17.197H644.212L633.01 69.9055H620.965Z" />
                              <path d="M674.729 27.6313C666.366 27.6313 657.927 35.1501 656.162 43.5129C654.398 51.8757 659.615 59.4712 667.978 59.4712C672.351 59.4712 676.877 56.7859 680.253 53.7938L687.388 62.847C681.174 68.1409 673.348 71.44 665.369 71.44C650.024 71.44 640.127 58.9342 643.426 43.5129C646.649 28.1683 661.84 15.5858 677.261 15.5858C685.164 15.5858 691.608 18.8849 695.598 24.1788L684.626 33.232C682.478 30.2399 679.102 27.6313 674.729 27.6313Z" />
                              <path d="M739.265 24.1788L715.941 43.4362L731.286 62.847L720.852 71.44L705.814 52.336L702.131 69.9055H690.086L701.287 17.197H713.333L709.65 34.5363L732.59 15.5858L739.265 24.1788Z" />
                              <path d="M733.822 69.9055L745.023 17.197H774.945L772.413 29.2425H754.46L752.696 37.7587H767.273L764.818 49.3438H750.241L748.399 57.8601H766.276L763.744 69.9055H733.822Z" />
                              <path d="M774.757 28.552L777.135 17.197H818.488L816.11 28.552H801.456L792.633 69.9055H780.587L789.411 28.552H774.757Z" />
                              <path d="M836.666 37.2984C848.788 39.5233 853.775 45.7379 851.78 55.4049C850.092 63.2307 841.192 71.3633 829.3 71.3633C819.864 71.3633 814.416 66.3763 813.189 65.2254L823.393 55.4049C824.85 56.6325 826.308 60.0083 831.679 60.0083C836.129 60.0083 838.507 57.0928 839.044 55.4049C839.428 54.2541 839.888 51.4153 832.062 49.8809C831.909 49.8809 831.679 49.8042 831.602 49.8042C819.326 47.5025 814.186 41.2879 816.181 31.6976C817.869 23.7952 826.769 15.6625 838.737 15.6625C848.558 15.6625 854.159 21.1099 854.926 22.0305C855.233 22.2607 856 23.0279 856 23.0279L845.719 32.7717C845.719 32.7717 844.952 31.9278 844.568 31.6209C842.88 30.2399 841.499 27.6313 836.129 27.6313C831.679 27.6313 829.3 30.0097 828.917 31.6976C828.61 33.0019 828.073 35.6105 836.129 37.2216C836.282 37.2216 836.512 37.2216 836.666 37.2984Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                <div className="mt-4">
                  <p className="font-guthen text-horizon-pink mb-1 text-xl tracking-wider">
                    Join us for...
                  </p>
                  <h2 className="text-4xl font-chedros mb-3">
                    {event.subheadline}
                  </h2>
                  <div className="text-lg space-y-3 text-horizon-grey-600">
                    {event.description
                      .split("\n")
                      .map((item: any, i: number) => {
                        return <p key={i}>{item}</p>;
                      })}
                  </div>
                  <div className="flex items-center justify-start space-x-3 mt-9 md:p-0 lg:hidden">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        className="rounded-md py-3.5 px-7 md:py-3 md:px-5 font-bold bg-horizon-grey-800 text-white shadow-lg"
                        onClick={handleTopButton}
                      >
                        Apply now 👇
                      </button>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="hidden xs:flex rounded-md py-3 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                        href="/contact-us"
                      >
                        Contact us 📬
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="font-guthen text-horizon-pink mb-1 text-xl tracking-wider">
                    FAQs
                  </p>
                  <h2 className="text-4xl font-chedros mb-9">
                    You have questions, we have answers.
                  </h2>
                  <Accordian faqs={faqs} />
                  <div className="mt-12 grid grid-cols-5 p-6 bg-horizon-orange-100 rounded-xl">
                    <div className="col-span-5 sm:col-span-3 flex flex-col items-start justify-center">
                      <p className="text-lg text-horizon-grey-700 font-bold">
                        Have another question?
                      </p>
                      <p className="text-md text-horizon-grey-600">
                        Drop us a line and we&apos;ll get back to you soooon!
                      </p>
                    </div>
                    <div className="col-span-5 sm:col-span-2 block mt-8 mb-4 sm:m-0 sm:flex justify-end items-center">
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          className="w-full rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                          href="/contact-us"
                        >
                          Contact us 📬
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="font-guthen text-horizon-pink mb-1 text-xl tracking-wider">
                    Need more reasons?
                  </p>
                  <h2 className="text-4xl font-chedros mb-6">
                    Why you should attend {event.title}
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-12">
                    <div className="col-span-2 sm:col-span-1 space-y-4">
                      {event.reasons_to_attend
                        .slice(0, 3)
                        .map((reason: any) => (
                          <div key={reason._id}>
                            <ReasonItem reason={reason.reason} />
                          </div>
                        ))}
                    </div>
                    <div className="col-span-2 sm:col-span-1 space-y-4">
                      {event.reasons_to_attend
                        .slice(3, 6)
                        .map((reason: any) => (
                          <div key={reason._id}>
                            <ReasonItem reason={reason.reason} />
                          </div>
                        ))}
                    </div>
                  </div>
                  <TestimonialRef
                    testimonial={event.testimonial_ref.testimonial}
                    name={event.testimonial_ref.fullName}
                    organization={event.testimonial_ref.organization}
                    highlight={event.testimonial_ref.highlighted_text}
                    major={event.testimonial_ref.position}
                  />
                </div>
                <div className="mt-12">
                  <p className="font-guthen text-horizon-pink mb-1 text-xl tracking-wider">
                    Schedule
                  </p>
                  <h2 className="text-4xl font-chedros mb-6">
                    {event.schedule_headline}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`bg-horizon-grey-100 p-8 rounded-2xl ${
                        event.schedule_days_num === 2
                          ? "col-span-2 sm:col-span-1"
                          : "col-span-2"
                      }`}
                    >
                      <h3 className="text-3xl font-chedros text-horizon-grey-700 mb-3">
                        {event.day_one_title}
                      </h3>
                      <div className="text-lg space-y-3">
                        {event.day_one_items
                          .split("\n")
                          .map((item: any, i: number) => {
                            return <p key={i}>{item}</p>;
                          })}
                      </div>
                    </div>
                    {event.schedule_days_num === 2 && (
                      <div className="col-span-2 sm:col-span-1 bg-horizon-grey-100 p-8 rounded-2xl">
                        <h3 className="text-3xl font-chedros text-horizon-grey-700 mb-3">
                          {event.day_two_title}
                        </h3>
                        <div className="text-lg space-y-3">
                          {event.day_two_items
                            .split("\n")
                            .map((item: any, i: number) => {
                              return <p key={i}>{item}</p>;
                            })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-12 pb-2">
                  <p className="font-guthen text-horizon-pink mb-1 text-xl tracking-wider">
                    Judges
                  </p>
                  <h2 className="text-4xl font-chedros mb-3">
                    {event.judges_headline}
                  </h2>
                  {event.judges ? (
                    <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
                      {event.judges.map((judge: any) => (
                        <div key={judge._id} className="col-span-1 pr-4 mb-4">
                          <CldImage
                            src={`kreativehorizon.com/judges/${judge.headshot_cld_id}`}
                            alt={`${judge.name} - ${judge.position} at ${judge.organization} Judge Headshot for ${event.title}`}
                            className="w-24 h-24 rounded-full mb-2"
                            width={500}
                            height={500}
                          />
                          <p className="text-md md:text-lg font-bold text-horizon-orange">
                            {judge.name}
                          </p>
                          <p className="text-md text-horizon-grey-600">
                            {judge.position} at {judge.organization}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="">
                      <p className="text-xl text-horizon-grey-600">
                        Judges will be announced soon! 👀
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-12 pb-6">
                  <p className="font-guthen text-horizon-pink mb-1 text-xl tracking-wider">
                    Apply now!
                  </p>
                  <h2 className="text-4xl font-chedros mb-3">
                    {event.conclusion_headline}
                  </h2>
                  <div className="text-lg space-y-3 text-horizon-grey-600 mb-8">
                    {event.conclusion_description
                      .split("\n")
                      .map((item: any, i: number) => {
                        return <p key={i}>{item}</p>;
                      })}
                  </div>
                  <div className="lg:flex items-center justify-start space-x-3 pt-3 md:p-0 hidden">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        className="rounded-md py-3.5 px-7 md:py-3 md:px-5 font-bold bg-horizon-grey-800 text-white shadow-lg"
                        onClick={handleBottomButton}
                      >
                        Apply now ☝️
                      </button>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="flex rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-grey-800 border border-horizon-grey-800"
                        href="/contact-us"
                      >
                        Contact us 📬
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                {Date.now() <
                  new Date(event.registration_opens_date).getTime() && (
                  <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-[4px] rounded-[20px] shadow-xl">
                    <div
                      id={"lead-box"}
                      className="px-6 py-8 bg-horizon-grey-100 rounded-2xl"
                    >
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.06, 1] }} // Define scale keyframes
                        transition={{
                          repeat: Infinity, // Infinite repeat
                          duration: 1, // Total duration for one bounce cycle
                          ease: "easeInOut", // Easing function for smoother animation
                        }}
                      >
                        <h2 className="text-3xl font-chedros text-center mb-3">
                          Registration will be opening on{" "}
                          {event.registration_opens_date_label}
                        </h2>
                      </motion.div>
                      <p className="text-horizon-grey-700 font-md text-center">
                        We&apos;ll let you know when registration opens so you
                        don&apos;t miss your spot.
                      </p>
                      <div className="mt-6">
                        <form
                          method="POST"
                          className="grid grid-cols-1 gap-3"
                          action={`/api/collect-lead?event=${event.slug}&function=leadbox`}
                        >
                          <p className="hidden">
                            <label id="contact-form-bot-label">
                              Dont fill this out if youre human:{" "}
                              <input
                                name="botField"
                                aria-labelledby="contact-form-bot-label"
                              />
                            </label>
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-1">
                                  <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) =>
                                      setFirstName(e.target.value)
                                    }
                                    required
                                    aria-required="true"
                                    onKeyUp={handleKeyPressLeadbox}
                                  />
                                </div>
                                <div className="col-span-1">
                                  <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) =>
                                      setLastName(e.target.value)
                                    }
                                    required
                                    aria-required="true"
                                    onKeyUp={handleKeyPressLeadbox}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                placeholder="Personal email address"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                aria-required="true"
                                onKeyUp={handleKeyPressLeadbox}
                              />
                            </div>
                          </div>
                          <div>
                            <motion.div
                              whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.97 }}
                            >
                              <button
                                type="submit"
                                id={"reminder-btn"}
                                className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg w-full"
                                onClick={(e) => setShowSpinner(true)}
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
                                    <span>Setting reminder...</span>
                                  </div>
                                ) : (
                                  "Set a reminder"
                                )}
                              </button>
                            </motion.div>
                          </div>
                        </form>
                      </div>
                      <div className="flex justify-center items-center">
                        <svg
                          className="h-4 w-auto mt-6 fill-horizon-grey-500"
                          viewBox="0 0 856 79"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.1402 37.516C15.6158 37.516 17.7868 38.1063 19.6531 39.2871C21.5575 40.4297 23.0238 42.1246 24.0522 44.3717C25.1187 46.5808 25.6519 49.2469 25.6519 52.3701C25.6519 55.4933 25.1187 58.1784 24.0522 60.4256C23.0238 62.6346 21.5575 64.3295 19.6531 65.5102C17.7868 66.6529 15.6158 67.2242 13.1402 67.2242C10.7026 67.2242 8.74106 66.6529 7.25565 65.5102C5.77024 64.3676 4.68475 62.6727 3.99918 60.4256V78.0791H0V38.0873H3.99918V44.3146C4.68475 42.0674 5.77024 40.3725 7.25565 39.2299C8.74106 38.0873 10.7026 37.516 13.1402 37.516ZM13.1402 63.2821C15.6158 63.2821 17.6535 62.349 19.2532 60.4827C20.8529 58.6164 21.6527 55.9122 21.6527 52.3701C21.6527 48.828 20.8529 46.1237 19.2532 44.2575C17.6535 42.3912 15.6158 41.458 13.1402 41.458C10.3598 41.458 8.13166 42.2388 6.45582 43.8004C4.81806 45.3239 3.99918 48.1805 3.99918 52.3701C3.99918 56.5597 4.81806 59.4353 6.45582 60.9969C8.13166 62.5204 10.3598 63.2821 13.1402 63.2821Z" />
                          <path d="M43.0938 67.2242C40.5039 67.2242 38.2377 66.6148 36.2952 65.396C34.3528 64.1772 32.8483 62.4442 31.7819 60.197C30.7535 57.9499 30.2393 55.3409 30.2393 52.3701C30.2393 49.3993 30.7535 46.7903 31.7819 44.5431C32.8483 42.296 34.3528 40.563 36.2952 39.3442C38.2377 38.1254 40.5039 37.516 43.0938 37.516C45.6838 37.516 47.95 38.1254 49.8924 39.3442C51.8349 40.563 53.3203 42.296 54.3487 44.5431C55.4151 46.7903 55.9483 49.3993 55.9483 52.3701C55.9483 55.3409 55.4151 57.9499 54.3487 60.197C53.3203 62.4442 51.8349 64.1772 49.8924 65.396C47.95 66.6148 45.6838 67.2242 43.0938 67.2242ZM43.0938 63.2821C45.8361 63.2821 47.9881 62.368 49.5496 60.5398C51.1493 58.7116 51.9492 55.9884 51.9492 52.3701C51.9492 48.7518 51.1493 46.0285 49.5496 44.2003C47.9881 42.3721 45.8361 41.458 43.0938 41.458C40.3515 41.458 38.1806 42.3721 36.5809 44.2003C35.0193 46.0285 34.2385 48.7518 34.2385 52.3701C34.2385 55.9884 35.0193 58.7116 36.5809 60.5398C38.1806 62.368 40.3515 63.2821 43.0938 63.2821Z" />
                          <path d="M93.5272 38.0873H97.5264L89.0139 66.6529H84.729L78.4446 44.6003L72.1031 66.6529H67.8182L59.3628 38.0873H63.362L69.5322 59.9685L69.7035 60.4256L76.5593 38.0873H80.2728L87.0714 60.3684L87.2428 59.9685L93.5272 38.0873Z" />
                          <path d="M103.868 54.1983C104.135 57.2072 105.049 59.4734 106.611 60.9969C108.172 62.5204 110.191 63.2821 112.667 63.2821C114.838 63.2821 116.647 62.7299 118.094 61.6253C119.541 60.4827 120.532 58.8069 121.065 56.5978H125.178C124.607 59.8352 123.198 62.4252 120.951 64.3676C118.742 66.272 115.98 67.2242 112.667 67.2242C110.077 67.2242 107.81 66.6148 105.868 65.396C103.926 64.1772 102.421 62.4442 101.355 60.197C100.326 57.9499 99.8121 55.3409 99.8121 52.3701C99.8121 49.3993 100.326 46.7903 101.355 44.5431C102.421 42.296 103.926 40.563 105.868 39.3442C107.81 38.1254 110.077 37.516 112.667 37.516C116.666 37.516 119.808 38.9633 122.093 41.858C124.378 44.7145 125.521 48.828 125.521 54.1983H103.868ZM121.293 50.5419C120.57 44.486 117.694 41.458 112.667 41.458C110.191 41.458 108.172 42.2198 106.611 43.7433C105.049 45.2668 104.135 47.533 103.868 50.5419H121.293Z" />
                          <path d="M140.777 38.0873C141.577 38.0873 142.225 38.1635 142.72 38.3158C143.215 38.4301 143.786 38.6967 144.434 39.1157V43.1148C143.824 42.6959 143.253 42.4293 142.72 42.315C142.187 42.1627 141.539 42.0865 140.777 42.0865C139.787 42.0865 138.816 42.3912 137.864 43.0006C136.95 43.5719 136.188 44.486 135.578 45.7429C134.969 46.9617 134.664 48.5042 134.664 50.3705V66.6529H130.665V38.0873H134.664V44.5431C135.236 42.5245 136.074 40.9439 137.178 39.8012C138.283 38.6586 139.482 38.0873 140.777 38.0873Z" />
                          <path d="M151.347 54.1983C151.614 57.2072 152.528 59.4734 154.09 60.9969C155.651 62.5204 157.67 63.2821 160.146 63.2821C162.317 63.2821 164.126 62.7299 165.573 61.6253C167.02 60.4827 168.011 58.8069 168.544 56.5978H172.657C172.086 59.8352 170.677 62.4252 168.43 64.3676C166.221 66.272 163.459 67.2242 160.146 67.2242C157.556 67.2242 155.29 66.6148 153.347 65.396C151.405 64.1772 149.9 62.4442 148.834 60.197C147.805 57.9499 147.291 55.3409 147.291 52.3701C147.291 49.3993 147.805 46.7903 148.834 44.5431C149.9 42.296 151.405 40.563 153.347 39.3442C155.29 38.1254 157.556 37.516 160.146 37.516C164.145 37.516 167.287 38.9633 169.572 41.858C171.858 44.7145 173 48.828 173 54.1983H151.347ZM168.772 50.5419C168.049 44.486 165.173 41.458 160.146 41.458C157.67 41.458 155.651 42.2198 154.09 43.7433C152.528 45.2668 151.614 47.533 151.347 50.5419H168.772Z" />
                          <path d="M202.68 26.6611V66.6529H198.681V60.4256C197.996 62.6727 196.91 64.3676 195.425 65.5102C193.939 66.6529 191.978 67.2242 189.54 67.2242C187.064 67.2242 184.874 66.6529 182.97 65.5102C181.104 64.3295 179.637 62.6346 178.571 60.4256C177.543 58.1784 177.028 55.4933 177.028 52.3701C177.028 49.2469 177.543 46.5808 178.571 44.3717C179.637 42.1246 181.104 40.4297 182.97 39.2871C184.874 38.1063 187.064 37.516 189.54 37.516C191.978 37.516 193.939 38.0873 195.425 39.2299C196.91 40.3725 197.996 42.0674 198.681 44.3146V26.6611H202.68ZM189.54 63.2821C192.32 63.2821 194.53 62.5204 196.167 60.9969C197.843 59.4353 198.681 56.5597 198.681 52.3701C198.681 48.1805 197.843 45.3239 196.167 43.8004C194.53 42.2388 192.32 41.458 189.54 41.458C187.064 41.458 185.027 42.3912 183.427 44.2575C181.827 46.1237 181.028 48.828 181.028 52.3701C181.028 55.9122 181.827 58.6164 183.427 60.4827C185.027 62.349 187.064 63.2821 189.54 63.2821Z" />
                          <path d="M232.403 37.516C234.879 37.516 237.05 38.1063 238.916 39.2871C240.82 40.4297 242.287 42.1246 243.315 44.3717C244.382 46.5808 244.915 49.2469 244.915 52.3701C244.915 55.4933 244.382 58.1784 243.315 60.4256C242.287 62.6346 240.82 64.3295 238.916 65.5102C237.05 66.6529 234.879 67.2242 232.403 67.2242C229.966 67.2242 228.004 66.6529 226.519 65.5102C225.033 64.3676 223.948 62.6727 223.262 60.4256V66.6529H219.263V26.6611H223.262V44.3146C223.948 42.0674 225.033 40.3725 226.519 39.2299C228.004 38.0873 229.966 37.516 232.403 37.516ZM232.403 63.2821C234.879 63.2821 236.917 62.349 238.516 60.4827C240.116 58.6164 240.916 55.9122 240.916 52.3701C240.916 48.828 240.116 46.1237 238.516 44.2575C236.917 42.3912 234.879 41.458 232.403 41.458C229.623 41.458 227.395 42.2388 225.719 43.8004C224.081 45.3239 223.262 48.1805 223.262 52.3701C223.262 56.5597 224.081 59.4353 225.719 60.9969C227.395 62.5204 229.623 63.2821 232.403 63.2821Z" />
                          <path d="M272.41 38.0873L261.955 66.6529C261.041 69.2047 260.088 71.2805 259.098 72.8802C258.108 74.4798 256.851 75.7367 255.327 76.6508C253.842 77.603 251.957 78.0791 249.671 78.0791V74.137C251.728 74.137 253.328 73.5657 254.471 72.4231C255.613 71.2805 256.68 69.3571 257.67 66.6529L247.215 38.0873H251.5L259.841 60.8255L268.125 38.0873H272.41Z" />
                          <path d="M323.946 47.3036L340.682 28.5228V27.7297H326.471L313.37 42.7948V7.11305L302 0.309448V69.1858H313.37V52.2206L326.869 69.1858H341.553V68.3927L323.946 47.3036ZM343.092 69.1858H354.458V48.7311C354.458 42.0692 358.17 38.1848 363.931 38.1848H367.879L370.917 27.0075H365.038C359.75 27.0075 356.263 30.0988 354.458 33.7571H354.144L353.196 27.7297H343.092V69.1858ZM389.087 69.8978C400.375 69.8978 406.926 63.3204 408.033 55.8654H396.262C395.553 57.7688 393.579 59.9894 389.08 59.9894C383.555 59.9894 381.109 56.5809 381.028 51.7448H408.576V47.2259C408.576 35.9676 401.472 27.0075 388.844 27.0075C375.422 27.0075 368.635 36.7573 368.635 48.4915C368.642 60.3843 376.063 69.8978 389.087 69.8978ZM381.115 44.0469C381.352 40.0815 383.64 36.9902 388.851 36.9902C393.666 36.9902 395.938 40.0815 396.191 44.0469H381.115ZM423.793 69.8978C428.923 69.8978 432.568 68.0755 434.842 65.46H435.16V68.7099L446.921 69.1858V41.9106C446.921 33.2711 440.134 27.0075 428.845 27.0075C416.696 27.0075 411.084 35.3669 411.084 43.139L422.45 41.4516C422.45 38.9138 424.661 36.8518 428.45 36.8518C432.949 36.8518 434.765 39.0724 434.765 41.914V45.3259C433.108 44.7691 429.004 44.1346 425.923 44.1346C414.556 44.1346 409.346 49.1968 409.346 56.9015C409.346 64.2687 414.485 69.8978 423.793 69.8978ZM426.871 60.3843C423.24 60.3843 421.346 58.6395 421.346 56.2636C421.346 54.043 423.398 52.2983 427.344 52.2983C429.883 52.2582 432.405 52.7169 434.768 53.6482V54.0464C434.765 57.4516 431.845 60.3843 426.871 60.3843ZM469.026 69.8978C472.893 69.8978 476.113 69.1858 477.392 68.7099V58.5585H476.602C475.341 59.0311 474.004 59.2723 472.657 59.2706C469.026 59.2706 467.365 57.6068 467.365 53.7224V38.1072H477.233V27.7196H467.365V13.461H466.579L455.763 17.3859V27.7297H448.5V38.1072H455.209V56.6686C455.209 64.1911 459.475 69.8978 469.026 69.8978ZM487.864 23.518C492.521 23.518 495.207 20.8181 495.207 16.3836C495.207 12.0234 492.508 9.32692 487.864 9.32692C483.051 9.32692 480.524 12.0268 480.524 16.3836C480.524 20.8215 483.051 23.518 487.864 23.518ZM481.708 69.1858H493.857V27.7196H481.708V69.1858ZM509.571 69.1858H525.122L538.067 28.5228V27.7297H525.753L517.623 57.7013H517.306L508.939 27.7297H496.453V28.5228L509.571 69.1858ZM556.565 69.8978C567.85 69.8978 574.404 63.3204 575.507 55.8654H563.746C563.038 57.7688 561.063 59.9894 556.565 59.9894C551.037 59.9894 548.59 56.5809 548.512 51.7448H576.061V47.2259C576.061 35.9676 568.974 27.0075 556.328 27.0075C542.907 27.0075 536.12 36.7573 536.12 48.4915C536.12 60.3843 543.538 69.8978 556.565 69.8978ZM548.59 44.0469C548.83 40.0815 551.118 36.9902 556.328 36.9902C561.141 36.9902 563.432 40.0815 563.669 44.0469H548.59Z" />
                          <path d="M584.988 28.552L587.366 17.197H628.72L626.341 28.552H611.687L602.864 69.9055H590.818L599.642 28.552H584.988Z" />
                          <path d="M620.965 69.9055L632.166 17.197H644.212L633.01 69.9055H620.965Z" />
                          <path d="M674.729 27.6313C666.366 27.6313 657.927 35.1501 656.162 43.5129C654.398 51.8757 659.615 59.4712 667.978 59.4712C672.351 59.4712 676.877 56.7859 680.253 53.7938L687.388 62.847C681.174 68.1409 673.348 71.44 665.369 71.44C650.024 71.44 640.127 58.9342 643.426 43.5129C646.649 28.1683 661.84 15.5858 677.261 15.5858C685.164 15.5858 691.608 18.8849 695.598 24.1788L684.626 33.232C682.478 30.2399 679.102 27.6313 674.729 27.6313Z" />
                          <path d="M739.265 24.1788L715.941 43.4362L731.286 62.847L720.852 71.44L705.814 52.336L702.131 69.9055H690.086L701.287 17.197H713.333L709.65 34.5363L732.59 15.5858L739.265 24.1788Z" />
                          <path d="M733.822 69.9055L745.023 17.197H774.945L772.413 29.2425H754.46L752.696 37.7587H767.273L764.818 49.3438H750.241L748.399 57.8601H766.276L763.744 69.9055H733.822Z" />
                          <path d="M774.757 28.552L777.135 17.197H818.488L816.11 28.552H801.456L792.633 69.9055H780.587L789.411 28.552H774.757Z" />
                          <path d="M836.666 37.2984C848.788 39.5233 853.775 45.7379 851.78 55.4049C850.092 63.2307 841.192 71.3633 829.3 71.3633C819.864 71.3633 814.416 66.3763 813.189 65.2254L823.393 55.4049C824.85 56.6325 826.308 60.0083 831.679 60.0083C836.129 60.0083 838.507 57.0928 839.044 55.4049C839.428 54.2541 839.888 51.4153 832.062 49.8809C831.909 49.8809 831.679 49.8042 831.602 49.8042C819.326 47.5025 814.186 41.2879 816.181 31.6976C817.869 23.7952 826.769 15.6625 838.737 15.6625C848.558 15.6625 854.159 21.1099 854.926 22.0305C855.233 22.2607 856 23.0279 856 23.0279L845.719 32.7717C845.719 32.7717 844.952 31.9278 844.568 31.6209C842.88 30.2399 841.499 27.6313 836.129 27.6313C831.679 27.6313 829.3 30.0097 828.917 31.6976C828.61 33.0019 828.073 35.6105 836.129 37.2216C836.282 37.2216 836.512 37.2216 836.666 37.2984Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                {Date.now() >=
                  new Date(event.registration_opens_date).getTime() &&
                  Date.now() <=
                    new Date(event.registration_closes_date).getTime() && (
                    <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-[4px] rounded-[20px] shadow-xl">
                      <div
                        id={"app-box"}
                        className="px-6 py-8 bg-horizon-grey-100 rounded-2xl"
                      >
                        {/* <motion.div
                          initial={{ scale: 1 }}
                          animate={{ scale: [1, 1.06, 1] }} // Define scale keyframes
                          transition={{
                            repeat: Infinity, // Infinite repeat
                            duration: 1, // Total duration for one bounce cycle
                            ease: "easeInOut", // Easing function for smoother animation
                          }}
                        >
                          <h2 className="text-3xl font-chedros text-center mb-3">
                            Apply to participate and secure your spot now
                          </h2>
                        </motion.div> */}
                        <h2 className="text-3xl font-chedros text-center mb-3">
                          Apply to participate and secure your spot now!
                        </h2>
                        {/* <p className="text-horizon-grey-700 font-md text-center">
                          We use your application to ensure that only committed
                          students are coming and to get to know you better!
                        </p> */}
                        <div className="mt-6">
                          <form
                            method="POST"
                            className="grid grid-cols-1 gap-3"
                            action={`/api/collect-lead?event=${event.slug}&form_id=${event.typeform_id}&function=appbox`}
                          >
                            <p className="hidden">
                              <label id="contact-form-bot-label">
                                Dont fill this out if youre human:{" "}
                                <input
                                  name="botField"
                                  aria-labelledby="contact-form-bot-label"
                                />
                              </label>
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="col-span-1">
                                    <input
                                      type="text"
                                      name="firstName"
                                      id="firstName"
                                      className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                      placeholder="First name"
                                      value={firstName}
                                      onChange={(e) =>
                                        setFirstName(e.target.value)
                                      }
                                      required
                                      aria-required="true"
                                      onKeyUp={handleKeyPressLeadbox}
                                    />
                                  </div>
                                  <div className="col-span-1">
                                    <input
                                      type="text"
                                      name="lastName"
                                      id="lastName"
                                      className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                      placeholder="Last name"
                                      value={lastName}
                                      onChange={(e) =>
                                        setLastName(e.target.value)
                                      }
                                      required
                                      aria-required="true"
                                      onKeyUp={handleKeyPressLeadbox}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-span-2 sm:col-span-1 lg:col-span-2">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="block w-full rounded-md border-0 py-2 text-horizon-grey-800 shadow-sm ring-1 ring-inset ring-horizon-grey-300 placeholder:text-horizon-grey-600 focus:ring-2 focus:ring-inset focus:ring-horizon-purple sm:text-sm sm:leading-6"
                                  placeholder="Personal email address"
                                  onChange={(e) => setEmail(e.target.value)}
                                  value={email}
                                  required
                                  aria-required="true"
                                  onKeyUp={handleKeyPressAppbox}
                                />
                              </div>
                            </div>
                            <div>
                              <motion.div
                                whileHover={{
                                  scale: 1.03,
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.97 }}
                              >
                                <button
                                  type="submit"
                                  id={"continue-btn"}
                                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange to-horizon-pink text-white shadow-lg w-full"
                                  onClick={(e) => setShowSpinner(true)}
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
                                      <span>Connecting...</span>
                                    </div>
                                  ) : (
                                    "Continue  👉"
                                  )}
                                </button>
                              </motion.div>
                            </div>
                          </form>
                        </div>
                        <div
                          className="flex justify-center items-center"
                          ref={appBoxRef}
                        >
                          <svg
                            className="h-4 w-auto mt-6 fill-horizon-grey-500"
                            viewBox="0 0 856 79"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13.1402 37.516C15.6158 37.516 17.7868 38.1063 19.6531 39.2871C21.5575 40.4297 23.0238 42.1246 24.0522 44.3717C25.1187 46.5808 25.6519 49.2469 25.6519 52.3701C25.6519 55.4933 25.1187 58.1784 24.0522 60.4256C23.0238 62.6346 21.5575 64.3295 19.6531 65.5102C17.7868 66.6529 15.6158 67.2242 13.1402 67.2242C10.7026 67.2242 8.74106 66.6529 7.25565 65.5102C5.77024 64.3676 4.68475 62.6727 3.99918 60.4256V78.0791H0V38.0873H3.99918V44.3146C4.68475 42.0674 5.77024 40.3725 7.25565 39.2299C8.74106 38.0873 10.7026 37.516 13.1402 37.516ZM13.1402 63.2821C15.6158 63.2821 17.6535 62.349 19.2532 60.4827C20.8529 58.6164 21.6527 55.9122 21.6527 52.3701C21.6527 48.828 20.8529 46.1237 19.2532 44.2575C17.6535 42.3912 15.6158 41.458 13.1402 41.458C10.3598 41.458 8.13166 42.2388 6.45582 43.8004C4.81806 45.3239 3.99918 48.1805 3.99918 52.3701C3.99918 56.5597 4.81806 59.4353 6.45582 60.9969C8.13166 62.5204 10.3598 63.2821 13.1402 63.2821Z" />
                            <path d="M43.0938 67.2242C40.5039 67.2242 38.2377 66.6148 36.2952 65.396C34.3528 64.1772 32.8483 62.4442 31.7819 60.197C30.7535 57.9499 30.2393 55.3409 30.2393 52.3701C30.2393 49.3993 30.7535 46.7903 31.7819 44.5431C32.8483 42.296 34.3528 40.563 36.2952 39.3442C38.2377 38.1254 40.5039 37.516 43.0938 37.516C45.6838 37.516 47.95 38.1254 49.8924 39.3442C51.8349 40.563 53.3203 42.296 54.3487 44.5431C55.4151 46.7903 55.9483 49.3993 55.9483 52.3701C55.9483 55.3409 55.4151 57.9499 54.3487 60.197C53.3203 62.4442 51.8349 64.1772 49.8924 65.396C47.95 66.6148 45.6838 67.2242 43.0938 67.2242ZM43.0938 63.2821C45.8361 63.2821 47.9881 62.368 49.5496 60.5398C51.1493 58.7116 51.9492 55.9884 51.9492 52.3701C51.9492 48.7518 51.1493 46.0285 49.5496 44.2003C47.9881 42.3721 45.8361 41.458 43.0938 41.458C40.3515 41.458 38.1806 42.3721 36.5809 44.2003C35.0193 46.0285 34.2385 48.7518 34.2385 52.3701C34.2385 55.9884 35.0193 58.7116 36.5809 60.5398C38.1806 62.368 40.3515 63.2821 43.0938 63.2821Z" />
                            <path d="M93.5272 38.0873H97.5264L89.0139 66.6529H84.729L78.4446 44.6003L72.1031 66.6529H67.8182L59.3628 38.0873H63.362L69.5322 59.9685L69.7035 60.4256L76.5593 38.0873H80.2728L87.0714 60.3684L87.2428 59.9685L93.5272 38.0873Z" />
                            <path d="M103.868 54.1983C104.135 57.2072 105.049 59.4734 106.611 60.9969C108.172 62.5204 110.191 63.2821 112.667 63.2821C114.838 63.2821 116.647 62.7299 118.094 61.6253C119.541 60.4827 120.532 58.8069 121.065 56.5978H125.178C124.607 59.8352 123.198 62.4252 120.951 64.3676C118.742 66.272 115.98 67.2242 112.667 67.2242C110.077 67.2242 107.81 66.6148 105.868 65.396C103.926 64.1772 102.421 62.4442 101.355 60.197C100.326 57.9499 99.8121 55.3409 99.8121 52.3701C99.8121 49.3993 100.326 46.7903 101.355 44.5431C102.421 42.296 103.926 40.563 105.868 39.3442C107.81 38.1254 110.077 37.516 112.667 37.516C116.666 37.516 119.808 38.9633 122.093 41.858C124.378 44.7145 125.521 48.828 125.521 54.1983H103.868ZM121.293 50.5419C120.57 44.486 117.694 41.458 112.667 41.458C110.191 41.458 108.172 42.2198 106.611 43.7433C105.049 45.2668 104.135 47.533 103.868 50.5419H121.293Z" />
                            <path d="M140.777 38.0873C141.577 38.0873 142.225 38.1635 142.72 38.3158C143.215 38.4301 143.786 38.6967 144.434 39.1157V43.1148C143.824 42.6959 143.253 42.4293 142.72 42.315C142.187 42.1627 141.539 42.0865 140.777 42.0865C139.787 42.0865 138.816 42.3912 137.864 43.0006C136.95 43.5719 136.188 44.486 135.578 45.7429C134.969 46.9617 134.664 48.5042 134.664 50.3705V66.6529H130.665V38.0873H134.664V44.5431C135.236 42.5245 136.074 40.9439 137.178 39.8012C138.283 38.6586 139.482 38.0873 140.777 38.0873Z" />
                            <path d="M151.347 54.1983C151.614 57.2072 152.528 59.4734 154.09 60.9969C155.651 62.5204 157.67 63.2821 160.146 63.2821C162.317 63.2821 164.126 62.7299 165.573 61.6253C167.02 60.4827 168.011 58.8069 168.544 56.5978H172.657C172.086 59.8352 170.677 62.4252 168.43 64.3676C166.221 66.272 163.459 67.2242 160.146 67.2242C157.556 67.2242 155.29 66.6148 153.347 65.396C151.405 64.1772 149.9 62.4442 148.834 60.197C147.805 57.9499 147.291 55.3409 147.291 52.3701C147.291 49.3993 147.805 46.7903 148.834 44.5431C149.9 42.296 151.405 40.563 153.347 39.3442C155.29 38.1254 157.556 37.516 160.146 37.516C164.145 37.516 167.287 38.9633 169.572 41.858C171.858 44.7145 173 48.828 173 54.1983H151.347ZM168.772 50.5419C168.049 44.486 165.173 41.458 160.146 41.458C157.67 41.458 155.651 42.2198 154.09 43.7433C152.528 45.2668 151.614 47.533 151.347 50.5419H168.772Z" />
                            <path d="M202.68 26.6611V66.6529H198.681V60.4256C197.996 62.6727 196.91 64.3676 195.425 65.5102C193.939 66.6529 191.978 67.2242 189.54 67.2242C187.064 67.2242 184.874 66.6529 182.97 65.5102C181.104 64.3295 179.637 62.6346 178.571 60.4256C177.543 58.1784 177.028 55.4933 177.028 52.3701C177.028 49.2469 177.543 46.5808 178.571 44.3717C179.637 42.1246 181.104 40.4297 182.97 39.2871C184.874 38.1063 187.064 37.516 189.54 37.516C191.978 37.516 193.939 38.0873 195.425 39.2299C196.91 40.3725 197.996 42.0674 198.681 44.3146V26.6611H202.68ZM189.54 63.2821C192.32 63.2821 194.53 62.5204 196.167 60.9969C197.843 59.4353 198.681 56.5597 198.681 52.3701C198.681 48.1805 197.843 45.3239 196.167 43.8004C194.53 42.2388 192.32 41.458 189.54 41.458C187.064 41.458 185.027 42.3912 183.427 44.2575C181.827 46.1237 181.028 48.828 181.028 52.3701C181.028 55.9122 181.827 58.6164 183.427 60.4827C185.027 62.349 187.064 63.2821 189.54 63.2821Z" />
                            <path d="M232.403 37.516C234.879 37.516 237.05 38.1063 238.916 39.2871C240.82 40.4297 242.287 42.1246 243.315 44.3717C244.382 46.5808 244.915 49.2469 244.915 52.3701C244.915 55.4933 244.382 58.1784 243.315 60.4256C242.287 62.6346 240.82 64.3295 238.916 65.5102C237.05 66.6529 234.879 67.2242 232.403 67.2242C229.966 67.2242 228.004 66.6529 226.519 65.5102C225.033 64.3676 223.948 62.6727 223.262 60.4256V66.6529H219.263V26.6611H223.262V44.3146C223.948 42.0674 225.033 40.3725 226.519 39.2299C228.004 38.0873 229.966 37.516 232.403 37.516ZM232.403 63.2821C234.879 63.2821 236.917 62.349 238.516 60.4827C240.116 58.6164 240.916 55.9122 240.916 52.3701C240.916 48.828 240.116 46.1237 238.516 44.2575C236.917 42.3912 234.879 41.458 232.403 41.458C229.623 41.458 227.395 42.2388 225.719 43.8004C224.081 45.3239 223.262 48.1805 223.262 52.3701C223.262 56.5597 224.081 59.4353 225.719 60.9969C227.395 62.5204 229.623 63.2821 232.403 63.2821Z" />
                            <path d="M272.41 38.0873L261.955 66.6529C261.041 69.2047 260.088 71.2805 259.098 72.8802C258.108 74.4798 256.851 75.7367 255.327 76.6508C253.842 77.603 251.957 78.0791 249.671 78.0791V74.137C251.728 74.137 253.328 73.5657 254.471 72.4231C255.613 71.2805 256.68 69.3571 257.67 66.6529L247.215 38.0873H251.5L259.841 60.8255L268.125 38.0873H272.41Z" />
                            <path d="M323.946 47.3036L340.682 28.5228V27.7297H326.471L313.37 42.7948V7.11305L302 0.309448V69.1858H313.37V52.2206L326.869 69.1858H341.553V68.3927L323.946 47.3036ZM343.092 69.1858H354.458V48.7311C354.458 42.0692 358.17 38.1848 363.931 38.1848H367.879L370.917 27.0075H365.038C359.75 27.0075 356.263 30.0988 354.458 33.7571H354.144L353.196 27.7297H343.092V69.1858ZM389.087 69.8978C400.375 69.8978 406.926 63.3204 408.033 55.8654H396.262C395.553 57.7688 393.579 59.9894 389.08 59.9894C383.555 59.9894 381.109 56.5809 381.028 51.7448H408.576V47.2259C408.576 35.9676 401.472 27.0075 388.844 27.0075C375.422 27.0075 368.635 36.7573 368.635 48.4915C368.642 60.3843 376.063 69.8978 389.087 69.8978ZM381.115 44.0469C381.352 40.0815 383.64 36.9902 388.851 36.9902C393.666 36.9902 395.938 40.0815 396.191 44.0469H381.115ZM423.793 69.8978C428.923 69.8978 432.568 68.0755 434.842 65.46H435.16V68.7099L446.921 69.1858V41.9106C446.921 33.2711 440.134 27.0075 428.845 27.0075C416.696 27.0075 411.084 35.3669 411.084 43.139L422.45 41.4516C422.45 38.9138 424.661 36.8518 428.45 36.8518C432.949 36.8518 434.765 39.0724 434.765 41.914V45.3259C433.108 44.7691 429.004 44.1346 425.923 44.1346C414.556 44.1346 409.346 49.1968 409.346 56.9015C409.346 64.2687 414.485 69.8978 423.793 69.8978ZM426.871 60.3843C423.24 60.3843 421.346 58.6395 421.346 56.2636C421.346 54.043 423.398 52.2983 427.344 52.2983C429.883 52.2582 432.405 52.7169 434.768 53.6482V54.0464C434.765 57.4516 431.845 60.3843 426.871 60.3843ZM469.026 69.8978C472.893 69.8978 476.113 69.1858 477.392 68.7099V58.5585H476.602C475.341 59.0311 474.004 59.2723 472.657 59.2706C469.026 59.2706 467.365 57.6068 467.365 53.7224V38.1072H477.233V27.7196H467.365V13.461H466.579L455.763 17.3859V27.7297H448.5V38.1072H455.209V56.6686C455.209 64.1911 459.475 69.8978 469.026 69.8978ZM487.864 23.518C492.521 23.518 495.207 20.8181 495.207 16.3836C495.207 12.0234 492.508 9.32692 487.864 9.32692C483.051 9.32692 480.524 12.0268 480.524 16.3836C480.524 20.8215 483.051 23.518 487.864 23.518ZM481.708 69.1858H493.857V27.7196H481.708V69.1858ZM509.571 69.1858H525.122L538.067 28.5228V27.7297H525.753L517.623 57.7013H517.306L508.939 27.7297H496.453V28.5228L509.571 69.1858ZM556.565 69.8978C567.85 69.8978 574.404 63.3204 575.507 55.8654H563.746C563.038 57.7688 561.063 59.9894 556.565 59.9894C551.037 59.9894 548.59 56.5809 548.512 51.7448H576.061V47.2259C576.061 35.9676 568.974 27.0075 556.328 27.0075C542.907 27.0075 536.12 36.7573 536.12 48.4915C536.12 60.3843 543.538 69.8978 556.565 69.8978ZM548.59 44.0469C548.83 40.0815 551.118 36.9902 556.328 36.9902C561.141 36.9902 563.432 40.0815 563.669 44.0469H548.59Z" />
                            <path d="M584.988 28.552L587.366 17.197H628.72L626.341 28.552H611.687L602.864 69.9055H590.818L599.642 28.552H584.988Z" />
                            <path d="M620.965 69.9055L632.166 17.197H644.212L633.01 69.9055H620.965Z" />
                            <path d="M674.729 27.6313C666.366 27.6313 657.927 35.1501 656.162 43.5129C654.398 51.8757 659.615 59.4712 667.978 59.4712C672.351 59.4712 676.877 56.7859 680.253 53.7938L687.388 62.847C681.174 68.1409 673.348 71.44 665.369 71.44C650.024 71.44 640.127 58.9342 643.426 43.5129C646.649 28.1683 661.84 15.5858 677.261 15.5858C685.164 15.5858 691.608 18.8849 695.598 24.1788L684.626 33.232C682.478 30.2399 679.102 27.6313 674.729 27.6313Z" />
                            <path d="M739.265 24.1788L715.941 43.4362L731.286 62.847L720.852 71.44L705.814 52.336L702.131 69.9055H690.086L701.287 17.197H713.333L709.65 34.5363L732.59 15.5858L739.265 24.1788Z" />
                            <path d="M733.822 69.9055L745.023 17.197H774.945L772.413 29.2425H754.46L752.696 37.7587H767.273L764.818 49.3438H750.241L748.399 57.8601H766.276L763.744 69.9055H733.822Z" />
                            <path d="M774.757 28.552L777.135 17.197H818.488L816.11 28.552H801.456L792.633 69.9055H780.587L789.411 28.552H774.757Z" />
                            <path d="M836.666 37.2984C848.788 39.5233 853.775 45.7379 851.78 55.4049C850.092 63.2307 841.192 71.3633 829.3 71.3633C819.864 71.3633 814.416 66.3763 813.189 65.2254L823.393 55.4049C824.85 56.6325 826.308 60.0083 831.679 60.0083C836.129 60.0083 838.507 57.0928 839.044 55.4049C839.428 54.2541 839.888 51.4153 832.062 49.8809C831.909 49.8809 831.679 49.8042 831.602 49.8042C819.326 47.5025 814.186 41.2879 816.181 31.6976C817.869 23.7952 826.769 15.6625 838.737 15.6625C848.558 15.6625 854.159 21.1099 854.926 22.0305C855.233 22.2607 856 23.0279 856 23.0279L845.719 32.7717C845.719 32.7717 844.952 31.9278 844.568 31.6209C842.88 30.2399 841.499 27.6313 836.129 27.6313C831.679 27.6313 829.3 30.0097 828.917 31.6976C828.61 33.0019 828.073 35.6105 836.129 37.2216C836.282 37.2216 836.512 37.2216 836.666 37.2984Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                {Date.now() >=
                  new Date(event.registration_closes_date).getTime() && (
                  <div
                    id={"closed-box"}
                    className="p-8 bg-horizon-grey-100 rounded-2xl"
                  >
                    <h2 className="text-3xl font-chedros text-center mb-3">
                      Registration has closed.{" "}
                      <Link
                        href="/events"
                        className="underline text-horizon-purple"
                      >
                        Click here for our other events!
                      </Link>
                    </h2>
                    <p className="text-horizon-grey-700 font-md text-center">
                      We hope to see you at a Kreative Horizon event soon,
                      we&apos;d love to see you.
                    </p>
                    <div className="flex justify-center items-center">
                      <svg
                        className="h-4 w-auto mt-6 fill-horizon-grey-500"
                        viewBox="0 0 856 79"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.1402 37.516C15.6158 37.516 17.7868 38.1063 19.6531 39.2871C21.5575 40.4297 23.0238 42.1246 24.0522 44.3717C25.1187 46.5808 25.6519 49.2469 25.6519 52.3701C25.6519 55.4933 25.1187 58.1784 24.0522 60.4256C23.0238 62.6346 21.5575 64.3295 19.6531 65.5102C17.7868 66.6529 15.6158 67.2242 13.1402 67.2242C10.7026 67.2242 8.74106 66.6529 7.25565 65.5102C5.77024 64.3676 4.68475 62.6727 3.99918 60.4256V78.0791H0V38.0873H3.99918V44.3146C4.68475 42.0674 5.77024 40.3725 7.25565 39.2299C8.74106 38.0873 10.7026 37.516 13.1402 37.516ZM13.1402 63.2821C15.6158 63.2821 17.6535 62.349 19.2532 60.4827C20.8529 58.6164 21.6527 55.9122 21.6527 52.3701C21.6527 48.828 20.8529 46.1237 19.2532 44.2575C17.6535 42.3912 15.6158 41.458 13.1402 41.458C10.3598 41.458 8.13166 42.2388 6.45582 43.8004C4.81806 45.3239 3.99918 48.1805 3.99918 52.3701C3.99918 56.5597 4.81806 59.4353 6.45582 60.9969C8.13166 62.5204 10.3598 63.2821 13.1402 63.2821Z" />
                        <path d="M43.0938 67.2242C40.5039 67.2242 38.2377 66.6148 36.2952 65.396C34.3528 64.1772 32.8483 62.4442 31.7819 60.197C30.7535 57.9499 30.2393 55.3409 30.2393 52.3701C30.2393 49.3993 30.7535 46.7903 31.7819 44.5431C32.8483 42.296 34.3528 40.563 36.2952 39.3442C38.2377 38.1254 40.5039 37.516 43.0938 37.516C45.6838 37.516 47.95 38.1254 49.8924 39.3442C51.8349 40.563 53.3203 42.296 54.3487 44.5431C55.4151 46.7903 55.9483 49.3993 55.9483 52.3701C55.9483 55.3409 55.4151 57.9499 54.3487 60.197C53.3203 62.4442 51.8349 64.1772 49.8924 65.396C47.95 66.6148 45.6838 67.2242 43.0938 67.2242ZM43.0938 63.2821C45.8361 63.2821 47.9881 62.368 49.5496 60.5398C51.1493 58.7116 51.9492 55.9884 51.9492 52.3701C51.9492 48.7518 51.1493 46.0285 49.5496 44.2003C47.9881 42.3721 45.8361 41.458 43.0938 41.458C40.3515 41.458 38.1806 42.3721 36.5809 44.2003C35.0193 46.0285 34.2385 48.7518 34.2385 52.3701C34.2385 55.9884 35.0193 58.7116 36.5809 60.5398C38.1806 62.368 40.3515 63.2821 43.0938 63.2821Z" />
                        <path d="M93.5272 38.0873H97.5264L89.0139 66.6529H84.729L78.4446 44.6003L72.1031 66.6529H67.8182L59.3628 38.0873H63.362L69.5322 59.9685L69.7035 60.4256L76.5593 38.0873H80.2728L87.0714 60.3684L87.2428 59.9685L93.5272 38.0873Z" />
                        <path d="M103.868 54.1983C104.135 57.2072 105.049 59.4734 106.611 60.9969C108.172 62.5204 110.191 63.2821 112.667 63.2821C114.838 63.2821 116.647 62.7299 118.094 61.6253C119.541 60.4827 120.532 58.8069 121.065 56.5978H125.178C124.607 59.8352 123.198 62.4252 120.951 64.3676C118.742 66.272 115.98 67.2242 112.667 67.2242C110.077 67.2242 107.81 66.6148 105.868 65.396C103.926 64.1772 102.421 62.4442 101.355 60.197C100.326 57.9499 99.8121 55.3409 99.8121 52.3701C99.8121 49.3993 100.326 46.7903 101.355 44.5431C102.421 42.296 103.926 40.563 105.868 39.3442C107.81 38.1254 110.077 37.516 112.667 37.516C116.666 37.516 119.808 38.9633 122.093 41.858C124.378 44.7145 125.521 48.828 125.521 54.1983H103.868ZM121.293 50.5419C120.57 44.486 117.694 41.458 112.667 41.458C110.191 41.458 108.172 42.2198 106.611 43.7433C105.049 45.2668 104.135 47.533 103.868 50.5419H121.293Z" />
                        <path d="M140.777 38.0873C141.577 38.0873 142.225 38.1635 142.72 38.3158C143.215 38.4301 143.786 38.6967 144.434 39.1157V43.1148C143.824 42.6959 143.253 42.4293 142.72 42.315C142.187 42.1627 141.539 42.0865 140.777 42.0865C139.787 42.0865 138.816 42.3912 137.864 43.0006C136.95 43.5719 136.188 44.486 135.578 45.7429C134.969 46.9617 134.664 48.5042 134.664 50.3705V66.6529H130.665V38.0873H134.664V44.5431C135.236 42.5245 136.074 40.9439 137.178 39.8012C138.283 38.6586 139.482 38.0873 140.777 38.0873Z" />
                        <path d="M151.347 54.1983C151.614 57.2072 152.528 59.4734 154.09 60.9969C155.651 62.5204 157.67 63.2821 160.146 63.2821C162.317 63.2821 164.126 62.7299 165.573 61.6253C167.02 60.4827 168.011 58.8069 168.544 56.5978H172.657C172.086 59.8352 170.677 62.4252 168.43 64.3676C166.221 66.272 163.459 67.2242 160.146 67.2242C157.556 67.2242 155.29 66.6148 153.347 65.396C151.405 64.1772 149.9 62.4442 148.834 60.197C147.805 57.9499 147.291 55.3409 147.291 52.3701C147.291 49.3993 147.805 46.7903 148.834 44.5431C149.9 42.296 151.405 40.563 153.347 39.3442C155.29 38.1254 157.556 37.516 160.146 37.516C164.145 37.516 167.287 38.9633 169.572 41.858C171.858 44.7145 173 48.828 173 54.1983H151.347ZM168.772 50.5419C168.049 44.486 165.173 41.458 160.146 41.458C157.67 41.458 155.651 42.2198 154.09 43.7433C152.528 45.2668 151.614 47.533 151.347 50.5419H168.772Z" />
                        <path d="M202.68 26.6611V66.6529H198.681V60.4256C197.996 62.6727 196.91 64.3676 195.425 65.5102C193.939 66.6529 191.978 67.2242 189.54 67.2242C187.064 67.2242 184.874 66.6529 182.97 65.5102C181.104 64.3295 179.637 62.6346 178.571 60.4256C177.543 58.1784 177.028 55.4933 177.028 52.3701C177.028 49.2469 177.543 46.5808 178.571 44.3717C179.637 42.1246 181.104 40.4297 182.97 39.2871C184.874 38.1063 187.064 37.516 189.54 37.516C191.978 37.516 193.939 38.0873 195.425 39.2299C196.91 40.3725 197.996 42.0674 198.681 44.3146V26.6611H202.68ZM189.54 63.2821C192.32 63.2821 194.53 62.5204 196.167 60.9969C197.843 59.4353 198.681 56.5597 198.681 52.3701C198.681 48.1805 197.843 45.3239 196.167 43.8004C194.53 42.2388 192.32 41.458 189.54 41.458C187.064 41.458 185.027 42.3912 183.427 44.2575C181.827 46.1237 181.028 48.828 181.028 52.3701C181.028 55.9122 181.827 58.6164 183.427 60.4827C185.027 62.349 187.064 63.2821 189.54 63.2821Z" />
                        <path d="M232.403 37.516C234.879 37.516 237.05 38.1063 238.916 39.2871C240.82 40.4297 242.287 42.1246 243.315 44.3717C244.382 46.5808 244.915 49.2469 244.915 52.3701C244.915 55.4933 244.382 58.1784 243.315 60.4256C242.287 62.6346 240.82 64.3295 238.916 65.5102C237.05 66.6529 234.879 67.2242 232.403 67.2242C229.966 67.2242 228.004 66.6529 226.519 65.5102C225.033 64.3676 223.948 62.6727 223.262 60.4256V66.6529H219.263V26.6611H223.262V44.3146C223.948 42.0674 225.033 40.3725 226.519 39.2299C228.004 38.0873 229.966 37.516 232.403 37.516ZM232.403 63.2821C234.879 63.2821 236.917 62.349 238.516 60.4827C240.116 58.6164 240.916 55.9122 240.916 52.3701C240.916 48.828 240.116 46.1237 238.516 44.2575C236.917 42.3912 234.879 41.458 232.403 41.458C229.623 41.458 227.395 42.2388 225.719 43.8004C224.081 45.3239 223.262 48.1805 223.262 52.3701C223.262 56.5597 224.081 59.4353 225.719 60.9969C227.395 62.5204 229.623 63.2821 232.403 63.2821Z" />
                        <path d="M272.41 38.0873L261.955 66.6529C261.041 69.2047 260.088 71.2805 259.098 72.8802C258.108 74.4798 256.851 75.7367 255.327 76.6508C253.842 77.603 251.957 78.0791 249.671 78.0791V74.137C251.728 74.137 253.328 73.5657 254.471 72.4231C255.613 71.2805 256.68 69.3571 257.67 66.6529L247.215 38.0873H251.5L259.841 60.8255L268.125 38.0873H272.41Z" />
                        <path d="M323.946 47.3036L340.682 28.5228V27.7297H326.471L313.37 42.7948V7.11305L302 0.309448V69.1858H313.37V52.2206L326.869 69.1858H341.553V68.3927L323.946 47.3036ZM343.092 69.1858H354.458V48.7311C354.458 42.0692 358.17 38.1848 363.931 38.1848H367.879L370.917 27.0075H365.038C359.75 27.0075 356.263 30.0988 354.458 33.7571H354.144L353.196 27.7297H343.092V69.1858ZM389.087 69.8978C400.375 69.8978 406.926 63.3204 408.033 55.8654H396.262C395.553 57.7688 393.579 59.9894 389.08 59.9894C383.555 59.9894 381.109 56.5809 381.028 51.7448H408.576V47.2259C408.576 35.9676 401.472 27.0075 388.844 27.0075C375.422 27.0075 368.635 36.7573 368.635 48.4915C368.642 60.3843 376.063 69.8978 389.087 69.8978ZM381.115 44.0469C381.352 40.0815 383.64 36.9902 388.851 36.9902C393.666 36.9902 395.938 40.0815 396.191 44.0469H381.115ZM423.793 69.8978C428.923 69.8978 432.568 68.0755 434.842 65.46H435.16V68.7099L446.921 69.1858V41.9106C446.921 33.2711 440.134 27.0075 428.845 27.0075C416.696 27.0075 411.084 35.3669 411.084 43.139L422.45 41.4516C422.45 38.9138 424.661 36.8518 428.45 36.8518C432.949 36.8518 434.765 39.0724 434.765 41.914V45.3259C433.108 44.7691 429.004 44.1346 425.923 44.1346C414.556 44.1346 409.346 49.1968 409.346 56.9015C409.346 64.2687 414.485 69.8978 423.793 69.8978ZM426.871 60.3843C423.24 60.3843 421.346 58.6395 421.346 56.2636C421.346 54.043 423.398 52.2983 427.344 52.2983C429.883 52.2582 432.405 52.7169 434.768 53.6482V54.0464C434.765 57.4516 431.845 60.3843 426.871 60.3843ZM469.026 69.8978C472.893 69.8978 476.113 69.1858 477.392 68.7099V58.5585H476.602C475.341 59.0311 474.004 59.2723 472.657 59.2706C469.026 59.2706 467.365 57.6068 467.365 53.7224V38.1072H477.233V27.7196H467.365V13.461H466.579L455.763 17.3859V27.7297H448.5V38.1072H455.209V56.6686C455.209 64.1911 459.475 69.8978 469.026 69.8978ZM487.864 23.518C492.521 23.518 495.207 20.8181 495.207 16.3836C495.207 12.0234 492.508 9.32692 487.864 9.32692C483.051 9.32692 480.524 12.0268 480.524 16.3836C480.524 20.8215 483.051 23.518 487.864 23.518ZM481.708 69.1858H493.857V27.7196H481.708V69.1858ZM509.571 69.1858H525.122L538.067 28.5228V27.7297H525.753L517.623 57.7013H517.306L508.939 27.7297H496.453V28.5228L509.571 69.1858ZM556.565 69.8978C567.85 69.8978 574.404 63.3204 575.507 55.8654H563.746C563.038 57.7688 561.063 59.9894 556.565 59.9894C551.037 59.9894 548.59 56.5809 548.512 51.7448H576.061V47.2259C576.061 35.9676 568.974 27.0075 556.328 27.0075C542.907 27.0075 536.12 36.7573 536.12 48.4915C536.12 60.3843 543.538 69.8978 556.565 69.8978ZM548.59 44.0469C548.83 40.0815 551.118 36.9902 556.328 36.9902C561.141 36.9902 563.432 40.0815 563.669 44.0469H548.59Z" />
                        <path d="M584.988 28.552L587.366 17.197H628.72L626.341 28.552H611.687L602.864 69.9055H590.818L599.642 28.552H584.988Z" />
                        <path d="M620.965 69.9055L632.166 17.197H644.212L633.01 69.9055H620.965Z" />
                        <path d="M674.729 27.6313C666.366 27.6313 657.927 35.1501 656.162 43.5129C654.398 51.8757 659.615 59.4712 667.978 59.4712C672.351 59.4712 676.877 56.7859 680.253 53.7938L687.388 62.847C681.174 68.1409 673.348 71.44 665.369 71.44C650.024 71.44 640.127 58.9342 643.426 43.5129C646.649 28.1683 661.84 15.5858 677.261 15.5858C685.164 15.5858 691.608 18.8849 695.598 24.1788L684.626 33.232C682.478 30.2399 679.102 27.6313 674.729 27.6313Z" />
                        <path d="M739.265 24.1788L715.941 43.4362L731.286 62.847L720.852 71.44L705.814 52.336L702.131 69.9055H690.086L701.287 17.197H713.333L709.65 34.5363L732.59 15.5858L739.265 24.1788Z" />
                        <path d="M733.822 69.9055L745.023 17.197H774.945L772.413 29.2425H754.46L752.696 37.7587H767.273L764.818 49.3438H750.241L748.399 57.8601H766.276L763.744 69.9055H733.822Z" />
                        <path d="M774.757 28.552L777.135 17.197H818.488L816.11 28.552H801.456L792.633 69.9055H780.587L789.411 28.552H774.757Z" />
                        <path d="M836.666 37.2984C848.788 39.5233 853.775 45.7379 851.78 55.4049C850.092 63.2307 841.192 71.3633 829.3 71.3633C819.864 71.3633 814.416 66.3763 813.189 65.2254L823.393 55.4049C824.85 56.6325 826.308 60.0083 831.679 60.0083C836.129 60.0083 838.507 57.0928 839.044 55.4049C839.428 54.2541 839.888 51.4153 832.062 49.8809C831.909 49.8809 831.679 49.8042 831.602 49.8042C819.326 47.5025 814.186 41.2879 816.181 31.6976C817.869 23.7952 826.769 15.6625 838.737 15.6625C848.558 15.6625 854.159 21.1099 854.926 22.0305C855.233 22.2607 856 23.0279 856 23.0279L845.719 32.7717C845.719 32.7717 844.952 31.9278 844.568 31.6209C842.88 30.2399 841.499 27.6313 836.129 27.6313C831.679 27.6313 829.3 30.0097 828.917 31.6976C828.61 33.0019 828.073 35.6105 836.129 37.2216C836.282 37.2216 836.512 37.2216 836.666 37.2984Z" />
                      </svg>
                    </div>
                  </div>
                )}
                <h2 className="text-3xl text-horizon-grey-600 font-chedros mb-6 mt-12 text-center">
                  Proudly sponsored by
                </h2>
                <div className="flex flex-wrap lg:flex-col items-center justify-center space-x-4 space-y-4 lg:space-x-0 lg:space-y-0">
                  {event.season.sponsors.map((sponsor: any) => (
                    <div key={sponsor._id} className="w-[35%] lg:w-[60%]">
                      <CldImage
                        src={`kreativehorizon.com/sponsors/${sponsor.logo_cld_id}`}
                        alt={sponsor.logo_alt}
                        className="w-full h-auto mb-8"
                        width={sponsor.logo_width}
                        height={sponsor.logo_height}
                      />
                    </div>
                  ))}
                  {event.event_sponsors &&
                    event.event_sponsors.map((sponsor: any) => (
                      <div key={sponsor._id} className="w-[35%] lg:w-[60%]">
                        <CldImage
                          src={`kreativehorizon.com/sponsors/${sponsor.logo_cld_id}`}
                          alt={sponsor.logo_alt}
                          className="w-full h-auto mb-8"
                          width={sponsor.logo_width}
                          height={sponsor.logo_height}
                        />
                      </div>
                    ))}
                </div>
                <div className="pt-6 lg:p-0 text-center">
                  <h3 className="text-lg text-horizon-purple">
                    Interested in sponsoring?
                  </h3>
                  <Link
                    href="/sponsors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-horizon-purple hover:text-horizon-pink underline"
                  >
                    Learn more here &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="py-24 border-t border-horizon-grey-300">
          <Container>
            <p className="text-center sm:text-left text-2xl font-guthen tracking-wide pb-2">
              Student <span className="ml-2">Testimonials</span>
            </p>
            <h1 className="text-center sm:text-left pb-8 text-5xl sm:text-6xl font-chedros">
              OUR STUDENTS AND BUILDERS LOVE HORIZON EVENTS
            </h1>
            <div className="py-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-2 sm:col-span-1 flex flex-col justify-start items-start space-y-4">
                {reviews1.map((review) => (
                  <div key={review._id} className="w-full">
                    <TestimonialCard review={review} />
                  </div>
                ))}
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col justify-start items-start space-y-4">
                {reviews2.map((review) => (
                  <div key={review._id} className="w-full">
                    <TestimonialCard review={review} />
                  </div>
                ))}
              </div>
              <div className="col-span-2 md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0 md:grid-cols-none md:flex flex-col justify-start items-start md:space-y-4">
                {reviews3.map((review) => (
                  <div key={review._id} className="w-full">
                    <TestimonialCard review={review} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
        <div className="py-24 bg-horizon-grey-100">
          <Container>
            <h1 className="text-center sm:text-left pb-8 text-5xl sm:text-6xl font-chedros">
              MORE EVENTS YOU MIGHT LIKE
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedEvents.map((event: EventCardType) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            <div className="mt-24 mb-3">
              <LogoCloud6 />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
      <LeagueBadge />
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch the list of event slugs from your data or database
  const eventSlugs = [
    "hackisu-v1",
    "hackisu-v2",
    "dataisu-v1",
    "hackisu-v3",
    "builddsm-v1",
    "buildchicago-2019",
  ];

  // Generate dynamic paths based on event slugs
  const paths = eventSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const event = await getEventDetails(params.slug);

  const studentReviews: StudentReview[] = await getStudentReviews(6);
  const totalReviews = studentReviews.length;
  const relatedEvents: EventCardType[] = await getLatestEvents(params.slug);

  const reviews1 = studentReviews.slice(0, Math.floor(totalReviews / 3));
  const reviews2 = studentReviews.slice(
    Math.floor(totalReviews / 3),
    Math.floor((totalReviews / 3) * 2)
  );
  const reviews3 = studentReviews.slice(
    Math.floor((totalReviews / 3) * 2),
    totalReviews
  );

  return {
    props: {
      event: event[0],
      relatedEvents,
      reviews1,
      reviews2,
      reviews3,
    },
  };
}
