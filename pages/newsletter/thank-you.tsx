import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DreamflowBadge from '@/components/DreamflowBadge';
import { NextSeo } from 'next-seo';
import {motion} from "framer-motion";
import Link from "next/link";

export default function CompleteApp() {
  return (
    <div>
      <NextSeo title="Thank You For Subscribing!" />
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 min-h-[80vh] pb-24">
            <svg
              className="h-16 w-auto mb-6"
              viewBox="0 0 468 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M123.468 0.951924C128.728 0.951924 132.055 5.21291 130.931 10.4712C130.482 12.783 129.223 14.8681 127.559 16.5C128.548 18.1319 128.908 20.217 128.414 22.5288C127.29 27.7871 122.164 32.0481 116.904 32.0481H104L110.519 0.951924C110.519 0.951924 120.231 0.951924 123.468 0.951924ZM121.31 22.5288C121.58 21.169 120.77 20.0357 119.421 20.0357C117.983 20.0357 113.577 20.0357 113.577 20.0357L112.542 24.9313C112.542 24.9313 116.949 24.9313 118.387 24.9313C119.736 24.9313 121.04 23.8434 121.31 22.5288ZM123.873 10.4712C124.142 9.15659 123.288 8.06868 121.984 8.06868C120.501 8.06868 116.094 8.06868 116.094 8.06868L115.06 12.919C115.06 12.919 119.466 12.919 120.95 12.919C122.254 12.919 123.558 11.831 123.873 10.4712Z"
                fill="black"
              />
              <path
                d="M152.783 8.06868H142.307L141.273 13.0549H149.815L148.376 19.9451H139.789L138.755 24.9313H149.231L147.747 32.0481H130.212L136.732 0.951924H154.311L152.783 8.06868Z"
                fill="black"
              />
              <path
                d="M176.547 0L182.212 3.08242L167.96 23.7074L166.206 32.0481H159.147L160.901 23.7074L155.371 3.08242L162.339 0L166.341 14.7321L176.547 0Z"
                fill="black"
              />
              <path
                d="M200.139 0C209.176 0 214.976 7.38874 213.043 16.5C211.109 25.6113 202.207 33 193.17 33C184.178 33 178.378 25.6113 180.311 16.5C182.2 7.38874 191.147 0 200.139 0ZM205.579 16.5C206.613 11.5591 203.556 7.11676 198.655 7.11676C193.755 7.11676 188.809 11.5591 187.775 16.5C186.741 21.4409 189.798 25.9286 194.699 25.9286C199.599 25.9286 204.5 21.4409 205.579 16.5Z"
                fill="black"
              />
              <path
                d="M236.399 0.906595H243.413L236.848 32.0481H229.79L223.675 15.1401L220.078 32.0481H213.064L219.584 0.951924H226.642L232.802 17.9052L236.399 0.906595Z"
                fill="black"
              />
              <path
                d="M257.838 0.951924C266.335 0.951924 271.82 7.93269 269.977 16.5C268.179 25.0673 259.771 32.0481 251.273 32.0481C248.801 32.0481 241.472 32.0481 241.472 32.0481L247.991 0.951924C247.991 0.951924 255.365 0.951924 257.838 0.951924ZM262.918 16.5C263.907 11.831 260.94 8.06868 256.354 8.06868C255.635 8.06868 253.566 8.06868 253.566 8.06868L250.015 24.9313C250.015 24.9313 252.083 24.9313 252.757 24.9313C257.388 24.9313 261.974 21.169 262.918 16.5Z"
                fill="black"
              />
              <path
                d="M290.355 0.951924H314.588L313.15 7.61539H304.562L299.437 32.0481H292.378L297.503 7.61539H288.916L290.355 0.951924Z"
                fill="black"
              />
              <path
                d="M333.784 0.951924H340.843L334.279 32.0027H327.22L329.828 19.8091H320.071L317.463 32.0027H310.45L316.969 0.951924H324.028L321.465 13.1003H331.221L333.784 0.951924Z"
                fill="black"
              />
              <path
                d="M361.471 8.06868H350.996L349.961 13.0549H358.504L357.065 19.9451H348.478L347.444 24.9313H357.919L356.436 32.0481H338.901L345.42 0.951924H363L361.471 8.06868Z"
                fill="black"
              />
              <path
                d="M57.6919 55.4234H75.144L58.9147 131.812H41.4626L47.9099 101.814H23.7882L17.3409 131.812H0L16.1182 55.4234H33.5703L27.2341 85.3097H51.3558L57.6919 55.4234Z"
                fill="url(#paint0_linear_1413_7)"
              />
              <path
                d="M124.145 53.0816C146.488 53.0816 160.827 71.2587 156.047 93.6734C151.268 116.088 129.258 134.265 106.915 134.265C84.6829 134.265 70.3433 116.088 75.1232 93.6734C79.7919 71.2587 101.913 53.0816 124.145 53.0816ZM137.595 93.6734C140.152 81.5182 132.593 70.5896 120.476 70.5896C108.36 70.5896 96.1324 81.5182 93.5757 93.6734C91.019 105.829 98.5779 116.869 110.694 116.869C122.811 116.869 134.927 105.829 137.595 93.6734Z"
                fill="url(#paint1_linear_1413_7)"
              />
              <path
                d="M219.018 84.0831C217.239 92.4468 212.126 99.9183 205.456 105.16L213 131.5L195.007 131.923L188.004 112.631C186.781 112.743 185.559 112.854 184.336 112.854C182.669 112.854 177.555 112.854 177.555 112.854L173.442 131.923H156.101L172.219 55.4234C172.219 55.4234 190.45 55.4234 196.452 55.4234C212.348 55.4234 222.353 68.2478 219.018 84.0831ZM202.677 84.0831C204.011 77.9497 199.009 72.9315 192.784 72.9315C191.117 72.9315 186.003 72.9315 186.003 72.9315L181.223 95.3462C181.223 95.3462 186.337 95.3462 188.004 95.3462C194.229 95.3462 201.343 90.328 202.677 84.0831Z"
                fill="url(#paint2_linear_1413_7)"
              />
              <path
                d="M234.53 55.4234H251.982L235.753 131.923H218.412L234.53 55.4234Z"
                fill="url(#paint3_linear_1413_7)"
              />
              <path
                d="M314.652 55.4234L311.095 71.8163L269.744 115.085H301.98L298.423 131.923H244.511L248.068 115.085L289.975 71.8163H257.183L260.629 55.4234H314.652Z"
                fill="url(#paint4_linear_1413_7)"
              />
              <path
                d="M361.01 53.0816C383.354 53.0816 397.693 71.2587 392.913 93.6734C388.133 116.088 366.124 134.265 343.781 134.265C321.549 134.265 307.209 116.088 311.989 93.6734C316.658 71.2587 338.779 53.0816 361.01 53.0816ZM374.461 93.6734C377.018 81.5182 369.459 70.5896 357.342 70.5896C345.226 70.5896 332.998 81.5182 330.442 93.6734C327.885 105.829 335.444 116.869 347.56 116.869C359.677 116.869 371.793 105.829 374.461 93.6734Z"
                fill="url(#paint5_linear_1413_7)"
              />
              <path
                d="M450.659 55.3119H468L451.771 131.923H434.319L419.201 90.328L410.308 131.923H392.967L409.085 55.4234H426.537L441.766 97.1304L450.659 55.3119Z"
                fill="url(#paint6_linear_1413_7)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_1413_7"
                  x1="-1.70786e-06"
                  y1="87.8746"
                  x2="468"
                  y2="87.8746"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF900E" />
                  <stop offset="0.484375" stopColor="#FF0E9F" />
                  <stop offset="1" stopColor="#950EFF" />
                </linearGradient>
              </defs>
            </svg>

            <h1 className="text-6xl xs:text-7xl font-chedros text-center">
              Thank you so much for subscribing!
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-3 pt-3 sm:p-0">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 font-bold bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white"
                  href="/"
                >
                  Go back home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="rounded-md py-3.5 px-7 md:py-2.5 md:px-5 bg-opacity-0 bg-transparent text-horizon-grey-800"
                  href="/events"
                >
                  See events <span aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
