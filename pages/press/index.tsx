import Link from "next/link";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoCloud5 from "../../components/LogoCloud5";
import DreamflowBadge from "../../components/DreamflowBadge"
import { NextSeo } from "next-seo";
import { formatDate } from "@/lib/formatDate";
import { getAllPressReleases } from "@/lib/getAllPressReleases";
import PressReleaseMeta from "@/types/PressReleaseMeta";
import { motion } from "framer-motion";
import {
  Camera,
  BookOpen,
  CaretRight,
  Eyedropper,
} from "@phosphor-icons/react";

function PressReleaseCard({ article }: { article: any }) {
  // skipcq: JS-0323
  return (
    <motion.div whileHover={{ scale: 0.97, transition: { duration: 0.2 } }}>
      <Link
        href={`/press/press-releases/${article.slug}`}
        className="flex flex-col justify-start items-start space-y-4"
      >
        <p className="text-horizon-grey-600 text-base">
          {formatDate(article.date)}
        </p>
        <h2 className="text-2xl font-bold text-horizon-grey-800">
          {article.title}
        </h2>
        <p className="text-horizon-grey-600 text-xl">{article.description}</p>
        <div className="flex justify-start items-center space-x-1">
          <p className="text-horizon-purple text-xl font-bold">
            View press release
          </p>
          <CaretRight size={14} className="text-horizon-purple -mb-1" />
        </div>
      </Link>
    </motion.div>
  );
}

// skipcq: JS-0323
export default function Press({ articles }: { articles: any[] }) {
  return (
    <div>
      <NextSeo
        title="Press"
        description="Report on Kreative Horizon changing the way students help change the world."
      />
      <Navbar />
      <main>
        <Container>
          <div className="pt-24 pb-12 grid grid-cols-12 gap-0">
            <div className="col-span-12 md:col-span-7">
              <p className="text-2xl tracking-wide font-guthen pb-2">
                Press and Newsroom
              </p>
              <h1 className="text-5xl md:text-6xl font-chedros text-left">
                Let&apos;s work together to help students build the future
              </h1>
              <p className="text-lg text-horizon-grey-500 pb-8">
                Our press team loves working with dedicated journalists in the
                community to share mission-driven and unique stories. If
                you&apos;re a member of the media and would like to talk, our
                team is here to speak with you and answer any questions you may
                have.
              </p>
              <p className="text-xl text-horizon-purple">
                <span>For press inquires:</span>
                <br />
                <a
                  className="underline hover:text-horizon-pink"
                  href="mailto:press@kreativeusa.com"
                >
                  press@kreativeusa.com
                </a>
              </p>
              <div className="pt-12">
                <h2 className="text-5xl font-chedros text-horizon-grey-700">
                  Latest Press Releases
                </h2>
                <div className="flex flex-col justify-start items-center space-y-12 pt-8 pb-16 md:pb-0">
                  {articles.map((article) => (
                    <PressReleaseCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-1" />
            <div className="col-span-12 md:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8">
                <div className="bg-horizon-grey-100 rounded-2xl p-10 flex flex-col space-y-6 col-span-2 md:col-span-1">
                  <Camera size={50} className="text-horizon-purple" />
                  <h2 className="text-4xl font-chedros text-horizon-grey-700">
                    Event Photo Albums
                  </h2>
                  <p className="text-horizon-grey-600">
                    Want to use photos from our events? Check out our photo
                    albums from the past few years.
                  </p>
                  <div className="flex flex-col space-y-1 justify-start items-start">
                    <a
                      href="https://drive.google.com/drive/folders/1YZ4teExd6cT_3xqm898Dtpji2b8U6gSE?usp=sharing"
                      className="underline text-lg transform transition duration-300 ease-in-out hover:skew-y-2 hover:text-horizon-orange"
                    >
                      1st (ever) Horizon Builders Club meeting
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1PNxVGk4wZFHnS20ZQJwQssWYpOKQTzhf?usp=sharing"
                      className="underline text-lg transform transition duration-300 ease-in-out hover:skew-y-2 hover:text-horizon-orange"
                    >
                      Fall 2023 Iowa State Clubfest
                    </a>
                    <a
                      href="https://www.icloud.com/sharedalbum/#B0U5oqs3qRrfaI0"
                      className="underline text-lg transform transition duration-300 ease-in-out hover:skew-y-2 hover:text-horizon-orange"
                    >
                      HackIowaState v1 photos
                    </a>
                    <a
                      href="https://www.icloud.com/sharedalbum/#B0UJtdOXmKQZ4iL"
                      className="underline text-lg transform transition duration-300 ease-in-out hover:skew-y-2 hover:text-horizon-orange"
                    >
                      BuildChicago 2019 photos
                    </a>
                  </div>
                </div>
                <div className="bg-horizon-grey-100 rounded-2xl p-10 flex flex-col space-y-6 col-span-2 sm:col-span-1">
                  <Eyedropper size={50} className="text-horizon-purple" />
                  <h2 className="text-4xl font-chedros text-horizon-grey-700">
                    Brand Guidelines
                  </h2>
                  <p className="text-horizon-grey-600">
                    We&apos;d love for you to use our brand in your articles and
                    want to make sure you use it correctly.
                  </p>
                  <Link
                    href="/brand-guidelines"
                    className="underline text-lg transform transition duration-300 ease-in-out hover:-skew-y-2 hover:text-horizon-orange"
                  >
                    See brand guidelines
                  </Link>
                </div>
                <div className="bg-horizon-grey-100 rounded-2xl p-10 flex flex-col space-y-6 col-span-2 md:col-span-1">
                  <BookOpen size={50} className="text-horizon-purple" />
                  <h2 className="text-4xl font-chedros text-horizon-grey-700">
                    DISCOVER OUR STORY
                  </h2>
                  <p className="text-horizon-grey-600">
                    Learn more about our history and how we began bringing
                    students together with our first hackathon back in 2019.
                  </p>
                  <Link
                    href="/about-us"
                    className="underline text-lg transform transition duration-300 ease-in-out hover:skew-y-2 hover:text-horizon-orange"
                  >
                    Read our story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="pt-12 pb-32">
          <LogoCloud5 />
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllPressReleases()).map(
        (
          { component, ...meta }: { component: any; meta?: PressReleaseMeta }, // skipcq: JS-0323, JS-0356
        ) => meta,
      ),
    },
  };
}
