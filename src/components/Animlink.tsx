
// credits: https://www.hover.dev/components/links

import React from "react";
import { motion } from "framer-motion";


const DURATION = 0.25;
const STAGGER = 0.025;

interface props {
  children: string;
  href: string;
}

export default function Animlink({ children, href }: props){
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="hover:text-text-primary relative block overflow-hidden whitespace-nowrap text-base md:text-xl "
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};