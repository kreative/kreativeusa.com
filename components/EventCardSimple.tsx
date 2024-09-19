import { CldImage } from "next-cloudinary";

export default function EventCardSimple({
  cldSrc,
  alt,
  tagline,
}: {
  cldSrc: string;
  alt: string;
  tagline: string;
}) {
  return (
    <div>
      <CldImage
        src={cldSrc}
        alt={alt}
        className="w-full h-auto"
        width="760"
        height="460"
      />
      <p className="text-xl text-horizon-grey-700 mt-4">{tagline}</p>
    </div>
  );
}
