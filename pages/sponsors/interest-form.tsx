import { Widget } from "@typeform/embed-react";
import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import DreamflowBadge from "@/components/DreamflowBadge";

export default function SponsorInterestForm() {
  return (
    <div>
      <NextSeo
        title="Sponsor Interest Form"
        description="Interested in sponsoring Kreative Horizon and the Kreative Builders League? Fill out this form to get started."
      />
      <Navbar />
      <main>
        <div className="py-12">
          <Container>
            <Widget id="fvG3urfp" style={{ width: "100%", height: "80vh" }} />
          </Container>
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
