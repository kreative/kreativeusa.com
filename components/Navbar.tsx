import Link from "next/link";
import Container from "./Container";
import NavMenu from "./NavMenu";
import PopupMenu from "./PopupMenu";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className={"sticky top-0 pt-1 z-50"}>
      <Container>
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm border border-horizon-grey-200 drop-shadow-md py-1.5 px-2 my-3 rounded-[10px] flex items-center justify-between min-[870px]:justify-center space-x-6 w-full min-[870px]:w-auto">
            <Link href="/" aria-label={"Home page"}>
              <svg
                className="h-10 w-auto drop-shadow-md"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="72"
                  height="72"
                  rx="15"
                  fill="url(#paint0_linear_1314_2)"
                />
                <g filter="url(#filter0_d_1314_2)">
                  <path
                    d="M39.6043 59.7231C50.7717 59.7231 59.8246 50.626 59.8246 39.404C59.8246 28.1821 50.7717 19.085 39.6043 19.085C28.4369 19.085 19.3839 28.1821 19.3839 39.404C19.3839 50.626 28.4369 59.7231 39.6043 59.7231Z"
                    fill="url(#paint1_linear_1314_2)"
                  />
                  <path
                    d="M59.5746 39.404C59.5746 50.489 50.6324 59.4731 39.6043 59.4731C28.5761 59.4731 19.6339 50.489 19.6339 39.404C19.6339 28.319 28.5761 19.335 39.6043 19.335C50.6324 19.335 59.5746 28.319 59.5746 39.404Z"
                    stroke="white"
                    strokeOpacity="0.75"
                    strokeWidth="0.5"
                  />
                </g>
                <g filter="url(#filter1_i_1314_2)">
                  <path
                    d="M21.6542 40.0849V18.3429V17.9088L21.2835 17.6861L13.7348 13.1505L12.5825 12.4581V13.8073V59.7232V60.4885H13.344H20.8927H21.6542V59.7232V50.6032L29.2595 60.2L29.4882 60.4885H29.8552H39.6042H40.3658V59.7232V59.1944V58.917L40.1886 58.7039L28.9208 45.1519L39.5945 33.1249L39.7877 32.9072V32.6155V32.0869V31.3216H39.0261H29.5908H29.2441L29.0164 31.5845L21.6542 40.0849Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1314_2"
                    x="7.38391"
                    y="7.08496"
                    width="64.4407"
                    height="64.6382"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1314_2"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1314_2"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_1314_2"
                    x="12.5825"
                    y="12.4581"
                    width="27.7833"
                    height="48.0304"
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
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.407843 0 0 0 0 0.235294 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1314_2"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1314_2"
                    x1="36"
                    y1="0"
                    x2="36"
                    y2="72"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF900E" />
                    <stop offset="0.484375" stopColor="#FF0E9F" />
                    <stop offset="1" stopColor="#950EFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1314_2"
                    x1="39.5743"
                    y1="12.6998"
                    x2="39.5743"
                    y2="70.6393"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF0E9F" />
                    <stop offset="1" stopColor="#FF900E" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div className="hidden min-[870px]:block">
              <NavMenu />
            </div>

            <div className="flex items-center space-x-3 justify-end">
              <motion.div
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href="/get-involved"
                  className="py-2 px-5 bg-gradient-to-r from-horizon-orange via-horizon-pink to-horizon-purple text-white rounded-md drop-shadow-md"
                >
                  Get involved
                </Link>
              </motion.div>
              <div className="block min-[870px]:hidden pr-2">
                <PopupMenu />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
