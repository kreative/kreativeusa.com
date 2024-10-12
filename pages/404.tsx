import Container from "../components/Container";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <div>
      <NextSeo title="404 Not Found" />
        <Container>
          404
        </Container>
      <DreamflowBadge />
    </div>
  );
}
