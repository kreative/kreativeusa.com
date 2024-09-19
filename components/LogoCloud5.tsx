
import Image from "next/image";
import Container from "./Container";

export default function LogoCloud5() {
  return (
    <Container>
      <div className="grid grid-cols-12 xl:gap-8">
        <div className="col-span-12 pb-4 xl:p-0 xl:col-span-4">
          <p className="text-center xl:text-left text-2xl text-horizon-grey-600">
            Trusted by the world&apos;s most mission driven companies
          </p>
        </div>
        <div className="col-span-12 xl:col-span-8 flex flex-wrap sm:space-x-6 space-y-3 sm:space-y-0 justify-center xl:justify-end items-baseline sm:items-center">
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/PUSHER_bvjime.webp"}
            alt="Pusher Logo in Color"
            width="625"
            height="190"
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/MORNINGSTAR_mrz9n3.webp"}
            alt="Morningstar Logo in Color"
            width="611"
            height="176"
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/BALSAMIQ_fhtvid.webp"}
            alt="Balsamiq Logo in Color"
            width="507"
            height="134"
            className="w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/MICROSOFT_snwyb4.webp"}
            alt="Microsoft Logo in Color"
            width="785"
            height="170"
            className="mr-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto"
          />
          <Image
            src={"https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/IVY_COLLEGE_jurgig.webp"}
            alt="Ivy College of Business Start Something Logo in Color"
            width="186"
            height="47"
            className="w-1/4 sm:w-1/6 h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
