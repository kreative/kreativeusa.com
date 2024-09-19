import { useRouter } from "next/router";
import { Widget } from "@typeform/embed-react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeagueBadge from "@/components/LeagueBadge";
import { NextSeo } from "next-seo";

export default function CompleteApp() {
  const router = useRouter();

  return (
    <div>
      {router.query.form_id && (
        <div>
          <NextSeo title="Complete Your Application" />
          <Navbar />
          <main>
            <Container>
              <div className="text-center pt-4 md:pt-8 pb-12">
                <h1 className="text-4xl md:text-5xl font-chedros">
                  Finish your application to secure your spot!
                </h1>
                <p className="text-lg md:text-xl text-horizon-grey-700 pb-6">
                  We promise it&apos;ll only take{" "}
                  <span className="font-bold">2 minutes</span> (or we&apos;ll
                  buy you dinner!)
                </p>
                <div className="bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple p-1.5 rounded-[12px]">
                  <div className="bg-white rounded-[10px]">
                    <Widget
                      id={router.query.form_id!.toString()}
                      style={{ width: "100%", height: "60vh" }}
                      inlineOnMobile={true}
                      transitiveSearchParams={["email"]}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </main>
          <Footer />
          <LeagueBadge />
        </div>
      )}
    </div>
  );
}
