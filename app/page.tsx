import Image from "next/image";
import Hero from "./_components/Hero";
import AboutImg from '@/public/home/about.png'
import { initiatives, teams } from "./_constants";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="lg:grid max-md:flex max-md:flex-col-reverse lg:grid-cols-2 gap-8 md:px-20 px-4 py-16 md:py-24">
        <Image
          src={AboutImg}
          width={550}
          height={400}
          alt="Picture of the author"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold max-md:text-center">About Us</h1>
          <p>Crystallon has over 40 years of proven performance in the train and high speed rails industry. Crystallon will work with its partners to create, implement, monitor, and evaluate annual work plans that identify specific objectives and activities of interest to All Partners and Municipalities. Within the context of specific projects, Crystallon and its Partners will work to establish mutually amenable methods of coordination which will be included as part of the Work Plans mentioned herein. Crystallon Holding Management LLC. will be the master developer on these projects.</p>
          <button className="md:p-4 p-2 w-fit text-blue-400 border border-blue-400">
            Read More
          </button>
        </div>
      </div>
      <div className="bg-blue-400 h-2 w-[10%] mx-auto"></div>
      <div className="flex flex-col gap-4 px-4 md:px-20 py-12 md:py-24 items-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Our Key Initiatives</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-12">
          {initiatives.map((item, id) => {
            return (
              <div key={id} className="rounded-md border p-5 flex flex-col gap-2">
                <Image src={item.image} alt={item.title} width={80} height={80} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-20 md:py-24 py-12 items-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 md:pt-12">
          {teams.map((item, id) => {
            return (
              <div key={id} className="rounded-md border flex flex-col gap-2 shadow-lg">
                <Image src={item.image} alt={item.name} width={400} height={400} />
                <div className="flex flex-col gap-2 text-center py-4">
                  <h3 className="font-medium text-xl md:text-2xl uppercase">{item.name}</h3>
                  <p className="max-md:text-sm">{item.role}</p>
                </div>
                <div className="h-1.5 w-[40%] mx-auto bg-blue-400"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-20 py-12 md:py-24 items-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Partner With Us</h1>
        <form className="pt-12 w-full flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
            <label className="flex flex-col gap-2">Name
              <input type="text" placeholder="Your name" className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"/>
            </label>
            <label className="flex flex-col gap-4">Organization
              <input type="text" placeholder="Your organization" className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"/>
            </label>
          </div>
          <div className="grid grid-cols-1">
            <label className="flex flex-col gap-2">Email
              <input type="text" placeholder="your@email.com" className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"/>
            </label>
          </div>
          <div className="grid grid-cols-1">
            <label className="flex flex-col gap-2">Message
              <textarea placeholder="Tell us about your interest in partnering with us" rows={6} className="md:text-lg p-2 md:p-3 border rounded-md outline-none w-full"/>
            </label>
          </div>
          <button className="bg-blue-400 px-4 md:px-20 py-2 w-fit mx-auto text-white md:text-xl my-5">Send Message</button>
        </form>
      </div>
    </div>
  );
}
