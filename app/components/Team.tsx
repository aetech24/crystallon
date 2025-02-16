import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbMathGreater } from "react-icons/tb";
import TeamShowMore from "./buttons/TeamShowMore";

import { teams } from "../constants";

interface TeamMember {
  image: any;
  name: string;
  role: string;
  id: string;
  about: string;
  githubId: string;
}

const TeamCard: React.FC<{ teamMember: TeamMember }> = ({ teamMember }) => {
  return (
    <div className="rounded-md border flex flex-col gap-2 shadow-lg justify-center items-center p-4">
      <Image
        src={teamMember.image}
        alt={teamMember.name}
        width={350}
        height={345}
        className="lg:w-[350px] lg:h-[345.31px] w-full h-full object-cover"
      />
      <div className="flex flex-col gap-2 text-center py-4">
        <h3 className="font-medium text-xl md:text-2xl uppercase">
          {teamMember.name}
        </h3>
        <p className="max-md:text-sm w-10/12 mx-auto">{teamMember.role}</p>
        <p>
          <Link
            href={`/TeamProfiles/${teamMember.id}`}
            className="text-[#00ADEF] flex flex-row gap-2 items-center cursor-pointer justify-center" 
          >
            View Profile <TbMathGreater />
          </Link>
        </p>
      </div>
      <div className="h-1.5 w-[40%] mx-auto bg-[#00ADEF] bottom-0 top-[100%]"></div>
    </div>
  );
};

const Team: React.FC = () => {

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      {/* CEO Section */}
      <div className="flex flex-col items-center ">
        <TeamCard teamMember={teams[0]} />
      </div>

      {/* Second and Third Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.slice(1, 3).map((teamMember, id) => (
          <TeamCard key={id} teamMember={teamMember} />
        ))}
      </div>

      {/* Fourth to Seventh Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teams.slice(3, 7).map((teamMember, id) => (
          <TeamCard key={id} teamMember={teamMember} />
        ))}
      </div>
          {/* Show More Button */}
          <TeamShowMore />

    </div>
  );
};

export default Team;
