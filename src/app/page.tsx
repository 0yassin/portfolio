'use client'
import AnimHeading from "@/components/AnimHeading";
import Navbar from "@/components/Navbar";
import { IconBrandCSharp, IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandUnity } from "@tabler/icons-react";
import { motion } from "motion/react"

export default function Home() {

const badgeClass = "flex justify-start gap-6 font-semibold bg-badge py-4 px-6 text-center rounded-[8px] border-transparent border-2 hover:border-primary transition-all self-center items-center cursor-pointer";
  return (
    <>
    <div className="min-h-screen  bg-background pt-8 font-sans text-xl font-medium tracking-normal pb-64">

      <Navbar></Navbar>
      {/* hero section (headline and button) */}
      <section className="">
          <div className="mt-28 py-12 flex flex-col items-center gap-16">
            <motion.div className="text-6xl text-text-primary text-center font-semibold">

              <AnimHeading>I'm yassin, i make experiences</AnimHeading>

            </motion.div>
            <motion.button initial={{ y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.3, delay:0.8}} className="inline-block hover:bg-text-primary transition-color transition-colors bg-primary text-text-secondary font-semibold py-5 px-16 rounded-full  cursor-pointer">
                Learn more
            </motion.button>

            
          </div>
      </section>

      <section className="mt-64 mb-64">

        <div className="w-full justify-center flex">
          <motion.h1 className=" text-6xl mx-32 text-text-primary text-left font-normal">I help brands and businesses level up their online presence</motion.h1>
        </div>
      </section>



      <section className="">
        <div className="mx-32">
          <h1 className="text-6xl text-text-primary font-semibold">Tools i use</h1>
          <div className=" mx-6 grid grid-cols-3 grid-rows-2 max-w-[800px] text-2xl gap-4 mt-16  " >


             <div className={badgeClass}>
              <img className="w-12 h-12 " src="/IconJS.svg" />
              <span>Javascript</span>
            </div>

             <div className={badgeClass}>
              <img src="/IconTS.svg" className="w-12 h-12" />
              <span>Typescript</span>
            </div>

             <div className={badgeClass}>
              <img src="/Iconreact.svg" className="w-12 h-12" />
              <span>ReactJS</span>
            </div>

             <div className={badgeClass}>
              <img src="/next.svg" className="w-12 h-12 "/>
              <span>NextJS</span>
            </div>

             <div className={badgeClass}>
              <img className="w-12 h-12 " src="/IconPY.svg" />
              <span>Python</span>
            </div>

             <div className={badgeClass}>
              <img className="w-12 h-12 " src="/IconCS.svg" />
              <span>Csharp</span>
            </div>




          </div>

        </div>

      </section>


    </div>
    </>
  );
}
