// @ts-nocheck

import { Html, Main, NextScript, Head } from "next/document";
import { ANALYTICS_URL } from "@/lib/constants";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {typeof window !== "undefined" &&
          window.location.hostname === "johnschmidt.de" && (
            <div>
              <script
                defer
                data-domain="kreativeusa.com"
                src={ANALYTICS_URL}
              ></script>
              <script>
                window.plausible = window.plausible || function(){" "}
                {(window.plausible.q = window.plausible.q || []).push(
                  arguments
                )}
              </script>
            </div>
          )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
