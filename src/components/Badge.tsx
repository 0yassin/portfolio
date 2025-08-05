'use client'

import { MotionValue } from "motion"
import { motion, useScroll, useTransform } from "motion/react";
import { Ref, useEffect, useState } from "react";

interface props{
    children: React.ReactNode
    y: MotionValue;
    icon: string;
    screen_width: number;
    

}

export default function Badge({children, y, icon, screen_width}:props){






    return(
        <motion.div style={screen_width <= 768? {y:0} : {y:y}} className="flex justify-start gap-6 font-semibold border-1 border-primary/20 bg-badge py-4 px-6 text-center rounded-[8px] hover:border-primary transition-colors self-center items-center cursor-pointer">
            <img className="w-12 h-12 " src={icon} />
            {children}
        </motion.div>
    )

}