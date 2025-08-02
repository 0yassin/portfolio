'use client'
import { easeInOut, motion, Variants } from 'framer-motion'

interface AnimLinkProps {
  children: React.ReactNode
  href: string
}

const slideVariants: Variants = {
  initial: { y: 0 },
  hovered: {
    y: '-100%',
    scale:0,
    transition:{
        duration:0.2
    }
  },
}

export default function AnimLink({ children, href }: AnimLinkProps) {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      {/* Top copy (slides up out of view) */}
      <motion.div
        variants={slideVariants}
        className="block"
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          initial: { y: '100%' },
          hovered: {
            y: 0,
            transition:
            {
                duration:0.2,
                
            }
          },
        }}
        className="absolute inset-0 block"
      >
        {children}
      </motion.div>
    </motion.a>
  )
}
