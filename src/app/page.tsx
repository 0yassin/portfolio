'use client'
import AnimHeading from "@/components/AnimHeading";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
import Badge from "@/components/Badge";

export default function Home() {

    const [window_size, Setwindowsize] = useState(0)
    

    

    useEffect(()=>{
        Setwindowsize(window.innerWidth);
        
        window.addEventListener('resize', ()=>{
            
            Setwindowsize(window.innerWidth);

        })

       }, [])

  const lenis = useLenis((lenis) => {
    // console.log(lenis);
  });


  const sec2Rref = useRef(null);
  const sec3Rref = useRef(null);

  const { scrollYProgress: sec2scrollProgress } = useScroll({
    target: sec2Rref,
    offset: ["start end", "center start"],
  });

  const { scrollYProgress: sec3scrollProgress } = useScroll({
    target: sec3Rref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(sec2scrollProgress, [0, 1], [150, -100]);




  const badge1_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [100, 0, -100]);
  const badge2_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [125, 0, -125]);
  const badge3_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [150, 0, -150]);
  const badge4_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [175, 0, -100]);
  const badge5_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [200, 0, -125]);
  const badge6_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [225, 0, -150]);
  const grid_y = useTransform(sec3scrollProgress, [0,0.5,1], [100,0,-100])
  const text_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [100, 0, -200]);

  return (
    <>
      <ReactLenis root />
      <div className="min-h-screen bg-background pt-8 font-sans text-base md:text-xl font-medium tracking-normal pb-64">
        <Navbar />
        <section className="pt-28 px-4 sm:px-8">
          <div className="py-12 flex flex-col items-center gap-16 text-center">
            <motion.div className="text-5xl sm:text-5xl md:text-6xl text-text-primary font-semibold">
              <AnimHeading>I'm yassin, I make websites</AnimHeading>
            </motion.div>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.9 }}
              className="inline-block hover:bg-text-primary transition-colors bg-primary text-text-secondary font-semibold py-5 px-16 rounded-full cursor-pointer"
            >
              Learn more
            </motion.button>
          </div>
        </section>

        <section className=" pt-16 pb-32 px-4 lg:pt-32 lg:pb-32 sm:px-8" ref={sec2Rref}>
          <div className="w-full flex justify-center">
            <motion.h1
              style={ window_size >= 640? { y: y1 } : {y:0}}
              className="text-5xl md:mx-16 lg:mx-32 sm:text-5xl md:text-5xl lg:text-6xl text-text-primary text-left font-normal max-w-5xl"
            >
              I help brands and businesses level up their online presence
            </motion.h1>
          </div>
        </section>

        <section ref={sec3Rref} className="px-4 sm:px-8">
          <div className="max-w-6xl mx-auto lg:mx-32">
            <motion.h1
              style={ window_size>= 640? { y: text_y } : {y:0}}
              className="text-4xl sm:text-5xl md:text-6xl text-text-primary font-semibold"
            >
              Tools I use
            </motion.h1>
            <motion.div style={window_size>=768? {y:0} : {y:grid_y}} className="mt-16 max-w-2xs md:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 sm:max-w-full md:grid-cols-3 gap-6 text-lg sm:text-xl">
              <Badge screen_width={window_size} y={badge1_y} icon="/IconJS.svg">
                <span>Javascript</span>
              </Badge>
              <Badge screen_width={window_size} y={badge2_y} icon="/IconTS.svg">
                <span>Typescript</span>
              </Badge>
              <Badge screen_width={window_size} y={badge3_y} icon="/IconReact.svg">
                <span>ReactJS</span>
              </Badge>
              <Badge screen_width={window_size} y={badge4_y} icon="/next.svg">
                <span>NextJS</span>
              </Badge>
              <Badge screen_width={window_size} y={badge5_y} icon="/IconPY.svg">
                <span>Python</span>
              </Badge>
              <Badge screen_width={window_size} y={badge6_y} icon="/IconCS.svg">
                <span>C#</span>
              </Badge>
            </motion.div>
          </div>
        </section>


      </div>
    </>
  );
}
