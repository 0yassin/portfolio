export default function Navbar(){
    return(
      <nav className=" h-20 mx-auto max-w-[800px] pl-12 flex justify-between items-center border-[2.5px] border-[#0000006e] rounded-full bg-transparent py-2">
        <div className="bg-red-400s flex h-full items-center gap-12 text-[#000000CC] ">
          <a>Home</a>
          <a>About</a>
        </div>
        <button className="bg-primary text-white font-normal h-full w-58 rounded-full mr-2 hover:bg-primary/90 transition cursor-pointer">
            Contact Me
        </button>

      </nav>
    )

}