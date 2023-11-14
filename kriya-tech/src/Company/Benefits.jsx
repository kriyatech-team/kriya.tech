import React from 'react'

const Benefits = () => {
    return (
        <div className='bg-[#004050]'>
            <div className='flex flex-col md:flex-row justify-center max-w-[1090px] text-white mx-auto pt-20'>
                <h1 className='text-4xl md:text-5xl tracking-normal md:tracking-wider mx-2'>Here's how Quify can benefits your business.</h1>
                <p className='text-[14px] pt-7 w-full md:w-[800px] px-3'>Customer 360 is the #1 custormer relationship manangement (CRM) platform.There's a best-in-class app for every phase of your customer's journey, from lead to loyality.</p>
            </div>


            <div className="max-w-[1200px] flex justify-center mx-auto gap-14 pt-10 flex-wrap">
                <div className="hover:bg-[#ffe377] bg-[#0a4756] rounded-lg shadow-xl p-6 flex flex-col justify-center gap-6 max-w-[330px] h-auto hover:text-black text-white mb-8 transition duration-150">
                    <div className="">
                        <img
                            src="https://www.freepnglogos.com/uploads/laptop-png/flat-laptop-icon-transparent-png-svg-vector-10.png"
                            alt="Image"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>
                    <hr className="border border-black my-4" /> {/* Line between image and text */}
                    <div className="text-start">
                        <h1 className="text-[18px] font-bold mb-2">Lead customers to happiness</h1>
                        <p className="text-[14px]">
                            Your support helps you provide personalized support when and where customers need it, so customers stay happy.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-[#ffe377] bg-[#0a4756] rounded-lg shadow-xl p-6 flex flex-col justify-center gap-6 max-w-[330px] h-auto hover:text-black text-white mb-8 transition duration-150">
                    <div className="">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                            alt="Image"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>
                    <hr className="border border-black my-4" /> {/* Line between image and text */}
                    <div className="text-start">
                        <h1 className="text-[18px] font-bold mb-2">Lead customers to happiness</h1>
                        <p className="text-[14px]">
                            Your support helps you provide personalized support when and where customers need it, so customers stay happy.
                        </p>
                    </div>
                </div>

                <div className="hover:bg-[#ffe377] bg-[#0a4756] rounded-lg shadow-xl p-6 flex flex-col justify-center gap-6 max-w-[330px] h-auto hover:text-black text-white mb-8 transition duration-150">
                    <div className="">
                        <img
                            src="https://cdn.logojoy.com/wp-content/uploads/20200407105103/newnewnews-logo.png"
                            alt="Image"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>
                    <hr className="border border-black my-4" /> {/* Line between image and text */}
                    <div className="text-start">
                        <h1 className="text-[18px] font-bold mb-2">Lead customers to happiness</h1>
                        <p className="text-[14px]">
                            Your support helps you provide personalized support when and where customers need it, so customers stay happy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
