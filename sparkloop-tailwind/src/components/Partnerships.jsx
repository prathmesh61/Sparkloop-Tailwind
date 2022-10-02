import React from 'react'
import { CgArrowTopRightO } from 'react-icons/cg'

const Partnerships = () => {
    return (
        <section className='mt-28 container mx-auto p-2'>
            <div className='flex justify-center gap-7 flex-wrap items-center p-4 w-full'>
                <div>
                    <h2 className='text-3xl mb-4 leading-10'><span className='text-blue font-bold'>Unlock next-level growth </span> with partnerships</h2>
                    <p className='mb-4 text-xl text-gray-500 italic leading-8'>From sponsoring other newsletters to influencers and<br /> ambassador programs — you’ll save hours and boost<br /> performance by up to 3x with our suite of partnership tools.</p>
                    <ul className='flex flex-col gap-5 text-xl mb-7'>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' />Accurately track performance and ROI</li>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Discover thousands of potential partners</li>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Use our "magic" links for one-click opt-ins</li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-blue text-white py-2 px-5 rounded-md'>Find Out More</button>
                        <button className='bg-white text-black border-2 border-blue py-2 px-5 rounded-md'>Talk to an expert</button>
                    </div>
                </div>
                <div>
                    <img width={530} src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c55dcf4af507021a3cc97b_partner%20network.png" alt="Partnership" />
                </div>
            </div>
        </section>
    )
}

export default Partnerships