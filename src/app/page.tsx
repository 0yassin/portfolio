'use client'
import AnimHeading from "@/components/AnimHeading";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from 'lenis/react';
import Badge from "@/components/Badge";

export default function Home() {
  
    const card_class = "py-10   gap-6 text-primary/90 hover:text-primary hover:border-primary/80 duration-200 transition-colors flex flex-col justify-center items-center grid-cols-1 bg-badge border-1 border-primary/20 rounded-[10px]"
    const card2_class = "pb-10 pt-2 px-2   gap-10 text-primary/90 hover:text-primary hover:border-primary/80 duration-200 transition-colors flex flex-col justify-center items-center grid-cols-1 bg-badge border-1 border-primary/20 rounded-[10px]"

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
  const sec4Rref = useRef(null);

  const { scrollYProgress: sec2scrollProgress } = useScroll({
    target: sec2Rref,
    offset: ["start end", "center start"],
  });

  const { scrollYProgress: sec3scrollProgress } = useScroll({
    target: sec3Rref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(sec2scrollProgress, [0, 1], [100, -100]);




  const badge1_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [100, 0, -100]);
  const badge2_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [150, 0, -150]);
  const badge3_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [200, 0, -200]);

  const badge4_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [100, 0, -100]);
  const badge5_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [150, 0, -150]);
  const badge6_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [200, 0, -200]);

  const grid_y = useTransform(sec3scrollProgress, [0,0.5,1], [100,0,-100])
  const text_y = useTransform(sec3scrollProgress, [0, 0.5, 1], [100, 0, -100]);


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
              transition={{ delay:0.9, duration:0.2 }}
              className="group relative inline-flex items-center justify-center bg-primary text-text-secondary font-semibold py-5 px-16 rounded-full cursor-pointer overflow-hidden duration-200"
            >
              <span className="duration-200 group-hover:-translate-x-5">
                Learn more
              </span>
              <span className="absolute right-8 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                {/* Inline SVG arrow */}
                <img className="h-6 w-6 -rotate-90" src={'/downarrow.svg'} />
              </span>
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

        <section ref={sec4Rref} className="px-4 sm:px-8 mt-32">
          <div className="max-w-6xl mx-auto lg:mx-32">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl text-text-primary font-semibold"
            >
              Services i provide
            </motion.h1>
            <motion.div className="mt-16 max-w-2xs md:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 sm:max-w-full md:grid-cols-3 gap-6 sm:text-xl">

              <motion.div initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:'all'}} transition={{delay:0.05}}   className={card_class} >
                <span>Web Design</span>
              </motion.div>

              <motion.div initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:'all'}} transition={{delay:0.2}} className={card_class} >
                <span>Web Dev</span>
              </motion.div>

              <motion.div initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:'all'}} transition={{delay:0.5}} className={card_class} >
                <span>Site redesign</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-8 mt-32">
          <div className="max-w-6xl mx-auto lg:mx-32">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl text-text-primary font-semibold"
            >
              Recent Projects
            </motion.h1>
            <motion.div className="mt-16 max-w-2xs md:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 sm:max-w-full md:grid-cols-3 gap-6 sm:text-xl">

              <motion.div initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:0.7}} transition={{delay:0.05}}   className={card2_class} >
                <img src={"/IconJS.svg"} className="w-full h-full rounded-[6px]" />
                <div className="flex justify-between px-2 w-full h-full items-center">
                  <span>Project</span>
                  <div className="bg-white rounded-full px-4 py-2 text-text-secondary text-sm font-bold">
                    typescript
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:0.7}} transition={{delay:0.2}}   className={card2_class} >
                <img src={"/IconTS.svg"} className="w-full h-full rounded-[6px]" />
                <div className="flex justify-between px-2 w-full h-full items-center">
                  <span>Nice Project</span>
                  <div className="bg-white rounded-full px-4 py-2 text-text-secondary text-sm font-bold">
                    typescript
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:0.7}} transition={{delay:0.5}}   className={card2_class} >
                <img src={"/IconTS.svg"} className="w-full h-full rounded-[6px]" />
                <div className="flex justify-between px-2 w-full h-full items-center">
                  <span>Even better Project</span>
                  <div className="bg-white rounded-full px-4 py-2 text-text-secondary text-sm font-semibold">
                    C#
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>




      </div>
    </>
  );
}
