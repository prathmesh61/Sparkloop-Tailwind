import React from 'react'

const Offer = () => {
    return (
        <section className="bg-darkPurpal">
            <div className='container mx-auto '>
                <div className='text-center p-3 flex justify-center flex-col items-center '>
                    <h1 className='mt-10 md:text-5xl text-3xl  text-white'>Plans that scale with your audience</h1>
                    <p className='text-white max-w-[550px] md:mt-12 mt-8 text-xl  leading-9'> From your first newsletter referral program to<br /> unlocking new growth for a household media brand — there’s a SparkLoop plan that’s perfect for your needs.</p>
                    <div className='flex items-center gap-4 mt-6 mb-8'>
                        <button className='bg-blue text-base text-white py-2 px-5 rounded-md'>Book a call</button>
                        <button className='bg-bgWhite  text-base text-black py-2 px-5 rounded-md'>Start for free</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer