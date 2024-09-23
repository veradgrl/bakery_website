import React from 'react'
import '../index.css';


export default function Home2() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-[-5px] bg-custom-image bg-cover bg-center "></div>

      <div className='absolute grid grid-rows-3 grid-flow-col gap-x-20 justify-center items-center px-40 bg-[#EDE8DC] bg-opacity-10 shadow-2xl'>

        <div className=' hover:scale-105 hover:drop-shadow-light text-stone-800 text-[70px] row-span-1  col-span-2 font-hand-write-2 mb-[-30px] text-center'>my name is</div>
        <div className='hover:scale-105 hover:drop-shadow-light text-stone-800 text-[140px] row-span-2 col-span-2 font-bold mt-[-30px] text-center'>V E R A</div>
        <div className=' row-span-1 col-span-1 justify-center items-center '><p className=' text-stone-800 text-lg text-center font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in tempore accusamus fugiat, natus sunt nostrum mollitia soluta atque reiciendis!</p></div>
        <div className=' row-span-1 col-span-1 justify-center items-center '><p className='text-stone-800 text-lg text-center font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in tempore accusamus fugiat, natus sunt nostrum mollitia soluta atque reiciendis!</p></div>
        <div className='row-span-1 col-span-1 justify-center items-center '><p className='text-stone-800 text-lg text-center font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in tempore accusamus fugiat, natus sunt nostrum mollitia soluta atque reiciendis!</p></div>
      </div>


    </div>
  );
}

