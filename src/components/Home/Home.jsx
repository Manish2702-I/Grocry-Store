import React from 'react'
import Navebar from '../Navbar/Navebar'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-300 p-10'>
      <div>
        <Navebar />
        <Hero />
      </div>
    </div>
  )
}

export default Home
