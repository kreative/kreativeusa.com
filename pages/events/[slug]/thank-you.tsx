import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import LogoCloud6 from "@/components/LogoCloud6";
import LeagueBadge from "@/components/LeagueBadge";
import EventCardType from "@/types/EventCard";
import getLatestEvents from "@/lib/getLatestEvents";

export default function CompleteApp({
  relatedEvents,
}: {
  relatedEvents: EventCardType[];
}) {
  return (
    <div>
      <NextSeo title="Thank You For Applying Up!" />
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 min-h-[50vh] py-24">
            <p className="text-2xl font-guthen tracking-wider text-horizon-pink">
              Thank you for applying!
            </p>
            <h1 className="text-5xl md:text-6xl font-chedros text-center">
              We&apos;re excited to see you at the event. We&apos;ll reach out
              soon with the status of your acceptance!
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-3 pt-3 sm:p-0">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white"
                  href="/events"
                >
                  See more events
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-horizon-grey-800"
                  href="/"
                >
                  Go back home <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
        <div className="py-24 bg-horizon-grey-100">
          <Container>
            <h1 className="text-center sm:text-left pb-8 text-5xl sm:text-6xl font-chedros">
              MORE EVENTS YOU MIGHT LIKE
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedEvents.map((event: EventCardType) => (
                <div className="col-span-2 sm:col-span-1" key={event._id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            <div className="mt-24 mb-3">
              <LogoCloud6 />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
      <LeagueBadge />
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch the list of event slugs from your data or database
  const eventSlugs = [
    "hackisu-v2",
    "dataisu-v1",
    "hackisu-v3",
    "builddsm-v1",
  ];

  // Generate dynamic paths based on event slugs
  const paths = eventSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const params = context.params;
  const relatedEvents: EventCardType[] = await getLatestEvents(params.slug);

  return {
    props: {
      relatedEvents,
    },
  };
}
