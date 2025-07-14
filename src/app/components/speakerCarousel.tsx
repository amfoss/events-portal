"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Speakers } from "../utils/types";
// import placeHolderImg from "@/public/image.png";
import "swiper/css/pagination";
import "swiper/css";
import Hridesh from "@/public/speakers/Hridesh.png";
import Swayam from "@/public/speakers/Swayam Agrahari.jpg";
import Gautham from "@/public/speakers/Gautham Mohanraj.jpg";
const speakers: Speakers[] = [
  {
    name: "Hridesh Mg",
    image: Hridesh,
    desc: "Hridesh MG is a systems programming enthusiast with practical experience in low-level development and open-source contributions. He has submitted patches to the Linux Kernel as part of the LFX program and is currently a Google Summer Of Code (GSoC) contributor with CCExtractor.<br /><br/> Having been in your shoes not long ago, he’s eager to share how you can get started in open source too.",
  },
  {
    name: "Gautham Mohanraj",
    image: Swayam,
    desc: "Gautham Mohanraj is a longtime contributor to Scribe, a Wikimedia-affiliated project that powers accessibility tools for Wikipedia. With over 220 commits, he’s been a key part of Scribe’s growth and impact. He’s currently doing the LFX Mentorship Program with Web3j, and has also been selected as an Outreachy mentor, guiding newcomers into open source.<br/><br/> A national-level hackathon winner, Gautham blends deep technical experience with a passion for mentoring",
  },
  {
    name: "Swayam Agrahari",
    image: Gautham,
    desc: "Swayam Agrahari is a passionate web developer and open-source contributor with experience in React, Next.js, Node.js, and MongoDB. He has contributed to the WikiEdu Dashboard, the tool used to manage infrastructure for programs like Outreachy and GSoC. Swayam was a winner at FOSS Hack, an open-source hackathon, and has been selected for a fully funded opportunity to attend Wikimania 2025 in Nairobi, Kenya — Wikimedia’s flagship annual conference.<br/><br/> His journey shows how student developers can turn open-source contributions into global opportunities.",
  },
];
const SpeakerCard = (props: { speaker: Speakers }) => {
  return (
    <div className="w-full py-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10">
      <Image
        src={props.speaker.image}
        alt="Speaker Image"
        className="w-36 h-36 sm:w-48 sm:h-48 rounded-lg object-cover shrink-0 mx-auto sm:mx-0"
      />
      <div className="text-center sm:text-left max-w-2xl">
        <p className="font-Outfit text-2xl sm:text-3xl font-semibold">
          {props.speaker.name}
        </p>
        <p
          className="text-sm sm:text-base mt-3 leading-relaxed text-white"
          dangerouslySetInnerHTML={{ __html: props.speaker.desc }}
        />
      </div>
    </div>
  );
};

export default function SwiperCarousel() {
  return (
    <div id={"speakers"} className="h-92 max-w-4xl mx-auto my-10 px-6 md:px-10">
      <div>
        <div className="w-fit">
          <p className="text-4xl font-bold text-white">Meet Our Speakers</p>
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
