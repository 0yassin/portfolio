'use client'
import {motion, scale} from 'motion/react'
import Animlink from './Animlink'

export default function Navbar(){
    return(
      <motion.nav initial={{y:-30, opacity: 0}} animate={{y:0, opacity:1}} transition={{delay:0.9, duration:0.2}} className=" h-20  mx-auto max-w-[800px] pl-12 flex justify-between items-center border-[2.5px] border-primary rounded-full bg-transparent py-2">
        <div className="flex h-full items-center gap-12 text-text-primary ">


          <Animlink href='/'>Home</Animlink>
          
          <Animlink href='h'>About</Animlink>
        </div>
        <motion.button  className="bg-primary text-text-secondary font-semibold h-full w-58 rounded-full mr-2 hover:bg-text-primary  cursor-pointer transition-all" whileTap={{scale:0.75}}>
            Contact Me
        </motion.button>

      </motion.nav>
    )




    
}