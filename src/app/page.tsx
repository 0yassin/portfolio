'use client'
import Navbar from "@/components/Navbar";
import { IconBrandCSharp, IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandUnity } from "@tabler/icons-react";
import { motion } from "motion/react"

export default function Home() {
  const headline = "Hi, i'm yassin. I make websites"
  const headline_words = headline.split(" ")
  
  return (
    <>
    <div className="min-h-screen bg-white pt-8 font-sans text-xl font-medium tracking-normal">
      <Navbar></Navbar>
      {/* hero section (headline and button) */}
      <section>
          <div className="mt-28 flex flex-col items-center gap-12">
            <motion.div className="text-5xl text-[#000000CC] text-center font-semibold">
              
              {headline_words.map((word, index) => (
                <motion.span 
                  initial={{filter:'blur(10px)', opacity:0, y:20}}
                  animate={{filter:'blur(0px)', opacity:1, y:0}}
                  transition={{delay:index/10, duration:0.5}}
                  className="mr-3 inline-block"
                  key={index}>{word}
                </motion.span>
              ))}
            </motion.div>
            <motion.button initial={{ opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8, delay:0.8}} className="inline-block bg-transparent border-[2.5px] border-[#00000088] text-[#000000CC] font-semibold h-16 aspect-[3.5] rounded-full transition cursor-pointer">
                Learn more
            </motion.button>
          </div>
      </section>

      <section>
        <div className="flex flex-col mt-28 gap-8">

        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.8, duration:0.3}} className="flex flex-col justify-start items-center shrink-0 ">
          <div className="max-w-[800px] w-full pb-16 bg-primary rounded-3xl flex flex-col pt-12 px-12 shrink-0 ">
            <h2 className=" text-4xl">Projects</h2>
            <div className="flex items-center gap-4 mt-8 w-full overflow-x-hidden">
              <div className="bg-white w-64 h-48 shrink-0 rounded-xl"></div>
              <div className="bg-white w-64 h-48 shrink-0 rounded-xl"></div>
              <div className="bg-white w-64 h-48 shrink-0 rounded-xl"></div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-start items-center shrink-0 ">
          <div className="max-w-[800px] w-full pb-16 bg-primary rounded-3xl mb-32 flex flex-col pt-12 px-12 shrink-0 ">
            <h2 className=" text-4xl">Stuff i use</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 self-center mt-8 w-fulls overflow-x-hidden text-[#363636]">
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandReact className="w-full h-full " />
                  </div>                
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandNextjs className="w-full h-full " />
                </div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandHtml5 className="w-full h-full" />
                </div>
                  <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandJavascript className="w-full h-full " />
                </div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandCss3 className="w-full h-full " />
                </div>
                  <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandPython className="w-full h-full" />
                  
                </div>
                <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandCSharp className="w-full h-full " />
                </div>
                                <div className="bg-white w-32 h-32 shrink-0 rounded-xl p-6">
                  <IconBrandUnity className="w-full h-full " />
                </div>
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>
    </>
  );
}
