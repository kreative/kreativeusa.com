import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunityForm from "@/components/forms/CommunityForm";
import LogoCloud6 from "@/components/LogoCloud6";
import DreamflowBadge from "@/components/DreamflowBadge";
import { DiscordLogo } from "@phosphor-icons/react";
import { NextSeo } from "next-seo";

export default function Community() {
  return (
    <div>
      <NextSeo
        title="Community"
        description="Join the global Kreative Horizon community Discord today and start collaborating with other builders today!"
      />
      <Navbar />
      <main>
        <Container>
          <div className="grid grid-cols-2 gap-8 my-12 md:my-24">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-start items-start space-y-2">
              <p className="text-2xl tracking-wide font-guthen">
                Our community
              </p>
              <h1 className="text-6xl md:text-7xl font-chedros">
                JOIN OTHER BUILDERS ON THE{" "}
                <span>
                  <svg
                    className="w-14 mx-2 h-auto inline drop-shadow-xl"
                    viewBox="0 0 467 449"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="259.5"
                      cy="241.5"
                      r="207.5"
                      fill="url(#paint0_radial_280_914)"
                    />
                    <g filter="url(#filter0_i_280_914)">
                      <path
                        d="M84.8949 258.262V55.0123V50.9546L81.4256 48.8721L10.7839 6.47259L0 0V12.6126V441.846V449H7.12666H77.7682H84.8949V441.846V356.59L156.066 446.303L158.206 449H161.641H252.873H260V441.846V436.903V434.309L258.342 432.317L152.896 305.63L252.783 193.198L254.59 191.163V188.437V183.494V176.341H247.464H159.167H155.922L153.791 178.798L84.8949 258.262Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_280_914"
                        x="0"
                        y="0"
                        width="260"
                        height="449"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="15" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0.235294 0 0 0 0.85 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_280_914"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_280_914"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(167.278 133.907) rotate(59.144) scale(350.259)"
                      >
                        <stop stopColor="#FFBB94" />
                        <stop offset="0.229167" stopColor="#FF7629" />
                        <stop offset="0.723958" stopColor="#FF5EBF" />
                        <stop offset="1" stopColor="#C479FF" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>{" "}
                KREATIVE HORIZON{" "}
                <span>
                  <DiscordLogo
                    size={58}
                    className="inline drop-shadow-xl text-blue-600"
                  />
                </span>{" "}
                DISCORD
              </h1>
              <p className="text-lg text-horizon-grey-600">
                We host our University Chapters, our hackathons and events, and
                Horizon Labs right on our Discord. By joining, you&apos;ll be
                able to stay up to date and informed on everything Kreative
                Horizon and our builders are doing. What are you waiting for?
                We&apos;ll see you on the other side!
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="p-8 bg-horizon-grey-100 rounded-2xl border border-horizon-grey-300">
                <CommunityForm />
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-12 mb-24">
          <LogoCloud6 />
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
