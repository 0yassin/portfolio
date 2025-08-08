'use client'
import {motion, scale} from 'motion/react'
import Animlink from './Animlink'

interface props {
  animate?: boolean;
}

export default function Navbar({animate=true}:props){

  
    return(
      
      <motion.nav initial={ animate? {y:-30, opacity: 0} : {y:0, opacity:1}} animate={{y:0, opacity:1}} transition={{delay:0.9, duration:0.2}} className=" text-base md:text-lg h-20 md:mx-auto mx-4 max-w-[800px] pl-6 md:pl-12 flex justify-between  items-center border-[1.3px] border-primary/60 rounded-full bg-transparent py-2">
        <div className="flex h-full items-center gap-4 md:gap-12 text-text-primary/60 text-base  ">


          <Animlink href='/'>Home</Animlink>
          
          <Animlink href='/'>About</Animlink>
        </div>
        <motion.button  className="max-[430px]:px-6  overflow-hidden relative group inline-flex justify-center items-center bg-primary text-text-secondary font-semibold h-full px-12 rounded-full mr-2 hover:bg-text-primary  cursor-pointer transition-all">
            <span className="transition-all duration-200 group-hover:-translate-x-5">
                Contact me
            </span>
            <span className="absolute right-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">              
              <img className="h-6 w-6 -rotate-90" src={'/downarrow.svg'} />
            </span>
        </motion.button>

      </motion.nav>
    )




    
}