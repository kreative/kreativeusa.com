import { useRouter } from "next/router";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoCloud5 from "@/components/LogoCloud5";
import FloatingCTA2 from "@/components/FloatingCTA2";
import ContactForm from "@/components/forms/ContactForm";
import SuccessAlert from "@/components/SuccessAlert";
import ErrorAlert from "@/components/ErrorAlert";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import { Envelope, Phone } from "@phosphor-icons/react";

export default function ContactUs() {
  const router = useRouter();
  const success = router.query?.form_completed && router.query.form_completed === "true";
  const error = router.query?.form_completed && router.query.form_completed === "false";

  return (
    <div>
      <NextSeo
        title="Contact Us"
        description="Contact Kreative Horizon for any questions or concerns, we're here for you!"
      />
      <Navbar />
      <main>
        <Container>
          <div className="pt-24 pb-12 grid grid-cols-12 gap-0">
            <div className="col-span-12 md:col-span-7">
              <p className="text-2xl tracking-wide font-guthen pb-2">
                <span className="mr-1.5">Contact</span> Us
              </p>
              <h1 className="text-5xl md:text-6xl font-chedros text-left">
                DROP US A MESSAGE AND WE&apos;LL GET BACK TO YOU RIGHT AWAY
              </h1>
              <p className="text-lg text-horizon-grey-500">
                Mon - Fri 9:00 AM- 6:00 PM CST
              </p>
              {success && (
                <div className={"mt-4"}>
                  <SuccessAlert />
                </div>
              )}
              {error && (
                <div className={"mt-4"}>
                  <ErrorAlert message="Something went wrong on our end, please send us an email instead. Our apologies! 😔" />
                </div>
              )}
              <div className="py-12">
                <ContactForm />
              </div>
            </div>
            <div className="col-span-12 md:col-span-1" />
            <div className="col-span-12 md:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8">
                <div className="bg-horizon-grey-100 rounded-2xl p-10 flex flex-col space-y-6 col-span-2 sm:col-span-1">
                  <Envelope size={50} className="text-horizon-purple" />
                  <h2 className="text-4xl font-chedros text-horizon-grey-700">
                    EMAIL
                  </h2>
                  <p className="text-horizon-grey-600">
                    Send us a message anytime and one of our team members will
                    get back to you as soon as possible.
                  </p>
                  <a
                    href="mailto:horizon@kreativeusa.com"
                    className="underline text-lg transform transition duration-300 ease-in-out hover:skew-y-2 hover:text-horizon-orange"
                  >
                    horizon@kreativeusa.com
                  </a>
                </div>
                <div className="bg-horizon-grey-100 rounded-2xl p-10 flex flex-col space-y-6 col-span-2 sm:col-span-1">
                  <Phone size={50} className="text-horizon-purple" />
                  <h2 className="text-4xl font-chedros text-horizon-grey-700">
                    PHONE
                  </h2>
                  <p className="text-horizon-grey-600">
                    Our folks are always ready to help you with any questions or
                    concerns you may have during business hours.
                  </p>
                  <a
                    href="tel:+15152126468"
                    className="underline text-lg transform transition duration-300 ease-in-out hover:-skew-y-2 hover:text-horizon-orange"
                  >
                    +1 (515) 212-6468
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="py-24">
          <LogoCloud5 />
        </div>
        <div className="pt-6 pb-32">
          <FloatingCTA2
            label="Need more help?"
            title="Reach our support team"
            description="If you need to report an Code of Conduct violation or have an urgent need that you would like support with, our team is here for you."
            btnLabel="Get Support"
            btnLink="/support"
            btnTarget="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
