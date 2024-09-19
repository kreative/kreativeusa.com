import "@/styles/globals.css";
import "@/styles/badges.css";
import Script from "next/script";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { DefaultSeo } from "next-seo";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// custom craftwork sans font loading locally
const craftworkSans = localFont({
  src: [
    {
      path: "../public/fonts/CraftworkSans/Regular/CraftworkSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Regular/CraftworkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Regular/CraftworkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Bold/CraftworkSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Bold/CraftworkSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CraftworkSans/Bold/CraftworkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-craftworksans",
});

const guthenBloots = localFont({
  src: [
    {
      path: "../public/fonts/GuthenBloots/Guthen Bloots Personal Use.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GuthenBloots/Guthen Bloots Personal Use.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GuthenBloots/Guthen Bloots Personal Use.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-guthenbloots",
});

const chedros = localFont({
  src: [
    {
      path: "../public/fonts/Chedros/CHEDROS Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Chedros/CHEDROS Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Chedros/CHEDROS Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-chedros",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://kreativehorizon.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div
      className={`${craftworkSans.variable} ${guthenBloots.variable} ${chedros.variable}`}
    >
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | Kreative Horizon"
        defaultTitle="Kreative Horizon"
        description="We're on a mission of providing students the tools and resources to build the future of tomorrow, today so we can see the world for what it could be. Hackathons, workshops, and more."
        canonical={canonicalUrl}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "icon",
            href: "/favicon-32x32.png",
            sizes: "32x32",
          },
          {
            rel: "icon",
            href: "/favicon-16x16.png",
            sizes: "16x16",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#ff5156",
          },
        ]}
        additionalMetaTags={[
          {
            name: "ms-application-TileColor",
            content: "#ff5156",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
        openGraph={{
          url: "https://kreativehorizon.com/",
          title: "Kreative Horizon",
          description:
            "We're on a mission of providing students the tools and resources to build the future of tomorrow, today so we can see the world for what it could be. Hackathons, workshops, and more.",
          images: [
            {
              url: "/images/horizon-retro-logo.png",
              width: 700,
              height: 700,
              alt: "Kreative Horizon Retro Logo",
            },
          ],
        }}
        twitter={{
          handle: "@kreativehorizon",
          site: "@kreativehorizon",
          cardType: "summary_large_image",
        }}
      />

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="ga4" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <Component {...pageProps} />
      <ToastContainer
        transition={Slide}
        position="bottom-left"
        autoClose={5000}
        closeOnClick
        theme="colored"
      />
    </div>
  );
}
