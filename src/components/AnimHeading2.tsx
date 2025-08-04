'use client'
import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo } from "react";

interface Props {
  children: string;
  y?: MotionValue<number>;
}

export default function AnimHeading2({ children, y }: Props) {
  const words = children.split(" ");

    const y2 = y ? useTransform(y, (value) => value * 2) : undefined;


  return (
    <div>
          <motion.h1 style={{y:y}} className=" text-6xl mx-32 text-text-primary text-left font-normal">I help brands and businesses level up their online presence</motion.h1>
          <motion.h1 style={{y:y2}} className=" text-6xl mx-32 text-text-primary text-left font-normal">I help brands and businesses level up their online presence</motion.h1>

    </div>

  );
}
