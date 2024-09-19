import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import EventCardType from "../types/EventCard";

const getEvents = async (): Promise<EventCardType[]> => {
  try {
    // Fetch the StudentReviews using the defined query
    const events = await sanityClient.fetch(
      groq`*[ _type == "event" ] | order(start_datetime asc) {
        _id,
        _createdAt,
        title,
        tagline,
        season,
        year,
        start_datetime,
        end_datetime,
        date_label,
        location_nickname,
        city,
        state,
        slug,
        cld_id,
        alt,
        organizer->{
          name,
          logo
        },
      }
      `
    );
    console.log(events)
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export default getEvents;