import Link from "next/link";
import EventCardType from "@/types/EventCard";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import convertStateCode from "@/lib/convertStateCode";

export default function EventCard({ event }: { event: EventCardType }) {
  return (
    <div>
      <Link href={`/events/${event.slug}`}>
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
          className="p-4 border border-horizon-grey-300 rounded-2xl drop-shadow-2xl flex flex-col items-stretch"
        >
          <div>
            <CldImage
              src={`kreativehorizon.com/events/${event.cld_id}`}
              alt={event.alt}
              className="w-full h-auto"
              width="760"
              height="460"
            />
            <h3 className="text-4xl md:text-5xl lg:text-4xl font-chedros mt-6 mb-2">
              {event.title}
            </h3>
            <div className="flex justify-start items-center mb-3">
              <CldImage
                src={`kreativehorizon.com/organizers/${event.organizer.logo}`}
                alt={`${event.organizer.name} logo for the organizer of ${event.title} event`}
                className="w-10 sm:w-7 h-auto rounded-full border border-horizon-grey-400"
                width="222"
                height="222"
              />
              <p className="text-xl sm:text-lg ml-2 text-horizon-grey-700">{`by ${event.organizer.name}`}</p>
            </div>
            <p className="text-2xl sm:text-xl text-horizon-grey-800">
              {event.tagline}
            </p>
          </div>
          <p className="text-xl mt-4">
            <span className="font-bold">{event.date_label}</span> @{" "}
            {event.location_nickname}
          </p>
          <p className="text-horizon-purple text-xl sm:text-base">{`in ${event.city}, ${convertStateCode(event.state)}`}</p>
        </motion.div>
      </Link>
    </div>
  );
}
