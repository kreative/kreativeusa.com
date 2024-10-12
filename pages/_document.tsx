// @ts-nocheck

import { Html, Main, NextScript, Head } from "next/document";

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
                src="https://plausible-analytics-ce-production-a0f7.up.railway.app/js/script.tagged-events.js"
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
