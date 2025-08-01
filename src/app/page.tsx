import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-white pt-8 font-sans text-xl font-medium tracking-normal">
      <Navbar></Navbar>
      {/* hero section (headline and button) */}
      <section>
          <div className="mt-28 flex flex-col items-center gap-12">
            <h1 className="text-5xl text-[#000000CC] text-center font-semibold">Hi, I'm yassin. I make websites</h1>
            <button className="bg-transparent border-[2.5px] border-[#00000088] text-[#000000CC] font-semibold h-16 aspect-[3.5] rounded-full transition cursor-pointer">
                Learn more
            </button>
          </div>
      </section>

      <section className="flex flex-col mt-28 gap-8">
      <div className="flex flex-col justify-start items-center shrink-0 ">
        <div className="max-w-[800px] w-full pb-16 bg-primary rounded-3xl flex flex-col pt-12 px-12 shrink-0 ">
          <h2 className=" text-4xl">Projects</h2>
          <div className="flex items-center gap-4 mt-8 w-full overflow-x-hidden">
            <div className="bg-white w-64 h-48 shrink-0 rounded-xl"></div>
            <div className="bg-white w-64 h-48 shrink-0 rounded-xl"></div>
            <div className="bg-white w-64 h-48 shrink-0 rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center shrink-0 ">
        <div className="max-w-[800px] w-full pb-16 bg-primary rounded-3xl mb-32 flex flex-col pt-12 px-12 shrink-0 ">
          <h2 className=" text-4xl">Stuff i use</h2>
              <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 self-center mt-8 w-fulls overflow-x-hidden">
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl"></div>
              </div>

        </div>
      </div>
      </section>

    </div>
    </>
  );
}
