import { teams } from "../../constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

interface TeamMember {
  image: any;
  fullImage?: any;
  name: string;
  role: string;
  id: string;
  about: string;
  githubId: string;
}

//static params for all team members
export async function generateStaticParams() {
  return teams.map((member) => ({
    id: member.id,
  }));
}

const TeamProfilePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const teamMember = teams.find((member: TeamMember) => member.id === id);

  if (!teamMember) return notFound();

  return (
    <main>
      <Link href="/#team">
        <AiOutlineClose className="text-3xl flex float-right mr-10" />
      </Link>
      <div className="flex lg:flex-row  flex-col lg:justify-between items-start gap-10 max-w-4xl mx-auto px-4 py-8 h-screen my-40">
        <div className="flex flex-col items-center sm:flex-row sm:gap-10 lg:w-1/2 lg:h-[637px] md:mx-auto">
          <Image
            src={teamMember.fullImage || teamMember.image}
            alt={teamMember.name}
            width={300}
            height={300}
            className="shadow-lg lg:w-[450px] lg:h-[600px] md:h-[600px] md:w-[450px] w-full h-full object-cover"
          />
        </div>
        <div className="prose mt-10 w-full lg:w-1/2 flex flex-col md:mx-auto lg:mx-0 md:px-6 max-md:p-4">
          <h2 className="text-2xl font-bold mb-4">{teamMember.name}</h2>
          <h3 className="text-xl font-semibold mb-2">{teamMember.role}</h3>
          <p className="text-gray-700 leading-relaxed overflow-y-auto overflow-visible h-[190px] md:h-[400px] lg:h-[600px]">
            {teamMember.about}
            {teamMember.contributions}
          </p>
        </div>
      </div>
    </main>
  );
};

export default TeamProfilePage;
