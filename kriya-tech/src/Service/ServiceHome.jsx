import React from 'react';

const ServiceHome = () => {
    const imageStyle = {
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0)'
    };

    return (
        <div className='relative'>
            <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-screen md:h-[670px] rounded-b-3xl object-cover opacity-75"
                style={imageStyle}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-white text-6xl font-bold">Our <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-6xl'>Services</span> </p>
                <p className='mt-5 w-[350px] text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae totam distinctio rerum quisquam? Omnis itaque, pariatur enim laborum provident eveniet?</p>
            </div>
        </div>
    );
};

export default ServiceHome;
