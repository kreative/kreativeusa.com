import Link from "next/link";
import Container from "../../components/Container";
import SplashContainer from "../../components/SplashContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MoneyManagerFeedback from "../../components/forms/MoneyManagerFeedback";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";

export default function MoneyMoneyFeedback() {
  return (
    <div>
      <NextSeo
        title="Money Manager Feedback | Kreative Horizon Library"
        description="Let us know what you think about our Hackathon Money Manager powered by Kreative Horizon Library."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-horizon-grey-200">
            <Container>
              <div className="pt-32 pb-12 md:py-16 min-h-[25rem] lg:min-h-[30rem] flex flex-col justify-end items-start space-y-4 mx-auto max-w-3xl">
                <p className="text-2xl tracking-wide font-guthen">
                  Hackathon Money Manager by Kreative Horizon Library
                </p>
                <h1 className="text-6xl md:text-7xl font-chedros">
                  Good, bad, or ugly, we value your feedback and would love to
                  hear it.
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="py-16 mx-auto max-w-3xl">
            <MoneyManagerFeedback />
          </div>
        </Container>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
