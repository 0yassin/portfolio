'use client'
import {motion, scale} from 'motion/react'
import Animlink from './Animlink'

export default function Navbar(){
    return(
      <motion.nav initial={{y:-30, opacity: 0}} animate={{y:0, opacity:1}} transition={{delay:0.9, duration:0.2}} className=" h-20 md:mx-auto mx-4 max-w-[800px] pl-6 md:pl-12 flex justify-between  items-center border-[1.3px] border-primary/60 rounded-full bg-transparent py-2">
        <div className="flex h-full items-center gap-4 md:gap-12 text-text-primary/60  ">


          <Animlink href='/'>Home</Animlink>
          
          <Animlink href='h'>About</Animlink>
        </div>
        <motion.button  className="max-[430px]:px-6 bg-primary text-text-secondary font-semibold h-full px-12 rounded-full mr-2 hover:bg-text-primary  cursor-pointer transition-all" whileTap={{scale:0.75}}>
            Contact Me
        </motion.button>

      </motion.nav>
    )




    
}