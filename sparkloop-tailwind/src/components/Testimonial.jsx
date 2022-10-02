import React from 'react'

const Testimonial = ({ client }) => {
    console.log(client);
    return (
        <section className='mt-28 container mx-auto'>
            <div className='bg-lightPink flex justify-center items-center gap-12 flex-wrap  p-6'>
                <img className='w-80' src={client.img} alt="client" />
                <div className='flex flex-col justify-start '>
                    <p className='md:w-[600px] w-[400px] text-xl'>{client.des}</p>
                    <div className='flex flex-col justify-start mt-16'>
                        <span className='text-2xl'>{client.name}</span>
                        <span className='italic text-sm bg-blue px-4 w-max text-white'>{client.from}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial