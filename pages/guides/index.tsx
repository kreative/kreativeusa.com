import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";

export default function Guides() {
  return (
    <div>
      <NextSeo
        title="Guides to Kreativ Horizon and Beyond"
        description="Find out everything you need to know about Kreativ Horizon, our events, and more."
      />
      <Navbar />
      <main>
        <Container>
          <div className="pt-8 md:pt-16 pb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-chedros mb-6">
              Guides to Navigate the Horizon
            </h1>
            <h2 className="text-3xl md:text-4xl font-chedros text-horizon-grey-700">Event Guides</h2>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
