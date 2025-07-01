import React from "react";
import { DevRelGroup } from "../../components/assets";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SpeakersPage = () => {
  const speakers = [
    {
      image: "/yinka.png",
      name: "Olayinka Oshidipe",
      topic: "Workshop: Video Production for Developer Advocates"
    },
    {
      image: "/ekene.png",
      name: "Ekene Eze",
      topic: "Scaling Your DevRel Impact for Career Growth: The journey from beginner to Director of DevRel"
    },
    {
      image: "/trust.png", 
      name: "Trust Jamin Okpukoro",
      topic: "Navigating Travelling Requirements for DevRels in Africa"
    },
    {
      image: "/him.png",
      name: "xxx xxx", 
      topic: "Crafting & Championing Global Developer Programs"
    }
  ];

  return (
    <main className="relative">
      <div className="fixed top-0 left-0 w-full h-full p-4">
        <Link href="/" className="flex items-center gap-2 text-lg text-white bg-black/60 p-2 rounded-md w-fit">
            <ArrowLeft className="text-white" />
        </Link>
      </div>
      <section className="mt-12">
        <div className="flex justify-center items-center">
          <DevRelGroup className="text-white sm:w-[1000px] sm:h-[100px] w-[500px] h-[50px]" />
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image 
                src={speaker.image} 
                alt={speaker.name} 
                width={1000} 
                height={1000}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{speaker.name}</h3>
                  <p className="text-lg opacity-90 tracking-tight">{speaker.topic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SpeakersPage;
