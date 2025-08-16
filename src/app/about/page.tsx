'use client'

import Navbar from "@/components/Navbar";
import ReactLenis, { useLenis } from "lenis/react";
import { motion } from "motion/react";

export default function about(){

    const lenis = useLenis((lenis) => {
    // console.log(lenis);
    });

    return(
        <>
        <ReactLenis root />
        <div className="min-h-screen pt-8 bg-background font-sans text-base md:text-xl font-medium tracking-normal">
            <Navbar animate={false} />
            <section className="pt-16 px-4 sm:px-8">

            <motion.div className="text-5xl text-left sm:text-5xl md:text-6xl text-text-primary font-semibold">
              <h1 className="w-full max-w-[800px] mx-auto">Who !?</h1>
              <p className="w-full max-w-[800px] mx-auto text-2xl md:text-3xl mt-2 text-text-primary/80 font-medium">i'm yassin, a passionate web developer from morocco, making custom coded websites that combine functionality and looks to deliver the best digital experiences.</p>
            </motion.div>


            </section>
        <section className="px-4 sm:px-8 mt-32">
          <div className="w-full max-w-[800px] mx-auto">
            <motion.h1
              className="text-4xl text-left w-full max-w-[800px] mx-auto  sm:text-left sm:text-5xl md:text-6xl text-text-primary font-semibold"
            >
                Things i like
            </motion.h1>
            <motion.div className="   mt-12 sm:mt-16 md:max-w-full mx-auto grid grid-cols-2 sm:grid-cols-2 sm:max-w-full md:grid-cols-3 gap-6 sm:text-xl">

              <motion.div className="bg-white col-span-1 h-64 " initial={{opacity:0, y:30, filter:'blur(8px)'}}  whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:0.7}} transition={{delay:0.05}} >
                dw
              </motion.div>


            </motion.div>
          </div>
        </section>
        </div>
        </>
    )
}