import React from "react";
import Image from "next/image";
import { TbMathGreater } from "react-icons/tb";
import Link from "next/link";

interface African_Union_Agenda_2063Props {
  className?: string;
}

const African_Union_Agenda_2063 = ({ className }: African_Union_Agenda_2063Props) => {
  const Agenda = [
    {
      image: "/home/Consortium.png",
      title: "Consortium Team",
      description:
        "We are a unified Consortium of companies, institutions, and experts dedicated to building a better Africa through collaboration and innovation",
      link: "#",
    },
    {
      image: "/home/Requested.png",
      title: "Requested Presence",
      description:
        "We invite African leaders, ministers, and stakeholders to join us in driving transformative projects for the continent",
      link: "#",
    },
    {
      image: "/home/Investment.png",
      title: "Investment Plans",
      description:
        "Our investments include high-speed railways, smart ports, manufacturing plants, hospitals, and green energy solutions to transform Africa",
      link: "#",
    },
  ];


  return (
    <>
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 md:px-20 px-4 justify-center items-center ${className}`}>
        {Agenda.map((item) => (
          <div key={item.title} className="flex flex-col gap-4 border-[grey] border rounded-md shadow-lg p-4 justify-center items-center lg:w-[397px] lg:h-[500px] md:w-[397px] md:h-[500px] w-[300] h-[auto]">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="object-cover shadow-sm"
            />
            <div className="gap-6">
            <h3 className="text-2xl mb-4 font-semibold">{item.title}</h3>
            <p className="mb-4">{item.description}</p>
            <p>
              <Link href={item.link} className="text-[#00ADEF] flex flex-row gap-2 items-center">Learn More <TbMathGreater /></Link>
            </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default African_Union_Agenda_2063;
