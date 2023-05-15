import React from 'react'

const Header = () => {
  return (
    <section className='text-white mt-[125px] p-2'>
       
        
       <section className='px-2 py-10 grid place-items-center relative'>
        <h2 className='text-3xl font-bold mb-10 md:mt-[40px] md:ml-[150px] uppercase md:w-[600px]'>HI! I'm Esneider Miranda. A full Stack developer based in colombia.</h2>

        <div className='grid place-items-center md:flex md:justify-center md:items-center md:gap-3' >
        <button className='mb-5 md:mb-0 bg-gray-700 py-2 px-12 rounded-3xl '>Hire me</button>
       <button className="py-2 px-7 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 " >Download CV</button>
        </div>
        <div className='hidden md:block absolute'>
          <img  className='absolute max-w-[300px] top-[20px] left-[200px] z-30' src="/images/planets.png" alt="" />
        </div>
        <div className='hidden md:block absolute'>
        <img className='absolute max-w-[500px] top-[-90px] left-[40px]' src="/images/base.png" alt="" />
        </div>
       </section>

    </section>
  )
}

export default Header