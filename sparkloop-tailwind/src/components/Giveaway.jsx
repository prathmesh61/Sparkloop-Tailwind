import React from 'react'
import { CgArrowTopRightO } from 'react-icons/cg'


const Giveaway = () => {
    return (
        <section className='mt-28 container mx-auto p-2'>
            <div className='flex justify-center gap-7 flex-wrap items-center p-4 w-full'>
                <div>
                    <h2 className='text-3xl mb-4 leading-10'><span className='text-blue font-bold'>Boost growth</span> with a giveaway</h2>
                    <p className='mb-4 text-xl text-gray-500 italic leading-8'>Use prize-draws and giveaways to convert your audience<br /> on other platforms into email subscribers. Or add FOMO to<br /> your referral program with a time-limited giveaway.</p>
                    <ul className='flex flex-col gap-5 text-xl mb-7'>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Leaderboard & sweepstake options</li>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Automatically pick the winner(s)</li>
                        <li className='flex items-center gap-2'><CgArrowTopRightO className='text-blue' /> Industry-leading anti-fraud protection</li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-blue text-white py-2 px-5 rounded-md'>Find Out More</button>
                        <button className='bg-white text-black border-2 border-blue py-2 px-5 rounded-md'>Get a demo</button>
                    </div>
                </div>
                <div>
                    <img width={530} src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af37583263c71048994be3_giveaways%401x.jpg" alt="Giveaway" />
                </div>
            </div>
        </section>
    )
}

export default Giveaway