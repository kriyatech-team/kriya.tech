import React from 'react';

const topics = [
    {
        title: 'Web Development',
        image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid, consequatur totam quia provident alias distinctio laudantium, porro, necessitatibus iure. Explicabo corrupti optio beatae eos cupiditate veniam eum illum exercitationem, omnis natus doloribus asperiores impedit qui mollitia nisi."
    },
    {
        title: 'UI Design',
        image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid, consequatur totam quia provident alias distinctio laudantium, porro, necessitatibus iure. Explicabo corrupti optio beatae eos cupiditate veniam eum illum exercitationem, omnis natus doloribus asperiores impedit qui mollitia nisi."
    },
    {
        title: 'Mobile Development',
        image: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid, consequatur totam quia provident alias distinctio laudantium, porro, necessitatibus iure. Explicabo corrupti optio beatae eos cupiditate veniam eum illum exercitationem, omnis natus doloribus asperiores impedit qui mollitia nisi."
    },
    {
        title: '3D Design',
        image: 'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid, consequatur totam quia provident alias distinctio laudantium, porro, necessitatibus iure. Explicabo corrupti optio beatae eos cupiditate veniam eum illum exercitationem, omnis natus doloribus asperiores impedit qui mollitia nisi."
    },
    {
        title: 'Customer Software Service',
        image: 'https://images.unsplash.com/photo-1581090123456-6405208b0264?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid, consequatur totam quia provident alias distinctio laudantium, porro, necessitatibus iure. Explicabo corrupti optio beatae eos cupiditate veniam eum illum exercitationem, omnis natus doloribus asperiores impedit qui mollitia nisi."
    },
    {
        title: 'Another Service',
        image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur ea aliquid, consequatur totam quia provident alias distinctio laudantium, porro, necessitatibus iure. Explicabo corrupti optio beatae eos cupiditate veniam eum illum exercitationem, omnis natus doloribus asperiores impedit qui mollitia nisi."
    },
];

const OurServices = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-8 px-5 mx-auto mt-4 bg-[#f3fbfd]">
            {topics.map((topic, index) => (
                <div
                    key={index}
                    className={`pt-3 md:pt-5 max-w-[1240px] mx-auto flex flex-col justify-evenly gap-10 md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                        }`}
                >
                    <div className="md:w-1/3">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-2 text-[#115b9a]">{topic.title}</h2>
                            <p className="text-gray-700 text-justify">{topic.description}</p>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <img src={topic.image} alt={topic.title} className="w-full h-auto md:min-h-[300px] md:min-w-[500px] rounded-sm object-fit" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurServices;
