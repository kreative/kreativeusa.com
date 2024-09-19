import Container from "../../components/Container";
import SplashContainer from "@/components/SplashContainer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DreamflowBadge from "@/components/DreamflowBadge";
import NeedHelpCTA from "@/components/NeedHelpCTA";
import { NextSeo } from "next-seo";

export default function CookiesPolicy() {
  return (
    <div>
      <NextSeo
        title="Cookies Policy | Policies"
        description="Review Kreative Horizon's cookies policy and other digital policies."
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
                  Cookies Policy
                </h1>
              </div>
            </Container>
          </div>
        </SplashContainer>
        <Container>
          <div className="pt-12 max-w-full lg:max-w-[75%] mx-auto">
            <p className="text-xl pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              morbi tincidunt augue interdum velit. Pellentesque habitant morbi
              tristique senectus et netus. Vitae elementum curabitur vitae nunc.
              Non quam lacus suspendisse faucibus interdum. Tincidunt lobortis
              feugiat vivamus at augue eget arcu dictum varius. Sem viverra
              aliquet eget sit amet tellus cras. Lectus urna duis convallis
              convallis tellus id interdum velit. Quisque egestas diam in arcu
              cursus euismod quis. Ornare arcu dui vivamus arcu felis bibendum.
            </p>
            <p className="text-xl py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              morbi tincidunt augue interdum velit. Pellentesque habitant morbi
              tristique senectus et netus. Vitae elementum curabitur vitae nunc.
              Non quam lacus suspendisse faucibus interdum. Tincidunt lobortis
              feugiat vivamus at augue eget arcu dictum varius. Sem viverra
              aliquet eget sit amet tellus cras. Lectus urna duis convallis
              convallis tellus id interdum velit. Quisque egestas diam in arcu
              cursus euismod quis. Ornare arcu dui vivamus arcu felis bibendum.
            </p>
            <p className="text-xl py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              morbi tincidunt augue interdum velit. Pellentesque habitant morbi
              tristique senectus et netus. Vitae elementum curabitur vitae nunc.
              Non quam lacus suspendisse faucibus interdum. Tincidunt lobortis
              feugiat vivamus at augue eget arcu dictum varius. Sem viverra
              aliquet eget sit amet tellus cras. Lectus urna duis convallis
              convallis tellus id interdum velit. Quisque egestas diam in arcu
              cursus euismod quis. Ornare arcu dui vivamus arcu felis bibendum.
            </p>
            <p className="text-xl py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              morbi tincidunt augue interdum velit. Pellentesque habitant morbi
              tristique senectus et netus. Vitae elementum curabitur vitae nunc.
              Non quam lacus suspendisse faucibus interdum. Tincidunt lobortis
              feugiat vivamus at augue eget arcu dictum varius. Sem viverra
              aliquet eget sit amet tellus cras. Lectus urna duis convallis
              convallis tellus id interdum velit. Quisque egestas diam in arcu
              cursus euismod quis. Ornare arcu dui vivamus arcu felis bibendum.
            </p>
            <p className="text-xl pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              morbi tincidunt augue interdum velit. Pellentesque habitant morbi
              tristique senectus et netus. Vitae elementum curabitur vitae nunc.
              Non quam lacus suspendisse faucibus interdum. Tincidunt lobortis
              feugiat vivamus at augue eget arcu dictum varius. Sem viverra
              aliquet eget sit amet tellus cras. Lectus urna duis convallis
              convallis tellus id interdum velit. Quisque egestas diam in arcu
              cursus euismod quis. Ornare arcu dui vivamus arcu felis bibendum.
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
