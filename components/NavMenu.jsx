import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu"; // skipcq: JS-C1003
import { useFloating } from "@floating-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

function MenuItem({ link, name, negativeSkew }) {
  return (
    <NavigationMenu.Item
      className={`transform transition duration-300 ease-in-out ${
        negativeSkew ? "hover:-skew-y-3" : "hover:skew-y-3"
      }`}
    >
      <NavigationMenu.Link asChild>
        <Link className="text-horizon-grey-700" href={link}>
          {name}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

export default function NavMenu() {
  const { refs, floatingStyles } = useFloating();

  return (
    <NavigationMenu.Root orientation="vertical">
      <NavigationMenu.List className="flex justify-center items-center space-x-5">
        <MenuItem link="/" name="Home" />
        <MenuItem link="/events" name="Events" />
        <MenuItem link="/about-us" name="About us" negativeSkew />
        <MenuItem link="/sponsors" name="Sponsors" />
        <MenuItem link="/reviews" name="Reviews" negativeSkew />
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            ref={refs.setReference}
            className="group select-none -mr-1"
          >
            <span className="flex items-center">
              <p className="mr-1 transform hover:-skew-y-3 transition duration-300 ease-in-out text-horizon-grey-700">
                Help Center
              </p>
              <CaretDown
                size={16}
                className="-mb-1 relative transition-transform duration-[100] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </span>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            ref={refs.setFloating}
            style={floatingStyles}
            className="absolute mt-5 w-full sm:w-auto bg-white bg-opacity-80 backdrop-blur-md py-2 px-2.5 rounded-lg shadow-lg z-10"
          >
            <motion.div
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <div className="py-2 px-3.5 rounded-lg hover:bg-white hover:bg-opacity-60">
                <Link href="/support" target="_blank" rel="noopener noreferrer">
                  <p className="text-md">Get support</p>
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <div className="py-2 px-3.5 rounded-lg hover:bg-white hover:bg-opacity-60">
                <Link href="/faqs">
                  <p className="text-md w-full">See FAQs</p>
                </Link>
              </div>
            </motion.div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <MenuItem link="/contact-us" name="Contact" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
