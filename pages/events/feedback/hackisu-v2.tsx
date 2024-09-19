import { Widget } from "@typeform/embed-react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeagueBadge from "@/components/LeagueBadge";
import { NextSeo } from "next-seo";

export default function HackISUv2FeedbackForm() {
  return (
    <div>
      <NextSeo
        title="Provide feedback on HackIowaState v2"
        description="Help us make HackIowaState better for the world. Fill out our short feedback form to let us know what you think!"
      />
      <Navbar />
      <main>
        <Container>
          <div className="text-center pt-4 md:pt-6 pb-8">
            <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-1.5 rounded-[12px]">
              <div className="bg-white rounded-[10px]">
                <Widget
                  id={"ZC0YWZvF"}
                  style={{ width: "100%", height: "70vh" }}
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
