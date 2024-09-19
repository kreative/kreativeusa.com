import Image from "next/image";
import Container from "./Container";

export default function LogoCloud6() {
  return (
    <Container>
      <div className="grid grid-cols-12 xl:gap-8">
        <div className="col-span-12 pb-4 xl:p-0 xl:col-span-4">
          <p className="text-center xl:text-left text-2xl text-horizon-grey-600 mb-6 xl:m-0">
            Trusted by innovative students at these schools
          </p>
        </div>
        <div className="col-span-12 xl:col-span-8 flex flex-wrap sm:space-x-6 space-y-3 sm:space-y-0 justify-center xl:justify-end items-baseline sm:items-center">
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576784/kreativehorizon.com/universities/uillinois_j5lxm9.webp"}
            alt="University of Illinois Logo in Color"
            width="800"
            height="209"
            className="mr-4 sm:mr-0 w-[40%] sm:w-1/5 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576784/kreativehorizon.com/universities/uic_whymrx.webp"}
            alt="University of Illinois at Chicago Logo in Color"
            width="865"
            height="169"
            className="mr-4 sm:mr-0 w-[40%] sm:w-1/5 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576784/kreativehorizon.com/universities/iowastate_ansvbr.webp"}
            alt="Iowa State University Logo in Color"
            width="3840"
            height="1239"
            className="mr-4 sm:mr-0 w-[40%] sm:w-1/5 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576784/kreativehorizon.com/universities/northwestern_g5769c.webp"}
            alt="Northwestern University Logo in Color"
            width="820"
            height="200"
            className="mr-4 sm:mr-0 w-[40%] sm:w-1/5 h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
