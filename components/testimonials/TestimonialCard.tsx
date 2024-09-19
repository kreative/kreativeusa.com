import StudentReview from "@/types/StudentReview";
import Star from "@/components/Star";
import { CldImage } from "next-cloudinary";

export default function TestimonialCard({ review }: { review: StudentReview }) {
  const splitWords = review.testimonial.split(review.highlight);
  const firstPart = splitWords[0];
  const secondPart = splitWords[1];

  return (
    <div className="px-8 py-10 rounded-2xl bg-horizon-grey-100 flex flex-col space-y-3 justify-start items-start">
      <div className="flex justify-start items-center space-x-2">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-lg">
        <span>{firstPart}</span>
        <span className="font-bold text-horizon-purple">
          {review.highlight}
        </span>
        <span>{secondPart}</span>
      </p>
      <div>
        {/* <p className="text-2xl font-chedros text-horizon-purple">
          {review.fullName}
        </p>
        <p className="text-[1.40rem] font-chedros text-horizon-grey-600">
          {review.organization}
        </p> */}
        <div className="grid grid-cols-8 gap-4 pt-6">
          <div className="col-span-6">
            <p className="text-md font-bold text-horizon-purple">
              {review.fullName}
            </p>
            <p className="text-md">{review.position}</p>
          </div>
          <div className="col-span-2 flex justify-end items-center">
            {review.organization === "Iowa State University" && (
              <CldImage
                src="kreativehorizon.com/universities/2560px-Iowa_State_Cyclones_logo.svg_clwiic"
                alt="Iowa State University Logo in Black"
                className="w-28 h-auto"
                width={650}
                height={210}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
