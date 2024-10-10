import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <Image
        src="/images/edgy-kreative-logo.png"
        alt="Edgy Kreative Logo in black"
        className="w-full h-auto absolute bottom-0"
        width={1000}
        height={300}
      />
    </div>
  )
}