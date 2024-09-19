import Link from "next/link";
import { NextSeo } from "next-seo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DreamflowBadge from "./DreamflowBadge";
import LogoCloud1 from "./LogoCloud1";
import Container from "./Container";
import { formatDate } from "@/lib/formatDate";
import PressReleaseMeta from "@/types/PressReleaseMeta";

export function PressReleaseLayout({
  children,
  meta,
  isRssFeed = false,
}: {
  children: React.ReactNode;
  meta: PressReleaseMeta;
  isRssFeed?: boolean;
}) {
  if (isRssFeed) {
    return children;
  }

  return (
    <div>
      <NextSeo
        title={`${meta.title} | Press Releases`}
        description={meta.description}
      />
      <Navbar />
      <main>
        <Container>
          <div className="my-16 md:my-24">
            <div className="mx-auto max-w-2xl">
              <article>
                <div className={"mb-4"}>
                  <span
                    className={
                      "py-1 px-2 rounded-md bg-horizon-pink text-white"
                    }
                  >
                    FOR IMMEDIATE RELEASE
                  </span>
                </div>
                <header className="flex flex-col">
                  <h1 className="mt-6 text-4xl text-horizon-grey-800 dark:text-zinc-100 sm:text-6xl font-chedros">
                    {meta.title}
                  </h1>
                  <time
                    dateTime={meta.date}
                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="ml-3">{formatDate(meta.date)}</span>
                  </time>
                </header>
                <div className="mt-8 prose-lg">{children}</div>
              </article>
              <div className="mt-12">
                <hr className="border-horizon-grey-400 mb-12" />
                <p className="text-lg text-horizon-grey-700">
                  <span className="font-bold">About Kreative Horizon:</span>{" "}
                  <Link href="/">Kreative Horizon</Link> is a subsidiary of
                  Kreative, LLC. that is working to provide tools and resources
                  for students to build the solutions of tomorrow, today.
                  Through hackathons and local workshops, Kreative Horizon has
                  been connecting students to new ideas and skills. Kreative
                  Horizon started in 2019 with the event
                  &apos;BuildChicago&apos; and was poised to run four new events
                  in 2020 including the largest all-female hackathon in San
                  Francisco. However, when the COVID-19 pandemic came,
                  operations had to shut down. Now, Kreative Horizon is back to
                  empower students on campuses everywhere!
                </p>
                <p className="text-2xl mt-6 text-horizon-grey-700">
                  For media inquiries, see our{" "}
                  <Link href="/press" className="text-horizon-purple underline">
                    Press page
                  </Link>{" "}
                  for contact information and resources!
                </p>
              </div>
            </div>
          </div>
        </Container>
        <div className="mb-24">
          <LogoCloud1 />
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
