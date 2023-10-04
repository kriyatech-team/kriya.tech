import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className="font-[poppins] font-bold text-3xl cursor-pointer text-emerald-500 w-full ">
                KriyaTech
                </h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorum tempora reiciendis quisquam accusamus asperiores, assumenda laborum a maiores vitae voluptates nihil consequatur, ea eaque laboriosam obcaecati expedita sunt magni?</p>

                <div className='flex justify-between md:w-[75%] my-6 '>
                    <FaGithubSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30} />
                    <FaTwitter size={30}/>
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-md text-gray-400 uppercase'>Lorem.</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>

                    </ul>
                </div>

            

            
                <div>
                    <h6 className='font-md text-gray-400 uppercase'>Lorem.</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>

                    </ul>
                </div>

        
                <div>
                    <h6 className='font-md text-gray-400 uppercase'>Lorem.</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>

                    </ul>
                </div>

            
           
                <div>
                    <h6 className='font-md text-gray-400 uppercase'>Lorem.</h6>
                    <ul>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>
                        <li className='py-2 text-sm'>Lorem, ipsum.</li>

                    </ul>
                </div> 

            </div>

            


        </div>

    </div>
  )
}

export default Footer

  
