import Image from "next/image";
import Container from "./Container";

export default function LogoCloud1() {
  const LogoImage = ({ src, alt, w, h }: { src: string; alt: string, w: string, h: string }) => {
    return (
      <Image
        src={src}
        alt={alt}
        width={parseInt(w)}
        height={parseInt(h)}
        className="mr-0 w-1/4 sm:w-1/6 h-auto p-0 md:p-2"
      />
    );
  };

  return (
    <Container>
      <p className="text-2xl tracking-wide font-guthen text-horizon-grey-600 text-center mb-6">
        Trusted by sponsors big and small
      </p>
      <div className="flex flex-wrap space-x-4 sm:space-x-6 space-y-4 md:space-y-0 justify-center items-center">
        <Image
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/1PASSWORD_kqtllc.webp"
          }
          alt="1Password Logo in Color"
          width="304"
          height="64"
          className="-mb-4 sm:mr-0 w-1/4 sm:w-1/6 h-auto p-0 md:p-2"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/WOLFRAM_LANGUAGE_ehmj6t.webp"
          }
          alt="Wolfram Language Logo in Color"
          w="244"
          h="99"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1690764265/kreativehorizon.com/sponsors/Color-ISURP-Logo_2022-1_xg70hq.webp"
          }
          alt="Iowa State University Research Park Logo in Color"
          w="818"
          h="199"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/TECHNEXUS_gwqk9q.webp"
          }
          alt="Technexus Logo in Color"
          w="259"
          h="72"
        />
        <Image
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/JETBRAINS_ljme47.webp"
          }
          alt="JetBrains Logo in Color"
          className="mr-4 sm:mr-0 w-[8%] sm:w-[6%] md:w-[5%] h-auto"
          width="96"
          height="96"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/LINODE_calb1c.webp"
          }
          alt="Linode Logo in Color"
          w="329"
          h="85"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/PUSHER_bvjime.webp"
          }
          alt="Pusher Logo in Color"
          w="625"
          h="190"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/MORNINGSTAR_mrz9n3.webp"
          }
          alt="Morningstar Logo in Color"
          w="611"
          h="176"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/BALSAMIQ_fhtvid.webp"
          }
          alt="Balsamiq Logo in Color"
          w="507"
          h="134"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/MICROSOFT_snwyb4.webp"
          }
          alt="Microsoft Logo in Color"
          w="785"
          h="170"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/IVY_COLLEGE_jurgig.webp"
          }
          alt="Ivy College of Business Start Something Logo in Color"
          w="186"
          h="47"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1690764264/kreativehorizon.com/sponsors/Visionary-4PMS-2.75IN_fgsaxz.webp"
          }
          alt="Visionary Media Logo in Color"
          w="818"
          h="199"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1689576316/kreativehorizon.com/sponsors/AMBIDEXTER_ocblfh.webp"
          }
          alt="Ambidexter Logo in Color"
          w="316"
          h="55"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1692329529/kreativehorizon.com/sponsors/Zirous_Logo_1_._jaucdm.webp"
          }
          alt="Maple Studios Logo in Color"
          w="555"
          h="148"
        />
        <LogoImage
          src={
            "https://res.cloudinary.com/dlazo25rt/image/upload/v1695406069/kreativehorizon.com/sponsors/roboflow_dtyfpc.webp"
          }
          alt="Roboflow Logo in Color"
          w="2707"
          h="613"
        />
      </div>
    </Container>
  );
}
