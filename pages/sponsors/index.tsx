import Link from "next/link";
import Container from "@/components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorLetter from "@/components/SponsorLetter";
import EventCardSimple from "@/components/EventCardSimple";
import LogoCloud1 from "@/components/LogoCloud1";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export default function StudentReviews() {
  return (
    <div>
      <NextSeo
        title="Sponsor Us"
        description="Sponsor Kreative Horizon and help us continue to provide free events to students and change the midwest for good."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-sponsor-image-gallery bg-cover bg-top">
            <Container>
              <div className="flex flex-col justify-center items-start py-44 sm:py-64">
                <p className="text-2xl font-guthen tracking-wide pb-2 text-white">
                  Sponsor Guide
                </p>
                <h1 className="pb-8 text-5xl sm:text-6xl font-chedros text-white">
                  We&apos;re supporting over 450 students this year and
                  we&apos;d love for you to be a part of it
                </h1>
                <div className="flex flex-col xs:flex-row items-center justify-center space-y-8 xs:space-y-0 xs:space-x-3 pt-3 sm:p-0">
                  <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-white text-horizon-grey-800 border border-white"
                      href="/sponsors/interest-form"
                    >
                      Sponsor us
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-white border border-white"
                      href="/contact-us"
                    >
                      Get in touch
                    </Link>
                  </motion.div>
                </div>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <div className="bg-horizon-grey-200 pt-24 pb-32">
          <Container>
            <div className="max-w-5xl mx-auto -mt-44 rotate-0 md:rotate-3">
              <SponsorLetter />
            </div>
          </Container>
        </div>
        <div className="py-32">
          <Container>
            <h2 className="font-chedros text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
              GIVING STUDENTS THE TOOLS TO BUILD THE FUTURE OF TOMORROW, TODAY.
            </h2>
            <div className="grid grid-cols-12 my-12 gap-8 md:gap-4">
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-5xl font-chedros mb-6 sm:mb-4">
                  WHAT IS THE KREATIVE BUILDERS LEAGUE?
                </h3>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-black text-white"
                    href="/sponsors/interest-form"
                  >
                    Interested in sponsoring?
                  </Link>
                </motion.div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-xl text-horizon-grey-600">
                  Welcome to the KBL - your passport to the world of student
                  innovation! Our top-notch events bring together the brightest
                  young minds across tech, business, and design, empowering them
                  with the skills and knowledge they need to change the world.
                  <br />
                  <br />
                  But that&apos;s not all. As a sponsor of the KBL, you get a
                  unique opportunity to showcase your brand and accelerate your
                  recruiting efforts across the Midwest and beyond.{" "}
                  <span className="font-bold text-horizon-grey-800">
                    With just one partner, you&apos;ll have access to a
                    community of highly engaged and talented students who are
                    eager to make a difference.
                  </span>
                  <br />
                  <br />
                  And the best part? We guarantee high-quality events and
                  exposure that will leave a lasting impression on your target
                  audience. It&apos;s a win-win-win for everyone - the students,
                  the sponsors, and the future of innovation.
                  <br />
                  <br />
                  So what are you waiting for? Discover what we&apos;re doing
                  this year and be apart of the next big thing to change the
                  Midwest for good!
                </p>
              </div>
            </div>
            <div className="py-20">
              <LogoCloud1 />
            </div>
            <div className="grid grid-cols-12 my-12 gap-8 md:gap-4">
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-5xl font-chedros mb-6 sm:mb-4">
                  EVENTS FOR THIS YEARS SEASON
                </h3>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-black text-white"
                    href="/sponsors/interest-form"
                  >
                    Get started
                  </Link>
                </motion.div>
              </div>
              <div className="col-span-12 md:col-span-8 mt-8 md:m-0">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="col-span-2 xs:col-span-1">
                    <EventCardSimple
                      cldSrc="kreativehorizon.com/events/hackisu-v2_efchna"
                      alt="HackISU v2 Event Cover Image"
                      tagline="100 guest hackathon for Iowa State University students"
                    />
                  </div>
                  <div className="col-span-2 xs:col-span-1">
                    <EventCardSimple
                      cldSrc="kreativehorizon.com/events/dataisu-v1_rncrr8"
                      alt="DataISU v1 Event Cover Image"
                      tagline="40 guest datathon for Iowa State University students"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="col-span-2 xs:col-span-1">
                    <EventCardSimple
                      cldSrc="kreativehorizon.com/events/hackisu-v3_fvm8nz"
                      alt="HackISU v3 Event Cover Image"
                      tagline="135 guest hackathon for Iowa State University students"
                    />
                  </div>
                  <div className="col-span-2 xs:col-span-1">
                    <EventCardSimple
                      cldSrc="kreativehorizon.com/events/builddsm-v1_zeizif"
                      alt="BuildDSM v1 Event Cover Image"
                      tagline="100 student hackathon in Des Moines for high school and college"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 xs:col-span-1">
                    <EventCardSimple
                      cldSrc="kreativehorizon.com/events/designjamisu-v1_gstdf8"
                      alt="DesignJamISU v1 Event Cover Image"
                      tagline="25 guest design competition for Iowa State University students"
                    />
                  </div>
                  <div className="col-span-2 xs:col-span-1">
                    <EventCardSimple
                      cldSrc="kreativehorizon.com/events/pitchames-v1_qboqwr"
                      alt="PitchAmes v1 Event Cover Image"
                      tagline="50 guest pitch competition for anyone in high school and college"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="mb-32">
          <Container>
            <h2 className="mb-12 font-chedros text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
              UNLOCK YOUR BRAND WITH KBL & KREATIVE HORIZON
            </h2>
            <h3 className="text-5xl font-chedros mb-4">
              BENEFITS OF PARTNERING WITH THE KBL
            </h3>
            <div className="grid grid-cols-3 gap-20 md:gap-8 mt-20">
              <div className="col-span-3 md:col-span-1">
                <div className="p-8 bg-horizon-grey-100 border border-grey-400 rounded-xl">
                  <div className="p-4 rounded-xl border border-grey-400 bg-white inline-block -mt-16 mb-4">
                    <CldImage
                      src="kreativehorizon.com/ikons/NowHiring_Ikon_jse3x6"
                      alt="Now Hiring Ikon"
                      width="280"
                      height="280"
                      className="w-12 h-auto"
                    />
                  </div>
                  <h4 className="font-chedros text-4xl text-horizon-orange mb-4">
                    Talent recruitment
                  </h4>
                  <ul className="text-horizon-grey-700 list-disc text-lg pl-4 space-y-4">
                    <li>
                      <span className="font-bold">Send recruiters:</span>{" "}
                      Opportunity to send company recruiters to the event.
                    </li>
                    <li>
                      <span className="font-bold">
                        Handout recruiting materials:
                      </span>{" "}
                      Permission to distribute recruiting materials to event
                      attendees.
                    </li>
                    <li>
                      <span className="font-bold">
                        Access to candidate information:
                      </span>{" "}
                      Exclusive access to guest resumes, GitHub profiles, and
                      LinkedIn profiles.
                    </li>
                    <li>
                      <span className="font-bold">Private interview room:</span>{" "}
                      Provision of a private room for conducting interviews with
                      potential candidates.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="p-8 bg-horizon-grey-100 border border-grey-400 rounded-xl">
                  <div className="p-4 rounded-xl border border-grey-400 bg-white inline-block -mt-16 mb-4">
                    <CldImage
                      src="kreativehorizon.com/ikons/Bullhorn_Ikon_kxxwiy"
                      alt="Bullhorn Ikon"
                      width="280"
                      height="280"
                      className="w-12 h-auto"
                    />
                  </div>
                  <h4 className="font-chedros text-4xl text-horizon-pink mb-4">
                    Brand Awareness
                  </h4>
                  <ul className="text-horizon-grey-700 list-disc text-lg pl-4 space-y-4">
                    <li>
                      <span className="font-bold">
                        Extensive brand exposure:
                      </span>{" "}
                      Logo on swag, website, handouts, and signage.
                    </li>
                    <li>
                      <span className="font-bold">Prominent recognition:</span>{" "}
                      Acknowledgment at ceremonies and in press releases.
                    </li>
                    <li>
                      <span className="font-bold">Customized promotion:</span>{" "}
                      Distribution of branded materials and featured in
                      promotional video.
                    </li>
                    <li>
                      <span className="font-bold">Digital reach:</span> Social
                      media shoutouts and inclusion in event email blasts.
                    </li>
                    <li>
                      <span className="font-bold">Event integration:</span>{" "}
                      Naming rights for meals, program inclusion, and custom
                      announcements.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="p-8 bg-horizon-grey-100 border border-grey-400 rounded-xl">
                  <div className="p-4 rounded-xl border border-grey-400 bg-white inline-block -mt-16 mb-4">
                    <CldImage
                      src="kreativehorizon.com/ikons/Community_Ikon_m0bydd"
                      alt="Community Ikon"
                      width="280"
                      height="280"
                      className="w-12 h-auto"
                    />
                  </div>
                  <h4 className="font-chedros text-4xl text-horizon-purple mb-4">
                    Community Outreach
                  </h4>
                  <ul className="text-horizon-grey-700 list-disc text-lg pl-4 space-y-4">
                    <li>
                      <span className="font-bold">Exclusive access:</span>{" "}
                      Horizon Gift Bag, Sponsor Folder, event pictures/videos.
                    </li>
                    <li>
                      <span className="font-bold">Recognition:</span> Sponsor
                      Certificate and opportunity to give a talk during opening
                      ceremony.
                    </li>
                    <li>
                      <span className="font-bold">Enhanced presence:</span>{" "}
                      Reserved company space and the ability to host a workshop
                      or talk.
                    </li>
                    <li>
                      <span className="font-bold">Influential role:</span>{" "}
                      Company representative on the judging panel and the
                      opportunity to lead a mini-event.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="mb-32">
          <Container>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 sm:col-span-1 flex items-center justify-start order-last sm:order-none">
                <div className="p-12 bg-horizon-grey-100 rounded-xl">
                  <div className="py-2 px-6 rounded-full bg-horizon-orange-100 inline-block">
                    <p className="text-horizon-orange text-sm">
                      HackIowaState v1
                    </p>
                  </div>
                  <p className="text-2xl md:text-3xl my-6">
                    “I liked that I was required to build something in just 24
                    hours, unlike my classes. I usually wouldn&apos;t go out of
                    my way to learn new technologies like React. My teammates
                    and the feedback from the judges was very helpful!{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
                      I would totally come back!
                    </span>
                    ”
                  </p>
                  <div>
                    <p className="font-bold text-lg">Noah Lim</p>
                    <p className="text-md">Senior in Computer Science</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-end pl-6">
                <CldImage
                  src="kreativehorizon.com/sponsors/sponsor-image-group-1_wvdruw"
                  alt="Sponsors Page Image Group 1"
                  className="w-[75%] sm:w-full h-auto"
                  width="1072"
                  height="1321"
                />
              </div>
            </div>
          </Container>
        </div>
        <div className="mb-32">
          <Container>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-end pr-6">
                <CldImage
                  src="kreativehorizon.com/sponsors/sponsor-image-group-2_d4nw2t"
                  alt="Sponsors Page Image Group 2"
                  className="w-[75%] sm:w-full h-auto"
                  width="1072"
                  height="1321"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-start">
                <div className="p-12 bg-horizon-grey-100 rounded-xl">
                  <div className="py-2 px-6 rounded-full bg-horizon-orange-100 inline-block">
                    <p className="text-horizon-orange text-sm">
                      HackIowaState v1
                    </p>
                  </div>
                  <p className="text-2xl md:text-3xl my-6">
                    “The event was super nice. I got to work with a team in a
                    real-world, work environment. With a team, we were able to
                    keep each other accountable and I tried a new database I
                    never would have before.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
                      Yes, I would come back, it was fun!
                    </span>
                    ”
                  </p>
                  <div>
                    <p className="font-bold text-lg">Endi Odobasic</p>
                    <p className="text-md">Junior in Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="py-44 bg-horizon-grey-100">
          <Container>
            <h2 className="mb-6 text-center font-chedros text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple">
              WHAT ARE YOU WAITING FOR? COME CHANGE THE MIDWEST FOR GOOD.
            </h2>
            <div className="flex flex-col xs:flex-row items-center justify-center space-y-8 xs:space-y-0 xs:space-x-3 pt-3 sm:p-0">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-horizon-grey-800 border border-horizon-grey-800 text-white"
                  href="/sponsors/interest-form"
                >
                  Interested in sponsoring?
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-horizon-grey-800 border border-horizon-grey-800"
                  href="/contact-us"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
            <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4 mt-12">
              <div className="col-span-3 sm:col-span-1">
                <motion.div
                  whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="tel:+15152126468"
                    className="p-12 bg-horizon-grey-200 flex flex-col justify-start items-center rounded-2xl"
                  >
                    <p className="text-[100px]">☎️</p>
                    <p className="text-2xl md:text-3xl font-chedros text-horizon-grey-700">
                      (510) 673-5179
                    </p>
                  </a>
                </motion.div>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <motion.div
                  whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="mailto:hz@kreativeusa.com"
                    className="p-12 bg-horizon-grey-200 flex flex-col justify-start items-center rounded-2xl"
                  >
                    <p className="text-[100px]">📬</p>
                    <p className="text-2xl md:text-3xl font-chedros text-horizon-grey-700">
                      hz@kreativeusa.com
                    </p>
                  </a>
                </motion.div>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <motion.div
                  whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://KRE.SH/sponsor"
                    className="p-12 bg-horizon-grey-200 flex flex-col justify-start items-center rounded-2xl"
                  >
                    <p className="text-[100px]">🖥️</p>
                    <p className="text-2xl md:text-3xl font-chedros text-horizon-grey-700">
                      KRE.SH/sponsor
                    </p>
                  </a>
                </motion.div>
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
