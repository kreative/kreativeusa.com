import Container from "../../components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import { NextSeo } from "next-seo";

export default function TransparencyPolicy() {
  return (
    <div>
      <NextSeo
        title="Transparency Policy | Policies"
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
                  Transparency Policy
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="pt-12 max-w-full lg:max-w-[75%] mx-auto">
            <p className="text-xl pb-3">
              At Kreative Horizon, we prioritize building strong relationships
              with all our stakeholders, particularly sponsors and members who
              participate in our events. We firmly believe that transparency is
              the foundation of trust and success in any business. As such, we
              have developed this Transparency Policy to ensure that we maintain
              clarity, openness, and accountability in all our endeavors.
            </p>
            <ol className="text-xl pb-3 list-outside pl-6 list-decimal space-y-4">
              <li>
                Clear Communication: We are committed to maintaining open and
                honest communication with all stakeholders. We will provide
                clear and accurate information about our events, programs, and
                organizational activities through various channels, including
                our website, social media platforms, and direct communication
                with sponsors and members.
              </li>
              <li>
                Decision-making Involvement: We recognize the importance of
                including stakeholders in our decision-making process. As
                appropriate, we will seek input, feedback, and suggestions from
                sponsors and members, valuing their perspectives to enhance the
                quality and relevance of our events and services.
              </li>
              <li>
                Privacy and Data Protection: Safeguarding the privacy and data
                of all individuals associated with Kreative Horizon is of utmost
                importance to us. We will maintain a comprehensive privacy
                policy that outlines how we collect, use, store, and protect
                personal information. We are committed to complying with all
                relevant data protection laws and regulations.
              </li>
              <li>
                Conflict of Interest Management: In cases where conflicts of
                interest may arise within our organization, we will handle them
                with complete transparency, disclosing any relevant affiliations
                or interests. Our priority is to ensure fairness and integrity
                in all decision-making processes.
              </li>
              <li>
                Event Planning and Execution: Our event planning and execution
                will be conducted with transparency, ensuring that all
                stakeholders have access to event schedules, locations, and
                relevant details. We will provide regular updates on event
                progress and ensure that participants are well-informed
                throughout the entire process.
              </li>
              <li>
                Feedback and Improvement: We are dedicated to continuously
                improving our events and services. To achieve this, we will
                establish a robust feedback mechanism, actively encouraging
                sponsors and members to share their thoughts, opinions, and
                suggestions. We value feedback as a valuable tool for enhancing
                the overall experience of our stakeholders.
              </li>
              <li>
                Compliance and Ethical Practices: Kreative Horizon is committed
                to upholding the highest ethical standards and complying with
                all applicable laws and regulations. We will be transparent
                about our commitment to ethical practices and compliance
                efforts.
              </li>
              <li>
                Sponsorship Acknowledgment: We will acknowledge and disclose the
                names and affiliations of sponsors associated with each event.
                This disclosure will ensure transparency in our partnerships and
                showcase our gratitude for their support.
              </li>
              <li>
                Openness about Challenges: In the face of challenges or
                setbacks, we will maintain transparency with our stakeholders.
                We believe in being honest about the hurdles we encounter and
                the steps we are taking to overcome them.
              </li>
              <li>
                Regular Updates and Reports: To keep our stakeholders informed
                about our progress, achievements, and upcoming initiatives, we
                will provide regular updates and reports. These updates will
                showcase our dedication to transparency and foster a sense of
                involvement within the Kreative Horizon community.
              </li>
            </ol>
            <p className="text-xl pb-3">
              In conclusion, transparency is a core value at Kreative Horizon.
              By adhering to this Transparency Policy, we aim to build strong,
              trust-based relationships with all our stakeholders, especially
              sponsors and members. Our commitment to openness and
              accountability ensures that we create a vibrant and inclusive
              environment that encourages creativity and collaboration for the
              benefit of all involved.
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
