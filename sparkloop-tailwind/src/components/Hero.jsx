import React from 'react'

const Hero = () => {
    return (
        <main className='h-[140vh] md:h-[100vh]  bg-pink'>
            <div className='flex justify-center items-center flex-col '>
                <div className='text-center p-3 flex justify-center flex-col items-center mt-12'>
                    <h1 className='md:text-5xl text-3xl font-bold'>The #1 newsletter growth platform</h1>
                    <p className='max-w-[550px] md:mt-12 mt-8 md:text-2xl text-xl md:font-medium leading-9'> <span className='md:text-2xl text-xl font-medium text-blue '>The world’s best newsletter operators</span> and media brands rely on SparkLoop to grow their audience faster and more affordably. You should too.</p>
                    <div className='flex items-center gap-2 mt-6 mb-8'>
                        <button className='bg-blue text-base text-white py-2 px-5 rounded-md'>Book a call</button>
                        <button className='bg-bgWhite text-base text-black py-2 px-5 rounded-md'>Start for free</button>
                    </div>
                </div>
                <img className='md:w-[30rem] md:h-[35rem] w-[20rem] h-[15rem] object-cover overflow-hidden' src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img-p-1600.png" alt="Hero_img" />
            </div>
        </main>
    )
}

export default Hero