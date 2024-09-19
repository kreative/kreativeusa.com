import Image from "next/image";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import {
  DownloadSimple,
  Rocket,
  PencilSimpleLine,
  CheckCircle,
  TextT,
  Images,
  Flask,
  Palette,
  ChatCircleDots,
} from "@phosphor-icons/react";

export default function BrandGuidelines() {
  return (
    <div>
      <NextSeo
        title="Brand Guidelines and Brand Kit"
        description="Resources about the Kreative Horizon brand and strategy to stay consistent over time as we grow."
      />
      <Navbar />
      <main>
        <Container>
          <div className="pt-10 md:pt-16 pb-12 gap-0 md:max-w-[75%] mx-auto">
            <div className="mb-12">
              <p className="text-2xl tracking-wide font-guthen pb-2 text-horizon-pink text-center">
                Brand Guidelines
              </p>
              <h1 className="text-5xl md:text-6xl font-chedros text-center">
                Kreative Horizon Brand Kit
              </h1>
              <p className="text-xl mx-auto text-center">
                Resources about the brand and strategy to stay consistent
              </p>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 text-center"
              >
                <a
                  className="rounded-md py-4 px-7 md:py-3 md:px-5 font-bold bg-horizon-purple text-white grow"
                  href="/brand-assets.zip"
                >
                  Download brand assets
                  <DownloadSimple
                    size={20}
                    className="inline-block ml-2 -mt-1"
                    weight="bold"
                  />
                </a>
              </motion.div>
            </div>
            <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <Rocket size={28} className="inline-block" weight="bold" />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Mission and Vision
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600">
                Kreative Horizon is an organization on a mission to empower
                students to build the future of tomorrow, today, through
                hackathons, workshops, design jams, pitch competitions and more.
                Our vision is to support students across the world and have one
                partner event in every state in the USA and at least one partner
                event in every country by 2023.
              </p>
            </div>
            <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <ChatCircleDots
                  size={28}
                  className="inline-block"
                  weight="bold"
                />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Slogans
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600 mb-2">
                Our most recognizable slogans across the Horizon in some fun
                word art and gradients!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694297049/kreativehorizon.com/brand-guidelines/go_build_slogan_dvqal7.webp"
                  alt="Kreative Horizon Go Build The Future Of Tomorrow, Today slogan behind white background"
                  width={558}
                  height={558}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694296914/kreativehorizon.com/brand-guidelines/dare_greatly_slogan_vv4qsq.webp"
                  alt="Kreative Horizon Dare Greatly slogan behind white background"
                  width={558}
                  height={558}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694296912/kreativehorizon.com/brand-guidelines/see_the_future_slogan_fgpbzf.webp"
                  alt="Kreative Horizon See The Future For What it Could Be slogan behind white background"
                  width={558}
                  height={558}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="col-span-1">
                <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <PencilSimpleLine
                      size={28}
                      className="inline-block"
                      weight="bold"
                    />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Naming
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600">
                    &quot;Kreative Horizon&quot; are two words and never
                    &quot;KreativeHorizon&quot;, always spelled with a capital
                    &quot;K&quot; and &quot;H&quot;. It is the brand name of the
                    organization.. When referring to Kreative Horizon
                    specifically, please use &quot;Kreative Horizon&quot;.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <CheckCircle
                      size={28}
                      className="inline-block"
                      weight="bold"
                    />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Usage
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600">
                    Ensure there is ample surrounding space for Kreative Horizon
                    brand assets, allowing them to be either sizable or compact,
                    but always affording them the freedom to breathe. Avoid
                    making them appear confined or overcrowded.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <TextT size={28} className="inline-block" weight="bold" />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Typographic Logo
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                The Kreative Horizon typographic logo should be used in all
                references to the organization if there is ample room. The black
                and gradient logo is preferred.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694294708/kreativehorizon.com/brand-guidelines/horizon_logo_primary_glmyuo.webp"
                  alt="Kreative Horizon primary typographic logo behind white background"
                  width={539}
                  height={222}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694294710/kreativehorizon.com/brand-guidelines/horizon_logo_primary_white_ugd5d6.webp"
                  alt="Kreative Horizon primary typographic logo behind black background"
                  width={539}
                  height="222"
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694294713/kreativehorizon.com/brand-guidelines/horizon_logo_black_h30n5m.webp"
                  alt="Kreative Horizon primary typographic in all black logo behind white background"
                  width={539}
                  height={222}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694294706/kreativehorizon.com/brand-guidelines/horizon_logo_white_dxw3dk.webp"
                  alt="Kreative Horizon primary typographic in all white logo behind black background"
                  width={539}
                  height="222"
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 mb-4">
              <div className="flex justify-start items-center space-x-2 mb-4">
                <Images size={28} className="inline-block" weight="bold" />
                <h2 className="text-2xl font-bold text-horizon-grey-800">
                  Iconologo
                </h2>
              </div>
              <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                The Kreative Horizon iconologo is for square-first or tight
                layouts. The first iconologo (with the gradient background)
                should only be used in instances like social media or profile
                pictures. The rest can be used in place of the primary
                typographic logo if space is constrained.
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694295035/kreativehorizon.com/brand-guidelines/ikonologo_3_ad5hcd.webp"
                  alt="Kreative Horizon primary iconologo behind gradient background"
                  width={363}
                  height={363}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694296910/kreativehorizon.com/brand-guidelines/horizon_icon_oemvld.webp"
                  alt="Kreative Horizon primary iconologo behind white background"
                  width={539}
                  height={222}
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
                <Image
                  src="https://res.cloudinary.com/dlazo25rt/image/upload/v1694295037/kreativehorizon.com/brand-guidelines/horizon_ikonolog_1_o1ihge.webp"
                  alt="Kreative Horizon flat iconologo behind white background"
                  width={539}
                  height="222"
                  className="rounded-xl border border-horizon-grey-300 w-full col-span-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="col-span-1">
                <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <Palette size={28} className="inline-block" weight="bold" />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Primary Colors
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                    Besides whites and greys, our brand palette is built off of
                    our special pick of orange, pink, and purple.
                  </p>
                  <div className="flex justify-center items-center p-4 bg-horizon-orange rounded-lg mb-2">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">
                        Princeton Orange
                      </p>
                      <p className="text-white text-md">#FF900E</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 bg-horizon-pink rounded-lg mb-2">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">
                        Persian Rose
                      </p>
                      <p className="text-white text-md">#FF0E9F</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 bg-horizon-purple rounded-lg">
                    <div className="text-center">
                      <p className="font-bold text-white text-md">
                        Electric Violet
                      </p>
                      <p className="text-white text-md">#950EFF</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="rounded-2xl bg-horizon-grey-100 p-8 md:p-12 h-full">
                  <div className="flex justify-start items-center space-x-2 mb-4">
                    <Flask size={28} className="inline-block" weight="bold" />
                    <h2 className="text-2xl font-bold text-horizon-grey-800">
                      Gradients
                    </h2>
                  </div>
                  <p className="text-md md:text-lg text-horizon-grey-600 mb-4">
                    Can be for backgrounds or text. We always go from the left
                    or bottom starting with orange and ending with purple.
                  </p>
                  <div className="py-[3.75rem] bg-gradient-to-b from-horizon-orange via-horizon-pink to-horizon-purple rounded-lg mb-2" />
                  <div className="py-[3.75rem] bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
