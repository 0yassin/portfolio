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
            <section className="pt-16 px-4 md:px-8">

            <motion.div className="text-5xl text-left sm:text-5xl md:text-6xl text-text-primary font-semibold">
              <h1 className="w-full max-w-[800px] mx-auto">Who !?</h1>
              <p className="w-full max-w-[800px] mx-auto text-2xl md:text-3xl mt-2 text-text-primary/80 font-medium">i'm yassin, a passionat web developer from morocco, making custom coded websites that combine functionality and looks to deliver the best digital experiences.</p>
            </motion.div>


            </section>
        </div>
        </>
    )
}