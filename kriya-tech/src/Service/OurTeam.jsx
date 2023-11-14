import React from 'react'

const OurTeam = () => {
    const topics = [
        {
            title: 'Front End Developers',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
        {
            title: 'Mobile Developer',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
        {
            title: '3D Designer',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
        {
            title: 'UX/UI Designer',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
        {
            title: 'Backend Developer',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
        {
            title: 'QA Engineer',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
        {
            title: 'Dev Ops Engineer',
            image: 'https://cdni.iconscout.com/illustration/premium/thumb/male-frontend-developer-8602719-6817791.png?f=webp',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid."
        },
    ]
    return (
        <div className="py-10">
            <div>
                <h1 className="text-center text-5xl"><span className='text-teal-400'>Our</span> Team</h1>
            </div>
            <div className="max-w-[1340px] mx-auto mt-4 flex flex-wrap justify-center items-start gap-8">
                {/* First line with 4 cards */}
                {topics.slice(0, 4).map((item, index) => (
                    <div key={index} id={index} className="w-72 bg-white rounded-lg shadow-md p-4">
                        <h1 className="text-xl font-bold mb-2 text-center text-[#407bae]">{item.title}</h1>
                        <img src={item.image} alt="Team member" className="w-24 rounded-lg h-24 mx-auto" />
                        <p className="text-gray-700 mt-2 text-center">{item.description}</p>
                    </div>
                ))}
                {/* Second line with 3 cards */}
                {topics.slice(4, 7).map((item, index) => (
                    <div key={index} id={index} className="w-72 bg-white rounded-lg shadow-md p-4">
                        <h1 className="text-xl font-bold mb-2 text-center text-[#407bae]">{item.title}</h1>
                        <img src={item.image} alt="Team member" className="w-24 rounded-lg h-24 mx-auto" />
                        <p className="mt-2 text-center">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam
