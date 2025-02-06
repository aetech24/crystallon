import Image from "next/image";
import Hero from "./components/Hero";
import AboutImg from "@/public/home/about.png";
import { initiatives } from "./constants";
import Team from "./components/Team";
import African_Union_Agenda_2063 from "./components/African_Union_Agenda_2063";

export default function Home() {
  return (
    <div id="home" className="">
      <Hero />

      {/* About Us */}
      <div
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 max-md:flex max-md:flex-col gap-8 md:px-20 px-4 py-16 md:py-24"
      >
        <Image
          src={AboutImg}
          width={550}
          height={400}
          alt="Picture of the author"
        />

        <div className="flex flex-col gap-4 md:items-start items-start md:justify-start justify-center">
          <div className="flex flex-col gap-4">
            <div className="relative w-32 md:mx-0 mx-auto justify-self-start">
              <div className="bg-[#00ADEF] h-1 w-full"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold max-md:text-center">
              About Us
            </h1>
          </div>
          <p>
            Crystallon has over 40 years of proven performance in the train and
            high speed rails industry. Crystallon will work with its partners to
            create, implement, monitor, and evaluate annual work plans that
            identify specific objectives and activities of interest to All
            Partners and Municipalities. Within the context of specific
            projects, Crystallon and its Partners will work to establish
            mutually amenable methods of coordination which will be included as
            part of the Work Plans mentioned herein. Crystallon Holding
            Management LLC. will be the master developer on these projects.
          </p>
          {/* <button className="md:p-4 p-2 w-fit text-blue-400 border border-blue-400">
            Read More
          </button> */}
          <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">Our Vision</h2>
              <p>
                At Crystallon we envision a prosperous, connected, and
                sustainable Africa. Through innovative projects and strategic
                partnerships, we are committed to driving economic growth,
                improving quality of life, and fostering regional integration
                across the continent
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p>
                Our mission is to transform Africa by developing cutting-edge
                infrastructure, renewable energy solutions, and sustainable
                industries. We aim to create jobs, empower communities, and
                build a future where every African can thrive
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Initiatives */}
      <div
        id="initiatives"
        className="flex flex-col gap-4 px-4 md:px-20 py-12 md:py-24 items-center"
      >
        <div className="flex flex-col gap-4">
          <div className="relative w-32 md:mx-0 mx-auto justify-self-start">
            <div className="bg-[#00ADEF] h-1 w-full"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold max-md:text-center">
            Our Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-12">
          {initiatives.map((item, id) => {
            return (
              <div
                key={id}
                className="rounded-md border p-5 flex flex-col gap-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meet Our Team */}
      <div
        id="team"
        className="flex flex-col gap-4 px-4 md:px-20 md:py-24 py-12 items-center"
      >
        <div className="relative w-32 md:mx-0 mx-auto justify-self-start">
          <div className="bg-[#00ADEF] h-1 w-full"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold">Meet Our Team</h1>
        <Team />
      </div>

      {/* African Union Agenda 2063 */}
      <div className="flex flex-col gap-4 items-center">
        <div className="relative w-32 md:mx-0 mx-auto justify-self-start">
          <div className="bg-[#00ADEF] h-1 w-full"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold max-md:text-center">
          African Union Agenda 2063
        </h1>
        <p className="text-center">Transforming Africa Through Collaboration and Innovation</p>
        <African_Union_Agenda_2063 className="mx-auto"/>
      </div>

      {/* Partner With Us */}
      <div
        id="partner"
        className="flex flex-col gap-4 px-4 md:px-20 py-12 md:py-24 items-center"
      >
        <div className="relative w-32 md:mx-0 mx-auto justify-self-start">
          <div className="bg-[#00ADEF] h-1 w-full"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold">Partner With Us</h1>
        <form className="pt-12 w-full flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
            <label className="flex flex-col gap-2">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"
              />
            </label>
            <label className="flex flex-col gap-2">
              Organization
              <input
                type="text"
                placeholder="Your organization"
                className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"
              />
            </label>
          </div>
          <div className="grid grid-cols-1">
            <label className="flex flex-col gap-2">
              Email
              <input
                type="text"
                placeholder="your@email.com"
                className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"
              />
            </label>
          </div>
          <div className="grid grid-cols-1">
            <label className="flex flex-col gap-2">
              Message
              <textarea
                placeholder="Tell us about your interest in partnering with us"
                rows={6}
                className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"
              />
            </label>
          </div>
          <button className="bg-[#00ADEF] px-4 md:px-20 py-2 w-fit mx-auto text-white md:text-xl my-5">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
