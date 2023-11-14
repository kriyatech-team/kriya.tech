import React from 'react'
import CompanyBg from '../assets/CompanyBg.jpg'

const Company = () => {
    return (
        <>
            <div className="w-full h-screen relative">
                <img src={CompanyBg} alt="" className='absolute inset-0 w-full h-full object-cover opacity-50' />
                <div className='max-w-[1240px] absolute inset-0 flex flex-col justify-center items-center text-white mx-auto'>
                    <div className="text-center max-w-[800px]">
                        <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-5xl md:text-7xl font-bold'>We provide the best IT solutions for you</h1>
                        <p className='text-black max-w-[620px] text-center mx-auto pt-4 text-[17px] tracking-wide'>Quify is an IT solution set of services, software, or hardware bundled together and designed to help businesses manage complex technology operations.</p>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-4">
                            Choose plan
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Company
