import { Widget } from "@typeform/embed-react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeagueBadge from "@/components/LeagueBadge";
import { NextSeo } from "next-seo";

export default function RSVPHackISUv2() {
  return (
    <div>
      <NextSeo
        title="RSVP for HackIowaState v2"
        description="We're excited to see you on September 30th, 2023. RSVP to let us know you're coming!"
      />
      <Navbar />
      <main>
        <Container>
          <div className="text-center pt-4 md:pt-8 pb-12">
            <h1 className="text-4xl md:text-5xl font-chedros">
              Let us know if you&apos;re coming!
            </h1>
            <p className="text-lg md:text-xl text-horizon-grey-700 pb-6">
              Your RSVP helps us plan for food, swag, and more at HackIowaState v2!
            </p>
            <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-1.5 rounded-[12px]">
              <div className="bg-white rounded-[10px]">
                <Widget
                  id={"O0YOgqUA"}
                  style={{ width: "100%", height: "60vh" }}
                  inlineOnMobile={true}
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <LeagueBadge />
    </div>
  );
}
