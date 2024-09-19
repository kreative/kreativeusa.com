import { groq } from "next-sanity";
import sanityClient from "./sanityClient";

const getEventDetails = async (slug: string): Promise<any[]> => {
  try {
    // Fetch the StudentReviews using the defined query
    const event = await sanityClient.fetch(
      groq`*[ _type == "event" && slug == "${slug}"] {
        _id,
        _createdAt,
        title,
        tagline,
        season->{
          number,
          sponsors[]->,
        },
        year,
        start_datetime,
        end_datetime,
        date_top_label,
        date_bottom_label,
        registration_opens_date,
        registration_opens_date_label,
        registration_closes_date,
        timezone,
        date_label,
        location,
        address,
        city,
        state,
        zip,
        country,
        google_maps_link,
        subheadline,
        description,
        faqs[]->,
        reasons_to_attend[]->,
        testimonial_ref->,
        schedule_headline,
        schedule_days_num,
        day_one_title,
        day_one_items,
        day_two_title,
        day_two_items,
        judges_headline,
        judges[]->,
        conclusion_headline,
        conclusion_description,
        slug,
        seo_title,
        seo_description,
        page_cld_id,
        page_alt,
        cld_id,
        alt,
        event_sponsors[]->,
        typeform_id,
        organizer->{
          name,
          logo
        },
      }`
    );
    return event;
  } catch (error) {
    console.error('Error fetching event:', error);
    return [];
  }
};

export default getEventDetails;
