import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import FloatingCTA from "./FloatingCTA";
import { motion } from "framer-motion";
import {
  Phone,
  Envelope,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  DribbbleLogo,
  DiscordLogo,
} from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";

function FooterLinkGroupLabel({ title }: { title: string }) {
  return (
    <h4 className="text-horizon-grey-400 text-sm font-mono mb-2 uppercase">
      {title}
    </h4>
  );
}

function FooterLink({
  href,
  title,
  target,
}: {
  href: string;
  title: string;
  target?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="text-2xl lg:text-xl text-white"
        target={target}
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    </motion.div>
  );
}

function HorizonSphere() {
  return (
    <div className="h-full flex justify-center items-center pb-1">
      <svg
        className="h-12 w-auto"
        viewBox="0 0 174 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="87.1369"
          cy="86.8634"
          r="86.8634"
          fill="url(#paint0_radial_548_275)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_548_275"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(48.5309 41.8231) rotate(59.144) scale(146.625)"
          >
            <stop stopColor="#FFBB94" />
            <stop offset="0.229167" stopColor="#FF7629" />
            <stop offset="0.723958" stopColor="#FF5EBF" />
            <stop offset="1" stopColor="#C479FF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <Marquee
        className="bg-gradient-to-r from-horizon-pink to-horizon-purple pt-5 pb-2"
        autoFill
        speed={75}
      >
        <p className="font-chedros text-white text-6xl mx-8 italic pr-2">
          &quot;I would totally come back to another event&quot; - Noah Lim
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-2">
          Hackathons
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-2">
          &quot;The event was super nice! I would come back, it was fun!&quot; -
          Endi Odobasic
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-1">
          Pitch Competitions
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-2">
          Recruit the best students at every school
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-1">
          &quot;I got to learn new technologies that I don&apos;t get to use in
          the classroom&quot;
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-1">
          Design Jams
        </p>
        <HorizonSphere />
        <p className="font-chedros text-white text-6xl mx-8 italic pr-1">
          face-to-face with the best companies in tech
        </p>
        <HorizonSphere />
      </Marquee>
      <div id="top_cta" className="relative pt-32 pb-72 z-0">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dlazo25rt/image/upload/v1689571484/kreativehorizon.com/clouds-horizon_e3xdx9.webp"
            alt="Floating CTA Footer background image"
            layout="fill"
          />
        </div>
        <Container>
          <div className="relative flex justify-center">
            <div className="flex flex-col items-center max-w-[34rem] space-y-3">
              <h3 className="text-2xl font-guthen text-white tracking-wider">
                <span className="mr-1.5">Get</span> Involved
              </h3>
              <h2 className="text-5xl font-chedros text-white text-center">
                OUR MOVEMENT IS ONLY GROWING, WE WANT YOU TO BE A PART OF IT.
              </h2>
              <p className="text-center text-white text-xl pb-4">
                We&apos;re starting in Iowa with our sights set on the nation.
                Every student deserves the opportunity to see the future for
                what it could be - and then build it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-3 pt-3 md:p-0">
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-white text-horizon-grey-800 border border-white"
                    href="/get-involved"
                  >
                    Get involved
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-white border border-white"
                    href="/sponsors"
                  >
                    Become a sponsor
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative bg-horizon-grey-800 pt-72 pb-6 z-10">
        <div className="-mt-[30rem] mb-24">
          <FloatingCTA />
        </div>
        <Container>
          <div className="grid grid-cols-12 gap-y-6 sm:gap-y-12 gap-x-4 lg:gap-4">
            <div className="col-span-12 lg:col-span-4">
              <h3 className="text-6xl lg:text-4xl text-white font-chedros">
                JOIN THE JOURNEY
              </h3>
              <p className="text-horizon-grey-300 text-2xl lg:text-xl mb-4">
                Providing students the tools and resources to build the future
                of tomorrow, today so we can see the world for what it could be.
              </p>
              <div className="flex justify-start space-x-2 items-center mb-3 md:mb-1">
                <Phone className="text-white" size={32} />
                <Link
                  href="tel:+15152126468"
                  className="text-white text-2xl lg:text-xl hover:underline transition duration-300 ease-in-out"
                  aria-label={"Call us at +1 (515) 212-6468"}
                >
                  +1 (515) 212-6468
                </Link>
              </div>
              <div className="flex justify-start space-x-2 items-center">
                <Envelope className="text-white" size={32} />
                <Link
                  href="mailto:horizon@kreativeusa.com"
                  className="text-white text-2xl lg:text-xl hover:underline transition duration-300 ease-in-out"
                  aria-label={"Email us at horizon@kreativeusa.com"}
                >
                  horizon@kreativeusa.com
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:hidden lg:flex mt-8 gap-2">
                <div className="col-span-2 flex justify-start items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://instagram.com/kreativehorizon"
                      aria-label={"Follow us on Instagram"}
                    >
                      <InstagramLogo
                        className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://www.facebook.com/kreativehorizon"
                      aria-label={"Follow us on Facebook"}
                    >
                      <FacebookLogo
                        className="text-white hover:text-horizon-pink p-1 bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://twitter.com/kreativehorizon"
                      aria-label={"Follow us on Twitter"}
                    >
                      <TwitterLogo
                        className="text-white hover:text-horizon-purple p-1 bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://github.com/kreative"
                      aria-label={"Discover our GitHub"}
                    >
                      <GithubLogo
                        className="text-white p-1 hover:text-horizon-orange bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://medium.com/kreativehorzion"
                      aria-label={"Follow our Medium publication"}
                    >
                      <MediumLogo
                        className="text-white hover:text-horizon-pink p-1 bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                </div>
                <div className="col-span-2 flex justify-start items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://www.linkedin.com/showcase/kreativehorizon/"
                      aria-label={"Follow our LinkedIn page"}
                    >
                      <LinkedinLogo
                        className="text-white hover:text-horizon-purple p-1 bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://dribbble.com/bykreative"
                      aria-label={"Follow our Dribbble page"}
                    >
                      <DribbbleLogo
                        className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://kre.sh/discord"
                      aria-label={"Join our Discord server"}
                    >
                      <DiscordLogo
                        className="text-white p-1 hover:text-horizon-pink bg-horizon-grey-700 rounded-lg"
                        size={44}
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="hidden sm:flex justify-start items-center space-x-2 mt-8 lg:hidden">
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://instagram.com/kreativehorizon"
                    aria-label={"Follow us on Instgram"}
                  >
                    <InstagramLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.facebook.com/kreativehorizon"
                    aria-label={"Follow us on Facebook"}
                  >
                    <FacebookLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://twitter.com/kreativehorizon"
                    aria-label={"Follow us on Twitter"}
                  >
                    <TwitterLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://github.com/kreative"
                    aria-label={"Discover our GitHub page"}
                  >
                    <GithubLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://medium.com/kreativehorzion"
                    aria-label={"Follow our Medium publication"}
                  >
                    <MediumLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.linkedin.com/showcase/kreativehorizon/"
                    aria-label={"Follow our LinkedIn page"}
                  >
                    <LinkedinLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://dribbble.com/bykreative"
                    aria-label={"Follow our Dribbble page"}
                  >
                    <DribbbleLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://kre.sh/discord"
                    aria-label={"Join our Discord server"}
                  >
                    <DiscordLogo
                      className="text-white hover:text-horizon-orange p-1 bg-horizon-grey-700 rounded-2xl"
                      size={64}
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-span-12 hidden lg:block lg:col-span-2" />
            <div className="col-span-6 xs:col-span-4 lg:col-span-2">
              <FooterLinkGroupLabel title="Company" />
              <div className="flex flex-col items-start space-y-4 lg:space-y-2">
                <FooterLink href="/about-us" title="About Horizon" />
                <FooterLink href="/contact-us" title="Contact us" />
                <FooterLink href="/reviews" title="Student reviews" />
                <FooterLink href="/faqs" title="FAQs" />
                <FooterLink href="/forms/travel-grants" title="Travel grants" />
                <FooterLink href="/community" title="Community" />
                <FooterLink href="/press" title="Press" />
                <FooterLink href="/brand-guidelines" title="Brand guidelines" />
                <FooterLink href="/sponsors" title="Sponsor us" />
                <FooterLink href="/get-involved" title="Get involved" />
              </div>
              <div className="block xs:hidden mt-6 xs:mt-0">
                <FooterLinkGroupLabel title="Support" />
                <div className="flex flex-col items-start space-y-4 lg:space-y-2">
                  <FooterLink href="/support" title="Get support" />
                  <FooterLink
                    href="/support/submit-incident"
                    title="Report a violation"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 xs:col-span-4 lg:col-span-2">
              <div className="mb-6">
                <FooterLinkGroupLabel title="2023 Events" />
                <div className="flex flex-col items-start space-y-4 lg:space-y-2">
                  <FooterLink href="/events/hackisu-v2" title="HackISU v2" />
                  <FooterLink href="/events/dataisu-v1" title="DataISU v1" />
                </div>
              </div>
              <FooterLinkGroupLabel title="2024 Events" />
              <div className="flex flex-col items-start space-y-4 lg:space-y-2">
                <FooterLink href="/events/hackisu-v3" title="HackISU v3" />
                <FooterLink href="/events/builddsm-v1" title="BuildDSM v1" />
              </div>
              <div className="block xs:hidden mt-6 xs:mt-0">
                <FooterLinkGroupLabel title="Policies" />
                <div className="flex flex-col items-start space-y-4 lg:space-y-2">
                  <FooterLink
                    href="/policies/code-of-conduct"
                    title="Code of conduct"
                  />
                  <FooterLink
                    href="/policies/privacy-policy"
                    title="Privacy policy"
                  />
                  {/* <FooterLink
                    href="/policies/cookies-policy"
                    title="Cookies policy"
                  /> */}
                  <FooterLink
                    href="/policies/transparency"
                    title="Transparency"
                  />
                  <FooterLink
                    href="/policies/terms-of-service"
                    title="Terms of service"
                  />
                </div>
              </div>
            </div>
            <div className="hidden xs:block xs:col-span-4 lg:col-span-2">
              <div className="mb-6">
                <FooterLinkGroupLabel title="Policies" />
                <div className="flex flex-col items-start space-y-3 md:space-y-2">
                  <FooterLink
                    href="/policies/code-of-conduct"
                    title="Code of conduct"
                  />
                  <FooterLink
                    href="/policies/privacy-policy"
                    title="Privacy policy"
                  />
                  {/* <FooterLink
                    href="/policies/cookies-policy"
                    title="Cookies policy"
                  /> */}
                  <FooterLink
                    href="/policies/transparency"
                    title="Transparency"
                  />
                  <FooterLink
                    href="/policies/terms-of-service"
                    title="Terms of service"
                  />
                </div>
              </div>
              <FooterLinkGroupLabel title="Support" />
              <div className="flex flex-col items-start space-y-3 md:space-y-2">
                <FooterLink
                  href="/support"
                  title="Get support"
                  target="_blank"
                />
                <FooterLink
                  href="/support/submit-incident"
                  title="Report a violation"
                />
              </div>
            </div>
          </div>
          <svg
            className="w-full h-auto mt-12 lg:mt-6 mb-12"
            viewBox="0 0 1104 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_97_1123)">
              <path
                d="M717.084 144.082C745.865 144.082 760.084 124.038 760.084 98.3404C760.084 72.9856 745.865 52.9415 717.084 52.9415C688.131 52.9415 673.912 72.8142 673.912 98.3404C673.912 124.209 688.131 144.082 717.084 144.082ZM687.788 98.5117C687.788 74.3561 697.725 64.0771 717.084 64.0771C736.442 64.0771 746.207 74.3561 746.207 98.5117C746.207 122.496 736.442 132.946 717.084 132.946C697.725 132.946 687.788 122.496 687.788 98.5117Z"
                fill="url(#paint0_linear_97_1123)"
              />
              <path
                d="M634.68 52.7417C617.72 52.7417 607.098 62.3354 601.788 77.9253V24.2508L588.082 21.2195V141.141H601.788V108.42C601.788 78.9532 611.895 64.2199 630.911 64.2199C643.417 64.2199 651.469 69.7021 651.469 88.0329V141.141H665.175V86.4911C665.175 64.3913 656.095 52.7417 634.68 52.7417ZM815.484 54.2836C799.209 54.2836 789.273 63.8773 784.133 78.0966V58.5141L770.428 55.4828V141.141H784.133V109.619C784.133 85.4632 789.615 66.961 814.97 67.8176H818.567V54.2836H815.484ZM824.429 41.4348H842.074V27.2155H824.429V41.4348ZM826.313 141.141H840.018V55.4828H826.313V141.141ZM868.136 130.691L926.041 65.9331V55.4828H851.518V65.9331H909.766L851.518 130.691V141.141H926.898V130.691H868.136ZM972.621 143.882C1001.4 143.882 1015.62 123.838 1015.62 98.1406C1015.62 72.7858 1001.4 52.7417 972.621 52.7417C943.669 52.7417 929.45 72.6144 929.45 98.1406C929.45 124.009 943.669 143.882 972.621 143.882ZM943.326 98.3119C943.326 74.1563 953.263 63.8773 972.621 63.8773C991.98 63.8773 1001.75 74.1563 1001.75 98.3119C1001.75 122.296 991.98 132.747 972.621 132.747C953.263 132.747 943.326 122.296 943.326 98.3119ZM1073.36 52.7417C1056.4 52.7417 1045.78 62.3354 1040.47 77.9253V58.5141L1026.76 55.4828V141.141H1040.47V108.42C1040.47 78.9532 1050.57 64.2199 1069.59 64.2199C1082.1 64.2199 1090.15 69.7021 1090.15 88.0329V141.141H1103.85V86.4911C1103.85 64.3913 1094.77 52.7417 1073.36 52.7417Z"
                fill="url(#paint1_linear_97_1123)"
              />
              <path
                d="M45.7292 97.9207L80.6009 58.7876V57.1351H50.9891L23.6908 88.5259V14.1765L0 0V143.516H23.6908V108.166L51.8189 143.516H82.4151V141.864L45.7292 97.9207ZM85.6217 143.516H109.306V100.895C109.306 87.0141 117.041 78.9202 129.044 78.9202H137.272L143.601 55.6302H131.351C120.332 55.6302 113.068 62.0715 109.306 69.6942H108.652L106.676 57.1351H85.6217V143.516ZM181.461 145C204.983 145 218.632 131.295 220.939 115.761H196.411C194.934 119.727 190.821 124.354 181.447 124.354C169.936 124.354 164.837 117.252 164.669 107.175H222.071V97.759C222.071 74.3002 207.268 55.6302 180.955 55.6302C152.988 55.6302 138.847 75.9457 138.847 100.396C138.861 125.177 154.324 145 181.461 145ZM164.851 91.1348C165.344 82.8722 170.111 76.4309 180.969 76.4309C191.003 76.4309 195.736 82.8722 196.263 91.1348H164.851ZM253.778 145C264.467 145 272.061 141.203 276.801 135.753H277.462V142.525L301.969 143.516V86.6836C301.969 68.6816 287.827 55.6302 264.305 55.6302C238.99 55.6302 227.296 73.0485 227.296 89.2432L250.979 85.7272C250.979 80.4391 255.585 76.1426 263.482 76.1426C272.856 76.1426 276.639 80.7696 276.639 86.6906V93.7999C273.186 92.6397 264.636 91.3177 258.215 91.3177C234.532 91.3177 223.674 101.866 223.674 117.92C223.674 133.271 234.384 145 253.778 145ZM260.191 125.177C252.625 125.177 248.68 121.541 248.68 116.591C248.68 111.964 252.955 108.328 261.176 108.328C266.467 108.245 271.723 109.2 276.646 111.141V111.971C276.639 119.066 270.557 125.177 260.191 125.177ZM348.028 145C356.087 145 362.795 143.516 365.461 142.525V121.372H363.815C361.186 122.357 358.402 122.86 355.595 122.856C348.028 122.856 344.568 119.389 344.568 111.296V78.7585H365.13V57.114H344.568V27.4037H342.93L320.392 35.582V57.1351H305.259V78.7585H319.239V117.435C319.239 133.109 328.128 145 348.028 145ZM387.281 48.3591C396.985 48.3591 402.582 42.7335 402.582 33.4935C402.582 24.4081 396.957 18.7895 387.281 18.7895C377.253 18.7895 371.986 24.4151 371.986 33.4935C371.986 42.7405 377.253 48.3591 387.281 48.3591ZM374.454 143.516H399.77V57.114H374.454V143.516ZM432.511 143.516H464.914L491.889 58.7876V57.1351H466.229L449.289 119.586H448.628L431.196 57.1351H405.177V58.7876L432.511 143.516ZM530.431 145C553.946 145 567.603 131.295 569.902 115.761H545.396C543.919 119.727 539.805 124.354 530.431 124.354C518.913 124.354 513.815 117.252 513.653 107.175H571.055V97.759C571.055 74.3002 556.288 55.6302 529.939 55.6302C501.973 55.6302 487.832 75.9457 487.832 100.396C487.832 125.177 503.288 145 530.431 145ZM513.815 91.1348C514.314 82.8722 519.082 76.4309 529.939 76.4309C539.967 76.4309 544.742 82.8722 545.234 91.1348H513.815Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_97_1123"
                x="0"
                y="0"
                width="1103.85"
                height="145"
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
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_97_1123"
                />
              </filter>
              <linearGradient
                id="paint0_linear_97_1123"
                x1="551.108"
                y1="-22.7828"
                x2="551.108"
                y2="183.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF0E9F" />
                <stop offset="1" stopColor="#FF900E" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_97_1123"
                x1="551.108"
                y1="-22.7828"
                x2="551.108"
                y2="183.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF0E9F" />
                <stop offset="1" stopColor="#FF900E" />
              </linearGradient>
            </defs>
          </svg>
          <div>
            <hr className="line text-horizon-grey-400" />
            <div className="grid grid-cols-2 gap-4 md:gap-0 mt-6 md:mt-4 mb-1">
              <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start items-center space-x-3">
                <p className="text-horizon-grey-400 text-md">
                  © 2023 Kreative, LLC. All rights reserved.
                </p>
                <Link
                  href="/sitemap"
                  className="text-horizon-grey-400 text-md underline"
                >
                  Sitemap
                </Link>
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end items-center">
                <a
                  href="https://kreativedreamflow.com"
                  className="text-horizon-grey-400 hover:text-horizon-purple hover:underline text-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website made with ♥ by Kreative Dreamflow.
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
