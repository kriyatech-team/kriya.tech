import React from 'react'
import CardImages from '../assets/image3.png'
import CardImages1 from '../assets/image4.png'


const Cards = () => {
  return (
   
    <div class='w-full py-[10rem] px-4'>
        <div class='max-w-[1200px] mx-auto grid md:grid-cols-4 gap-8'>
            <div class='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img class='w-full max-w-full object-fit-cover mx-auto' src={CardImages} alt='' />
                <h2 class='text-2xl font-bold text-center py-3'>Web Development</h2>
                <p class='text-center text-lg break-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, delectus!</p>
                <button class='bg-stone-500 w-[200px] rounded-md font-md my-6 mx-auto py-3 font-bold text-white hover:bg-emerald-500 hover:text-black uppercase'>View More</button>
            </div>

            <div class='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img class='w-full max-w-full object-fit-cover mx-auto' src={CardImages1} alt='' />
                <h2 class='text-2xl font-bold text-center py-3'>Web Development</h2>
                <p class='text-center text-lg break-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, delectus!</p>
                <button class='bg-stone-500 w-[200px] rounded-md font-md my-6 mx-auto py-3 font-bold text-white hover:bg-emerald-500 hover:text-black uppercase'>View More</button>
            </div>

            <div class='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img class='w-full max-w-full object-fit-cover mx-auto' src={CardImages} alt='' />
                <h2 class='text-2xl font-bold text-center py-3'>Web Development</h2>
                <p class='text-center text-lg break-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, delectus!</p>
                <button class='bg-stone-500 w-[200px] rounded-md font-md my-6 mx-auto py-3 font-bold text-white hover:bg-emerald-500 hover:text-black uppercase'>View More</button>
            </div>

            <div class='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img class='w-full max-w-full object-fit-cover mx-auto' src={CardImages1} alt='' />
                <h2 class='text-2xl font-bold text-center py-3'>Web Development</h2>
                <p class='text-center text-lg break-words'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, delectus!</p>
                <button class='bg-stone-500 w-[200px] rounded-md font-md my-6 mx-auto py-3 font-bold text-white hover:bg-emerald-500 hover:text-black uppercase'>View More</button>
            </div>

            
        </div>
        
    </div>
  )
}

export default Cards