"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Speakers } from "../utils/types";
// import placeHolderImg from "@/public/image.png";
import "swiper/css/pagination";
import "swiper/css";
import Hridesh from "@/public/speakers/Hridesh.png"
const speakers: Speakers[] = [
  {
    name: "Hridesh Mg",
    image: Hridesh,
    desc: "With hands-on experience in systems programming and open source development, Hridesh has contributed upstream patches to the Linux Kernel, developed tools in Rust, C, and Go, and is currently part of Google Summer of Code 2025 with CCExtractor. ",
  },
  // {
  //   name: "Hridesh Mg",
  //   image: "dd",
  //   desc: "With hands-on experience in systems programming and open source development, Hridesh has contributed upstream patches to the Linux Kernel, developed tools in Rust, C, and Go, and is currently part of Google Summer of Code 2025 with CCExtractor. ",
  // },
  // {
  //   name: "Hridesh Mg",
  //   image: "dd",
  //   desc: "With hands-on experience in systems programming and open source development, Hridesh has contributed upstream patches to the Linux Kernel, developed tools in Rust, C, and Go, and is currently part of Google Summer of Code 2025 with CCExtractor. ",
  // },
  // {
  //   name: "Hridesh Mg",
  //   image: "dd",
  //   desc: "With hands-on experience in systems programming and open source development, Hridesh has contributed upstream patches to the Linux Kernel, developed tools in Rust, C, and Go, and is currently part of Google Summer of Code 2025 with CCExtractor. ",
  // },
];
const SpeakerCard = (props: { speaker: Speakers }) => {
  return (
    <div className="w-full h-auto py-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
      <Image
        src={props.speaker.image}
        alt="Speaker Image"
        className="w-40 h-40 sm:w-52 sm:h-52 rounded-lg object-cover"
      />
      <div className="text-center sm:text-left">
        <p className="font-Outfit text-2xl sm:text-4xl">{props.speaker.name}</p>
        <p className="text-sm sm:text-base mt-2 max-w-sm">
          {props.speaker.desc}
        </p>
      </div>
    </div>
  );
};

export default function SwiperCarousel() {
  return (
    <div id={"speakers"} className="h-92 max-w-4xl mx-auto my-10 px-6 md:px-10">
      <div>
        <div className="w-fit">
          <p className="text-4xl font-bold text-white">Speaker&apos;s</p>
          <div className="w-[80%] m-auto mt-1 h-1 bg-gradient-to-r  from-[#FF06E4] to-[#770297]"></div>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={700}
        className="rounded-xl overflow-hidden"
      >
        {speakers.map((speaker, i) => (
          <SwiperSlide key={i}>
            <SpeakerCard key={i} speaker={speaker} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
