import React from 'react'
import Grocery from "../../assets/grocery.png"
import Button from '../Button/Button'
import Title from '../Title/Title'

const Hero = () => {
  return (
    <>
    <div className='mt-20 flex items-center'>
      <div className=' flex-1'>
        <span className='bg-zinc-400 rounded-full px-4 py-2 items-center text-red-400'>Export Best Quality...</span>
        <h1 className='mt-5 text-6xl font-bold'>Tasty Organic</h1>
        <h1 className='text-6xl font-bold mt-2'><span className='text-red-500'>Fruits</span> & <span className='text-red-500'>Veggies</span></h1>
        <h1 className='mt-2 text-6xl font-bold'>In Your City</h1>
        <p className='mt-5 text-teal-500'>Bred for a high content of benificial substances. our prouducts are all freshand healthy</p>
        <div><Button content = "Shop Now" /></div>
      </div>
      <div className='flex-1 ml-7'>
        <img className="object-contain items-center h-[62vh]" src={Grocery} />
      </div>
    </div>
    <Title name = "Shop by Catogary" />
    </>
  )
}

export default Hero
