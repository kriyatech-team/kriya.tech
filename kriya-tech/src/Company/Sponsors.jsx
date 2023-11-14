import React from 'react'

const Sponsors = () => {

    const companies = [
        { name: 'Google', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07bn5IIj0KHyIPsA0FknmZzUxDslnukNSlg&usqp=CAU' },
        { name: 'Meta', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAM0QA9oaE1mwuD2QmVCQx3UMl4lc-ptoiPQ&usqp=CAU', },
        { name: 'Twitter', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70bUvfFTEzNcUlEe2TOf7xLTX4Ws5OwUx_Q&usqp=CAU', },
        { name: 'ChatGPT', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6Bn4TTaVvJGbxLh6PFXi4SOl_Na-zRvcOg&usqp=CAU', },
        { name: 'ChatGPT', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CjhTZ5mVh-6nMnZ2QHrAr8bU8TPr_4taaQ&usqp=CAU', },
    ];
    return (
        <div className="text-center my-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Our Collaborations</h2>
            <div className="flex items-center justify-center flex-wrap">
                {companies.map((company, index) => (
                    <div className="mx-4 md:mx-8 my-4 md:my-0">
                        <img src={company.logo} alt={company.name} className="h-12 md:h-16 lg:h-20" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors
