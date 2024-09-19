import Link from "next/link";
import Container from "../../components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import { NextSeo } from "next-seo";

export default function CodeOfConduct() {
  return (
    <div>
      <NextSeo
        title="Kreative Horizon Code of Conduct | Policies"
        description="Review Kreative Horizon's event code of conduct and other digital policies"
      />
      <Navbar />
      <main>
        <SplashContainer>
          <div className="bg-gradient-to-b from-horizon-tan to-transparent">
            <Container>
              <div className="pt-12 md:py-16 min-h-[16rem] md:min-h-[25rem] lg:min-h-[30rem] flex flex-col justify-end items-center space-y-4">
                <p className="text-2xl tracking-wide font-guthen">
                  Our Policies
                </p>
                <h1 className="text-6xl md:text-7xl font-chedros text-center">
                  Kreative Horizon Code of Conduct
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="pt-12 max-w-full lg:max-w-[75%] mx-auto">
            <p className="text-xl pb-3">
              <span className="font-bold">TL;DR.</span> Be respectful.
              Harassment and abuse are never tolerated. If you are in a
              situation that makes you uncomfortable at an event by Kreative
              Horizon, if the event itself is creating an unsafe or
              inappropriate environment, or if interacting with a representative
              of Kreative Horizon or an event organizer makes you uncomfortable,
              please report it using the procedures included in this document.
            </p>
            <p className="text-xl py-3">
              Kreative Horizon (Kreative, LLC.) stands for equality of
              opportunity. Everyone should be afforded the same freedom of
              engaging in a safe and welcoming environment.
            </p>
            <p className="text-xl py-3">
              Harassment includes, but is not limited to:
            </p>
            <ul className="text-xl py-3 list-outside pl-6 list-disc space-y-4">
              <li>
                Offensive verbal or written comments related to gender, age,
                sexual orientation, disability, physical appearance, body size,
                race, religion, social class, economic status, veteran status,
                or any other protected characteristic.
              </li>
              <li>
                Displaying or sharing sexual images, activities, or materials
                during the event.
              </li>
              <li>
                Deliberate intimidation, stalking, following, or harassing
                photography or recording.
              </li>
              <li>Sustained disruption of talks or other events.</li>
              <li>
                Inappropriate physical contact or unwelcome sexual attention.
              </li>
            </ul>
            <p className="text-xl py-3">
              If what you&apos;re doing is making someone feel uncomfortable,
              that counts as harassment and is enough reason to stop doing it.
            </p>
            <h2 className="text-3xl font-chedros pb-3 pt-9">
              Expected Behavior
            </h2>
            <p className="text-xl pt-3">
              All participants, including sponsors, judges, mentors, volunteers,
              event organizers, and Kreative employees/volunteers, are expected
              to:
            </p>
            <ul className="text-xl py-3 list-outside pl-6 list-disc space-y-4">
              <li>Treat others with respect, kindness, and empathy.</li>
              <li>Engage in open and constructive communication.</li>
              <li>Consider different perspectives and viewpoints.</li>
              <li>
                Comply with the rules and policies established by the event
                organizers.
              </li>
              <li>Respect the privacy and personal boundaries of others.</li>
              <li>
                Use professional and appropriate language in all interactions.
              </li>
              <li>
                Help create a safe and welcoming environment for everyone.
              </li>
            </ul>
            <h2 className="text-3xl font-chedros pb-3 pt-9">
              Unxpected Behavior
            </h2>
            <p className="text-xl pt-3">
              The following behaviors are considered unacceptable and will not
              be tolerated:
            </p>
            <ul className="text-xl py-3 list-outside pl-6 list-disc space-y-4">
              <li>
                Harassment, including offensive comments, slurs, verbal or
                written abuse, or derogatory language based on protected
                characteristics.
              </li>
              <li>
                Physical or verbal intimidation, threats, or unwelcome advances.
              </li>
              <li>
                Deliberate disruption of talks, presentations, workshops, or
                other events.
              </li>
              <li>Sharing or displaying explicit or inappropriate material.</li>
              <li>
                Any behavior that goes against the principles of this Code of
                Conduct or interferes with the well-being and enjoyment of
                others.
              </li>
            </ul>
            <p className="text-xl pt-3">
              Participants asked to stop any harassing behavior are expected to
              comply immediately. Sponsors, judges, mentors, volunteers,
              organizers, Kreative Horizon employees/volunteers, and anyone else
              at the event are also subject to the anti-harassment policy. In
              particular, attendees should not use sexualised images,
              activities, or other material both in their hacks and during the
              event. Any and all staff should not use sexualised
              clothing/uniforms/costumes, or otherwise create a sexualised
              environment.
            </p>
            <p className="text-xl pt-3">
              If a participant engages in harassing behavior, Kreative Horizon
              may take any action it deems appropriate, including warning the
              offender or expulsion from the event with no eligibility for
              reimbursement or refund of any type.
            </p>
            <p className="text-xl pt-3">
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact Kreative
              Horizon using the reporting procedures defined below. An employee,
              organizer, or volunteer of Kreative Horizon will be happy to help
              participants contact security or local law enforcement, provide
              escorts, or otherwise assist those experiencing harassment to feel
              safe for the duration of the event. We value your attendance.
            </p>
            <p className="text-xl pt-3">
              We expect participants to follow these rules at all event venues,
              online interactions in relation to the event, related social
              events, and on event supplied transportation. These rules apply to
              any and all events Kreative Horizon run including but not limited
              to: hackathons, design jams, pitch competitions, datathons,
              workshops, and chapter meetings.
            </p>
            <h2 className="text-3xl font-chedros pb-3 pt-9">Reporting</h2>
            <p className="text-xl pt-3 pb-6">
              If you feel uncomfortable or think there may be a potential
              violation of the Code of Conduct, please report it immediately
              using our Kreative Incidents Manager. All reporters have the right
              to remain anonymous if they so choose. By sending information to
              the general reporting line, your report will go to any or all
              employees and organizers in charge of the event listed below.
            </p>
            <Link
              href="/support/submit-incident"
              className="text-xl pb-9 underline font-bold text-horizon-purple"
            >
              You can report a violation here.
            </Link>
            <p className="text-xl pt-12">
              Kreative reserves the right to revise, make exceptions to, or
              otherwise amend these policies in whole or in part. If you have
              any questions regarding these policies, please contact Kreative by
              email at{" "}
              <a
                href="mailto:hello@kreativeusa.com"
                className="underline text-horizon-purpl"
              >
                hello@kreativeusa.com.
              </a>
            </p>
          </div>
        </Container>
        <NeedHelpCTA />
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
