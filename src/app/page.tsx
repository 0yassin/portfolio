'use client'
import AnimHeading from "@/components/AnimHeading";
import AnimHeading2 from "@/components/AnimHeading2";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from 'lenis/react'
import Badge from "@/components/Badge";


export default function Home() {
    const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  const sec2Rref = useRef(null)
  const sec3Rref = useRef(null)

  const {scrollYProgress:sec2scrollProgress} = useScroll({

        target:sec2Rref,
        offset: ["start end", "center start"]

    }
  )
  const y1 = useTransform(sec2scrollProgress, [0,1], [300,-100])

  // for badges
  const {scrollYProgress: sec3scrollProgress} = useScroll({
    target:sec3Rref,
    offset: ["start end","end start"]
    
  })
  const badge1_y = useTransform(sec3scrollProgress, [0,0.5,1], [100,0,-100])
  const badge2_y = useTransform(sec3scrollProgress, [0,0.5,1], [150,0,-125])
  const badge3_y = useTransform(sec3scrollProgress, [0,0.5,1], [200,0,-150])
  const badge4_y = useTransform(sec3scrollProgress, [0,0.5,1], [250,0,-100])
  const badge5_y = useTransform(sec3scrollProgress, [0,0.5,1], [300,0,-100])
  const badge6_y = useTransform(sec3scrollProgress, [0,0.5,1], [350,0,-100])
  const text_y = useTransform(sec3scrollProgress, [0,0.5,0.85], [100,0,-150])


const badgeClass = "flex justify-start gap-6 font-semibold bg-badge py-4 px-6 text-center rounded-[8px] border-transparent border-2 hover:border-primary transition-colors self-center items-center cursor-pointer";
  return (
    <>
    <ReactLenis root />
    <div className="min-h-screen  bg-background pt-8 font-sans text-xl font-medium tracking-normal pb-64">
      <Navbar/>



      <section className="pt-28">
          <div className=" py-12 flex flex-col items-center gap-16">
            <motion.div className="text-6xl text-text-primary text-center font-semibold">

              <AnimHeading>I'm yassin, i make websites</AnimHeading>

            </motion.div>
            <motion.button initial={{ y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.2, delay:0.9}} className="inline-block hover:bg-text-primary transition-color transition-colors bg-primary text-text-secondary font-semibold py-5 px-16 rounded-full  cursor-pointer">
                Learn more
            </motion.button>
          </div>
      </section>

      <section className="pt-46 pb-64  " ref={sec2Rref}>

        <div className="w-full justify-center flex" >
          <motion.h1 style={{y:y1}} className=" text-6xl mx-32 text-text-primary text-left font-normal">I help brands and businesses level up their online presence</motion.h1>
        </div>
      </section>



      <section ref={sec3Rref} className="border-s8">
        <div className="mx-32 border-8s border-red-400">
          <motion.h1 style={{y:text_y}} className="text-6xl text-text-primary font-semibold">Tools i use</motion.h1>
          <div className=" mx-6 grid grid-cols-3 grid-rows-2 max-w-[800px] text-2xl gap-4 mt-16  " >

            <Badge y={badge1_y} icon="/IconJS.svg">
                <span>Javascript</span>
            </Badge>

            <Badge y={badge2_y} icon="/IconTS.svg">
                <span>Typescript</span>
            </Badge>
            
            <Badge y={badge3_y} icon="/IconReact.svg">
                <span>ReactJS</span>
            </Badge>
            
            <Badge y={badge4_y} icon="/next.svg">
                <span>NextJS</span>
            </Badge>
            
            <Badge y={badge5_y} icon="/IconPY.svg">
                <span>Pytonn</span>
            </Badge>

            <Badge y={badge6_y} icon="/IconCS.svg">
                <span>Csharp</span>
            </Badge>
            
          </div>
        </div>
      </section>

      <section className="min-h-screen "></section>


    </div>
    </>
  );
}
