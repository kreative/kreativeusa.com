import Navbar from "@/components/Navbar";
import { NextSeo } from "next-seo";

export default function About() {
  return (
    <div>
      <NextSeo title="About" description="Radical starts here." />
      <Navbar activeLink="about" />
    </div>
  )
}