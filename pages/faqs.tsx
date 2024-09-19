import Link from "next/link";
import Container from "../components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accordian from "@/components/Accordian";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const eventFaqs = [
  {
    question: "How much does it cost to attend events?",
    answer: (
      <p>
        The event is completely free to attend. We provide accommodations for
        space, meals and snacks, and different workshops and mentorships
        experiences.
      </p>
    ),
  },
  {
    question: "What events does Kreative Horizon organize?",
    answer: (
      <p>
        We run hackathons, data-thons, design jams, and pitch competitions. We
        also run workshops and are organizing a mentorship programs.
      </p>
    ),
  },
  {
    question: "Who can participate in Kreative Horizon events?",
    answer: (
      <p>
        Everyone is welcome to attend an event by Kreative Horizon. However,
        certain events have different eligibility requirements. Please see the
        event page for more information.
      </p>
    ),
  },
  {
    question: "Who sponsors Kreative Horizon events?",
    answer: (
      <p>
        We are sponsored by a variety of companies and organizations like
        1Password, Microsoft, and even the Ivy College of Business at Iowa State
        University.
      </p>
    ),
  },
];

const labsFaqs = [
  {
    question: "Who can use a Horizon Lab?",
    answer: (
      <p>
        Anyone can use a Horizon Lab. All workshop materials are free to use and
        learn from!
      </p>
    ),
  },
  {
    question: "What sort of topics do Horizon Labs cover?",
    answer: (
      <p>
        We cover a wide range of topics, from design to data science to
        entrepreneurship. We are always looking for new topics to cover, so if
        you have an idea, please let us know!
      </p>
    ),
  },
  {
    question: "Can I use Horizon Labs for my own event?",
    answer: (
      <p>
        Yes! We encourage you to use our workshop materials for your own events.
        Please let us know if you do so we can help promote your event!
      </p>
    ),
  },
  {
    question: "How can I contribute to Horizon Labs?",
    answer: (
      <p>
        We are always looking for new contributors to help us create new
        workshop materials. If you are interested in contributing,{" "}
        <Link className="underline text-horizon-pink" href="/contact-us">
          contact us
        </Link>
        !
      </p>
    ),
  },
];

const travelGrantFaqs = [
  {
    question: "Who can apply for a travel grant?",
    answer: (
      <p>
        Anyone can apply for a travel grant. We encourage students from out of
        town and in areas without much of a tech scene to apply.
      </p>
    ),
  },
  {
    question: "How much money can I request?",
    answer: (
      <p>
        You can request up to $150 for travel expenses. We will reimburse you
        after the event.
      </p>
    ),
  },
  {
    question: "When do I hear back for my travel grant request?",
    answer: (
      <p>
        We will make sure to get back to you within 1-2 weeks before the event
        with the status of your request.
      </p>
    ),
  },
  {
    question: "How do I apply for a travel grant?",
    answer: (
      <p>
        You can apply for a travel grant by filling out the form on the{" "}
        <Link className="underline text-horizon-purple" href="/travel-grant">
          travel grants page
        </Link>
        .
      </p>
    ),
  },
];

const hackathonFaqs = [
  {
    question: "What is a hackathon?",
    answer: (
      <p>
        A hackathon is a time-limited event where participants work in teams to
        create innovative solutions to real-world problems.
      </p>
    ),
  },
  {
    question: "Who can participate?",
    answer: (
      <p>
        Anyone can participate in a hackathon. We encourage people of all skill
        levels to attend our hackathons!
      </p>
    ),
  },
  {
    question:
      "Do I need to have coding experience to participate in a hackathon?",
    answer: (
      <p>
        No, hackathons are interdisciplinary events, and you can contribute to
        your team by bringing your creativity, problem solving, and unique self!
      </p>
    ),
  },
  {
    question: "What should I bring to a hackathon?",
    answer: (
      <p>
        Bring your laptop, charger, any necessary software or tools, a water
        bottle, and comfortable clothing. We will be providing three meals,
        snacks, and beverages.
      </p>
    ),
  },
  {
    question: "Do I need to be at the event for the entire time?",
    answer: (
      <p>
        Yes, we would like all of our participants to be there for the entire
        time. We understand if there is an emergency, please reach out to us at
        the event if you need to leave.
      </p>
    ),
  },
  {
    question: "Do I need to have a team to participate in a hackathon?",
    answer: (
      <p>
        No, many hackathons have team formation activities to help participants
        find teammates. You can also join an existing team or work on your own
        project.
      </p>
    ),
  },
  {
    question: "What projects can I work on at a hackathon?",
    answer: (
      <p>
        You are free to work on anything you believe will solve a problem! This
        can be a software project, an Arduino/Raspberry Pi project, data
        analysis, AI, cryptocurrency/blockchain, etc.
      </p>
    ),
  },
  {
    question: "What can I expect at a hackathon?",
    answer: (
      <p>
        You can expect to work collaboratively with a team to create a prototype
        of a solution to a real-world problem. You will have access to mentors,
        workshops, and resources to help you develop your project. Hackathons
        are also social events, and you can expect to meet new people, network
        with industry professionals, and have fun!
      </p>
    ),
  },
  {
    question: "What happens to the projects after the hackathon?",
    answer: (
      <p>
        The projects can take various paths, such as being continued by the
        team, submitted to competitions or startup accelerators, or serving as a
        learning experience for the participants. Regardless of the outcome,
        hackathons are an excellent opportunity to develop your skills and have
        fun.
      </p>
    ),
  },
  {
    question: "How do I come up with an idea for a hackathon?",
    answer: (
      <p>
        Brainstorm solutions to problems you&apos;re passionate about! You can
        also look for inspiration from current events, industry trends, and your
        own workflows!
      </p>
    ),
  },
  {
    question: "How much does it cost to attend the event?",
    answer: (
      <p>
        The event is completely free to attend. We provide accommodations for
        space, meals and snacks, and different workshops and mentorships
        experiences.
      </p>
    ),
  },
];

export default function Faqs() {
  return (
    <div>
      <NextSeo
        title="Frequently Asked Questions"
        description="Answers to your most frequently asked questions about Kreative Horizon events, workshops, travel grants, and more."
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-horizon-grey-200">
            <Container>
              <div className="pt-32 pb-12 md:py-16 min-h-[25rem] lg:min-h-[30rem] flex flex-col justify-end items-start space-y-4">
                <p className="text-2xl tracking-wide font-guthen">
                  Frequently asked questions
                </p>
                <h1 className="text-6xl md:text-7xl font-chedros">
                  You have questions. We have answers.
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-orange">
                Events
              </h2>
              <p className="text-lg text-horizon-grey-600 pb-4">
                General questions about our events across the whole year.
                Includes hackathons, data-thons, design jams, and pitch
                competitions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-orange border border-horizon-orange"
                  href="/events"
                >
                  See events
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={eventFaqs} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-pink">
                Kreative Horizon Labs
              </h2>
              <p className="text-lg text-horizon-grey-600 pb-4">
                Information about our Horizon Labs, including what they are, who
                can use them, and how to contribute.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-pink border border-horizon-pink"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={labsFaqs} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-purple">
                Kreative Travel Grants
              </h2>
              <p className="text-lg text-horizon-grey-600 pb-4">
                Answers to common questions about our new Kreative Travel Grants
                program for our hackathons.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-purple border border-horizon-purple"
                  href="/forms/travel-grants"
                >
                  Submit a request
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={travelGrantFaqs} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-start space-y-4 pr-8">
              <h2 className="text-5xl font-chedros text-horizon-orange">
                Hackathons
              </h2>
              <p className="text-lg text-horizon-grey-600 pb-4">
                General information about hackathons like what they are, who can
                participate, and what to expect.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-white text-horizon-orange border border-horizon-orange"
                  href="/events"
                >
                  See events
                </Link>
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-8">
              <Accordian faqs={hackathonFaqs} />
            </div>
          </div>
        </Container>
        <NeedHelpCTA />
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
