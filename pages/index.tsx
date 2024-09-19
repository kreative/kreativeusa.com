import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Home"
        description="Kreative Horizon aims to empower students with the resources and opportunities to learn, build, and grow through hackathons, workshops, and more."
      />
      <Container>
        Hi
      </Container>
      <DreamflowBadge />
    </div>
  );
}

export async function getStaticProps() {
  // const events: EventCardType[] = await getLatestEvents();

  return {
    props: {},
  };
}
