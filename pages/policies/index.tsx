import Link from "next/link";
import Container from "../../components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import {
  LockKey,
  Handshake,
  Pen,
  CubeTransparent,
} from "@phosphor-icons/react";

const policies = [
  {
    title: "Privacy Policy",
    link: "/policies/privacy-policy",
    icon: <LockKey size={54} className="text-horizon-purple" />,
  },
  {
    title: "Terms of Service",
    link: "/policies/terms-of-service",
    icon: <Pen size={54} className="text-horizon-purple" />,
  },
  // {
  //   title: "Cookies Policy",
  //   link: "/policies/cookies-policy",
  //   icon: <Cookie size={54} className="text-horizon-purple" />,
  // },
  {
    title: "Code of Conduct",
    link: "/policies/code-of-conduct",
    icon: <Handshake size={54} className="text-horizon-purple" />,
  },
  {
    title: "Transparency",
    link: "/policies/transparency",
    icon: <CubeTransparent size={54} className="text-horizon-purple" />,
  },
];

export default function Policies() {
  return (
    <div>
      <NextSeo
        title="Policies"
        description="Review Kreative Horizon's event code of conduct and other digital policies"
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-gradient-to-b from-horizon-purple-300 to-transparent">
            <Container>
              <div className="pt-32 md:py-16 min-h-[20rem] lg:min-h-[25rem] flex flex-col justify-end items-center space-y-4">
                <p className="text-2xl tracking-wide font-guthen">
                  Legal Policies
                </p>
                <h1 className="text-6xl md:text-7xl font-chedros text-center">
                  Get to know all the &apos;fun&apos; stuff
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-full lg:max-w-[75%] mx-auto">
            {policies.map((policy) => (
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                key={policy.title}
              >
                <div className="col-span-1 pt-6 pb-12 px-6 bg-horizon-grey-100 border border-horizon-grey-300 rounded-2xl">
                  <Link href={policy.link}>
                    <div className="flex justify-center items-center my-6">
                      {policy.icon}
                    </div>
                    <h2 className="text-2xl sm:text-xl xl:text-2xl text-center text-horizon-grey-700">
                      {policy.title}
                    </h2>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
