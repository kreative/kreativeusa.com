import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getStudentReviews from "@/lib/getStudentReviews";
import StudentReview from "@/types/StudentReview";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import LogoCloud6 from "../components/LogoCloud6";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import { CldImage } from "next-cloudinary";

export default function StudentReviews({
  reviews1,
  reviews2,
  reviews3,
}: {
  reviews1: StudentReview[];
  reviews2: StudentReview[];
  reviews3: StudentReview[];
}) {
  return (
    <div>
      <NextSeo
        title="Student Reviews"
        description="Hear what our students and builders say about Kreative Horizon and our events."
      />
      <Navbar />
      <main>
        <Container>
          <div className="flex flex-col justify-start items-center rounded-[30px] bg-horizon-grey-200 pt-20 mt-8 mb-16 sm:mb-24 md:mb-44">
            <div className="px-6 xs:px-12 md:px-20 lg:px-24 flex flex-col justify-start items-center">
              <p className="text-2xl font-guthen tracking-wide pb-2">
                Student <span className="ml-2">Reviews</span>
              </p>
              <h1 className="text-center pb-8 text-5xl sm:text-6xl font-chedros">
                Hear what our students and builders say about kreative horizon
              </h1>
            </div>
            <CldImage
              width="2165"
              height="736"
              className="h-auto w-[95%] -mb-16 sm:-mb-24 md:-mb-44 hidden sm:block"
              src="kreativehorizon.com/reviews/reviews-photo_i0lkak"
              alt="Kreative Horizon 3D logo in Color"
            />
            <CldImage
              width="1330"
              height="639"
              src="kreativehorizon.com/reviews/student-reviews-photo-group-mobile_rbiemt"
              alt="Kreative Horizon 3D logo in Color for Mobile"
              className="h-auto w-full -mb-16 sm:-mb-24 md:-mb-44 block sm:hidden"
            />
          </div>
        </Container>
        <Container>
          <div className="py-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-start items-start space-y-4">
              {reviews1.map((review) => (
                <div key={review._id} className="w-full">
                  <TestimonialCard review={review} />
                </div>
              ))}
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-start items-start space-y-4">
              {reviews2.map((review) => (
                <div key={review._id} className="w-full">
                  <TestimonialCard review={review} />
                </div>
              ))}
            </div>
            <div className="col-span-2 md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0 md:grid-cols-none md:flex flex-col justify-start items-start md:space-y-4">
              {reviews3.map((review) => (
                <div key={review._id} className="w-full">
                  <TestimonialCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="pt-12 pb-24">
          <LogoCloud6 />
        </div>
      </main>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}

export async function getStaticProps() {
  const studentReviews: StudentReview[] = await getStudentReviews();

  const totalReviews = studentReviews.length;

  const reviews1 = studentReviews.slice(0, Math.floor(totalReviews / 3));
  const reviews2 = studentReviews.slice(
    Math.floor(totalReviews / 3),
    Math.floor((totalReviews / 3) * 2)
  );
  const reviews3 = studentReviews.slice(
    Math.floor((totalReviews / 3) * 2),
    totalReviews
  );

  return {
    props: {
      reviews1,
      reviews2,
      reviews3,
    },
  };
}
