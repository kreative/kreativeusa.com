import Link from "next/link";
import Container from "../../components/Container";
import SplashContainer from "../../components/SplashContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TravelGrantRequestForm from "@/components/forms/TravelGrantRequestForm";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";

export default function TravelGrants() {
  return (
    <div>
      <NextSeo
        title="Travel Grants"
        description="Apply for a Kreative Travel Grant to cover part of all of your expenses to come to one of our events!"
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-horizon-grey-200">
            <Container>
              <div className="pt-32 pb-12 md:py-16 min-h-[25rem] lg:min-h-[30rem] flex flex-col justify-end items-start space-y-4">
                <p className="text-2xl tracking-wide font-guthen">
                  Kreative Travel Grants
                </p>
                <h1 className="text-6xl md:text-7xl font-chedros">
                  Submit a request and get the chance to have your travel costs
                  covered
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="py-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <ul className="text-xl list-disc space-y-6 px-8 md:p-0">
                <li>
                  Travel Grants are only for students that are eligible for the
                  event they are applying for.
                </li>
                <li>
                  You can receive up to <span className="font-bold">$150</span> per event to cover your travel
                  expenses!
                </li>
                <li>
                  Please note that filling out this application does{" "}
                  <span className="font-bold">NOT GUARANTEE</span> you will be
                  awarded a travel grant.
                </li>
                <li>
                  All travel grants are awarded and up to the discretion of the
                  Kreative Horizon team.
                </li>
                <li>
                  If you have any questions, please do not hesitate to{" "}
                  <Link className="underline font-bold text-horizon-orange" href="/contact-us">reach out to us</Link>.
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-1" />
            <div className="col-span-12 md:col-span-7">
              <TravelGrantRequestForm />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
