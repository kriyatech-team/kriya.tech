import React from 'react'
import Image from '../assets/image2.png'

const Section = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Image} alt="" className='w-[500px] mx-auto my-4' />
            <div className='text-white flex flex-col justify-center'>
                <p className='text-emerald-600 uppercase font-bold'>Lorem ipsum dolor sit amet.</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit labore aspernatur illum quos nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti adipisci, explicabo incidunt alias fugit in sequi sapiente laboriosam ipsa.</p>
                <button className="bg-stone-500 w-[200px] rounded-md font-md my-6 mx-auto md:mx-0 py-3 font-bold text-white hover:bg-emerald-500 hover:text-black uppercase">Read More</button>   

            </div>

        </div>

    </div>
  )
}

export default Section