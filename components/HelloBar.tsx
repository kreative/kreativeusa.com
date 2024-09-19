import Link from "next/link"
import Marquee from "react-fast-marquee";

export default function HelloBar({
  headline,
  link,
}: {
  headline: string;
  link: string;
}) {
  return (
    <div className="bg-horizon-grey-800 py-1">
      <Marquee speed={25} autoFill pauseOnHover direction="right">
        <div className="px-6 md:px-10">
          <Link href={link} className="text-white text-sm font-mono hover:underline italic">
            {headline}
          </Link>
        </div>
      </Marquee>
    </div>
  );
}
