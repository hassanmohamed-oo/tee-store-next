import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
        <div className='w-full md:h-screen flex flex-col md:flex-row justify-center items-center md:items-end  ' id='about'>
        <Image alt="" width={350} height={300} src="/data/download1 (9).png" className='md:w-[350px] w-full'/>
        <div className='w-full px-8 pb-32 md:p-0 md:w-2/3 md:h-screen text-center flex justify-center items-center'>
          <p className=' text-base md:text-3xl font-normal tracking-wider'>"Tee Store is an online streetwear brand, offering a modern appearance and high-quality materials for young consumers. We prioritize a unique shopping experience, ensuring seamless user interactions on our website and social media platforms. Explore our trendy tees with customizable designs, expressing your individual style through our exclusive collection. Shop now for a fashion journey tailored just for you!"</p>
        </div>
      </div>
    </div>
  )
}

export default About