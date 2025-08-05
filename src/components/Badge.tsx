import { MotionValue } from "motion"
import { motion, useScroll, useTransform } from "motion/react";
import { Ref } from "react";

interface props{
    children: React.ReactNode
    y: MotionValue;
    icon: string;
    

}

export default function Badge({children, y, icon}:props){






    return(
        <motion.div style={{y:y}} className="flex justify-start gap-6 font-semibold bg-badge py-4 px-6 text-center rounded-[8px] border-transparent border-2 hover:border-primary transition-colors self-center items-center cursor-pointer">
            <img className="w-12 h-12 " src={icon} />
            {children}
        </motion.div>
    )

}