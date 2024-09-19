import { groq } from "next-sanity";
import sanityClient from "./sanityClient";
import StudentReview from "../types/StudentReview";

const getStudentReviews = async (amount?: number): Promise<StudentReview[]> => {
  let studentReviews: StudentReview[];

  try {
    if (amount) {
      const top = amount - 1 || 6;
      studentReviews = await sanityClient.fetch(
        groq`*[ _type == "testimonial" && type == "student" ] | order(_createdAt asc)[0..${top}]{
          _id,
          _createdAt,
          fullName,
          organization,
          position,
          rating,
          testimonial,
          highlight,
        }
        `
      );
    } else {
      studentReviews = await sanityClient.fetch(
        groq`*[ _type == "testimonial" && type == "student" ]{
        _id,
        _createdAt,
        fullName,
        organization,
        position,
        rating,
        "photo": photo.asset->url,
        "avatar": avatar.asset->url,
        testimonial,
        highlight,
      }
      `
      );
    }
    return studentReviews;
  } catch (error) {
    console.error('Error fetching student reviews:', error);
    return [];
  }
};

export default getStudentReviews;