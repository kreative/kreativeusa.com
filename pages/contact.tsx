import { useRouter } from "next/router";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";

export default function ContactUs() {
  const router = useRouter();

  return (
    <div>
      <NextSeo
        title="Contact Us"
        description="Contact Kreative Horizon for any questions or concerns, we're here for you!"
      />
      <Navbar />
      <Container>
        Contact us
      </Container>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
