import React from 'react'
import { CgArrowTopRightO } from 'react-icons/cg'

const Referral = () => {
    return (
        <section className='mt-28 container mx-auto p-2'>
            <div className='flex justify-center gap-7 flex-wrap items-center p-4 w-full'>
                <div>
                    <h2 className='text-3xl mb-4 leading-10'><span className='text-blue font-bold'>Grow organically</span> with a newsletter<br /> referral program</h2>
                    <p className='mb-4 text-xl text-gray-500 italic leading-8'>Reward your audience for sharing with friends — and watch<br /> your newsletter grow 20-200% faster. It couldn't be<br /> easier...</p>
                    <ul className='flex flex-col gap-5 text-xl mb-7'>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Integrate with your email platform in two-clicks</li>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Automatically fulfil digital and physical rewards</li>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Show a beautiful, in-email referral section</li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-blue text-white py-2 px-5 rounded-md'>Find Out More</button>
                        <button className='bg-white text-black border-2 border-blue py-2 px-5 rounded-md'>Get Started</button>
                    </div>
                </div>
                <div>
                    <img width={530} src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43fed4e0f3901d1fbeb51_referral%20section.png" alt="Referral" />
                </div>
            </div>
        </section>
    )
}

export default Referral