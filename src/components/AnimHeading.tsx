import { motion } from "motion/react";
import React from "react";

interface Props {
  children: string;
  initial_blur?:number;
  blur?: number;
  initial_y?: number;
  spacing?:number;
}

export default function AnimHeading({ children, initial_blur=10, blur=0, initial_y=20, spacing=12 }: Props) {
  return (
    <div>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: `blur(${initial_blur}px)`, opacity: 0, y: initial_y }}
          animate={{ filter: `blur(${blur}px)`, opacity: 1, y: 0 }}
          transition={{ delay: index / 10, duration: 0.5 }}
          className={`mr-3 inline-block`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
