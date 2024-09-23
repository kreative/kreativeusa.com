import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Home"
        description="Radical starts here."
      />
      <Navbar activeLink="home" />
      <div className="min-h-[100vh]">
        <Container className="font-departureMono">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Platea parturient
          morbi dis aenean porttitor. Dui tellus dictumst consequat id maximus
          varius lacus vivamus aliquet. Sollicitudin fusce nostra amet habitasse
          himenaeos parturient nec facilisi magna. Phasellus cras morbi feugiat;
          aptent tristique sociosqu. Penatibus aliquet elit nostra dolor gravida
          posuere. Viverra luctus tristique lectus pulvinar vestibulum ex nunc.
          Eget congue amet magna suspendisse egestas venenatis cursus facilisi.
          Lorem litora euismod eget facilisis commodo. Elit eu pretium
          pellentesque class bibendum. Turpis pretium aliquam aenean eleifend
          faucibus auctor primis. Nunc ac sodales dignissim lectus nec metus
          nisl morbi. Senectus vehicula orci fermentum, torquent curae mauris.
          Augue elementum odio condimentum curabitur hac nam metus. Vitae montes
          efficitur ante sapien integer donec phasellus. Purus interdum luctus
          potenti sociosqu quam sit. Mus potenti libero consectetur suscipit
          porttitor quis natoque neque. Efficitur diam duis magnis congue
          sagittis vestibulum ad placerat mauris. Neque quisque aliquam dapibus
          nostra primis libero ut. Bibendum odio malesuada; primis dui nostra
          quisque aenean. Commodo litora id lacus duis sapien ligula hac.
          Bibendum posuere porta vel tellus finibus dictum vitae maximus.
          Dapibus ipsum quam massa pretium feugiat dis penatibus lectus aenean.
          Ante consectetur est cubilia ad amet ex ad hendrerit. Porta duis
          pretium maecenas tristique maximus mattis adipiscing orci pharetra.
          Malesuada fusce urna senectus vehicula metus sed. Donec vestibulum
          nisl cursus quisque habitant donec potenti efficitur scelerisque.
          Placerat tincidunt morbi cubilia sociosqu tortor. Varius habitant
          ultrices amet litora suspendisse fermentum nisi habitasse. Rutrum
          suscipit urna ligula eros fames egestas. Per porttitor dictum nostra
          bibendum nascetur non platea augue. Aliquet dis nascetur eros at
          litora porta aptent. Fames class netus dui volutpat suspendisse
          iaculis laoreet. Venenatis quam morbi primis duis, ut ad. Turpis ac
          mattis fames magnis sit ornare habitant. Aliquet inceptos semper
          potenti; nisl tristique euismod. Potenti eu convallis tellus luctus
          euismod eget hac. Mus felis augue accumsan hac feugiat facilisis.
          Fermentum ullamcorper semper curabitur ridiculus porttitor nec nunc?
          Donec imperdiet scelerisque torquent, eros bibendum consequat ipsum.
          Nullam purus libero nullam, morbi mi phasellus.
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // const events: EventCardType[] = await getLatestEvents();

  return {
    props: {},
  };
}
