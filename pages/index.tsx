import { cn } from "@/lib/utils";
import Image from "next/image";
import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import ContainerWide from "@/components/ContainerWide";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useMemo, useState } from "react";
import IKreation from "@/types/IKreation";
import getKreations from "@/lib/getKreations";
import tags from "@/lib/tags";
import ITag from "@/types/ITag";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog2";
import StatusBadge from "@/components/StatusBadge";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

interface HomeProps {
  tags: ITag[];
  kreations: IKreation[];
}

export default function Home(props: HomeProps) {
  const [tag, setTag] = useState<string>("all");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedKreation, setSelectedKreation] = useState<IKreation | null>();
  const [emblaRef] = useEmblaCarousel();

  const filteredKreations = useMemo(() => {
    return props.kreations.filter((kreation: IKreation) => {
      if (tag === "all") return true;
      return kreation.tags.includes(tag);
    })
  }, [props.kreations, tag]);

  return (
    <div className="relative">
      <NextSeo title="Home" description="Radical starts here." />
      <Navbar activeLink="home" />
      <ContainerWide className="pt-4 pb-[36rem]">
        <div className="flex items-center justify-between mb-6">
          <div className="space-x-4 flex items-center justify-start flex-wrap">
            <span
              className={cn(
                tag === "all" ? "text-purple-600" : "text-gray-500",
                "cursor-pointer hover:text-purple-500 font-departureMono tracking-tighter"
              )}
              onClick={() => setTag("all")}
            >
              all
            </span>
            {tags.map((_tag: ITag, index: number) => (
              <span
                key={index}
                className={cn(
                  tag === _tag.value ? "text-purple-600" : "text-gray-500",
                  "cursor-pointer hover:text-purple-500 font-departureMono tracking-tighter"
                )}
                onClick={() => setTag(_tag.value)}
              >
                {_tag.value}
              </span>
            ))}
          </div>
          <p className="font-departureMono text-sm tracking-tighter text-gray-400">
            {filteredKreations.length}{" "}
            {filteredKreations.length === 1 ? "kreation" : "kreations"}
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="wait">
              {filteredKreations.map((kreation: IKreation, index: number) => (
                <div
                  key={kreation.name}
                  className="transition ease-out duration-150 hover:-translate-y-2"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.1 + index * 0.1 },
                    }}
                    exit={{ opacity: 0, y: 5, transition: { duration: 0.1 } }}
                    className="p-6 bg-[#F7F7F2] rounded-2xl xs:max-h-[24rem] cursor-pointer relative"
                    onClick={() => {
                      setSelectedKreation(kreation);
                      setOpen(true);
                    }}
                  >
                    <StatusBadge
                      status={kreation.status}
                      className="absolute top-4 right-4"
                    />
                    <div className="h-72 w-full flex items-center justify-center">
                      <Image
                        src={kreation.icon.asset.url}
                        alt={kreation.name}
                        className="h-auto w-52"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="font-medium tracking-tight text-md">
                        {kreation.name}
                      </h2>
                      <p className="text-sm">{kreation.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          </div>
          <DialogContent
            showDefaultClose={true}
            onOpenAutoFocus={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.25, delay: 0.15 },
              }}
            >
              <DialogHeader className="flex flex-row items-center justify-start gap-4">
                <Image
                  src={selectedKreation?.icon.asset.url!}
                  alt={selectedKreation?.name!}
                  width={100}
                  height={100}
                  className="-ml-1"
                />
                <div className="space-y-2">
                  <DialogTitle className="text-4xl tracking-tighter">
                    {selectedKreation?.name}
                  </DialogTitle>
                  <DialogDescription className="text-lg italic">
                    {selectedKreation?.description}
                  </DialogDescription>
                </div>
              </DialogHeader>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, delay: 0.35 },
              }}
            >
              <div className="embla my-8 overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  <div className="embla__slide">Slide 1</div>
                  <div className="embla__slide">Slide 2</div>
                  <div className="embla__slide">Slide 3</div>
                </div>
              </div>
              <p className="">
                {selectedKreation?.brief
                  .split("\n")
                  .map((text: string, index: number) => (
                    <p key={index}>
                      {text}
                      <br />
                    </p>
                  ))}
              </p>
              <div className="grid grid-cols-4 gap-2 mt-10 mb-6">
                <div className="col-span-1">
                  <p className="text-sm font-semibold mb-2">Status</p>
                  <StatusBadge status={selectedKreation?.status!} />
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-semibold mb-2">Year founded</p>
                  <p>{selectedKreation?.founding_year}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-semibold mb-2">Email</p>
                  <Link href={`mailto:${selectedKreation?.email}`}>
                  <p className="underline hover:text-blue-600">{selectedKreation?.email}</p>
                  </Link>
                </div>
              </div>
              <p className="text-sm font-semibold mb-3">Tags</p>
              <div className="flex items-center justify-start flex-wrap space-x-3 mb-6">
                {selectedKreation?.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm py-1 px-3 rounded-sm bg-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                disabled={selectedKreation?.url === null}
                onClick={() => {
                  window.open(selectedKreation?.url, "_blank");
                }}
                className="my-4 w-full py-7 text-md"
              >
                Visit {selectedKreation?.name}
              </Button>
            </motion.div>
          </DialogContent>
        </Dialog>
      </ContainerWide>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}

export async function getStaticProps() {
  const kreations: IKreation[] = await getKreations();

  return {
    props: {
      kreations,
      tags, // TODO make this both tags and the statuses for people to filter with, you can filter by both status and tag?
    },
  };
}
