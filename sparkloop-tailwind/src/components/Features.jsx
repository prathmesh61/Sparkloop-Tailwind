import React from 'react'
import { FeaturesData } from '../common/FeaturesData.jsx'

const Features = () => {
    return (
        <section className="mt-20 bg-pink p-4">
            <div className='flex justify-center flex-col items-center container mx-auto mt-28 mb-36'>
                <div className='flex justify-center flex-col items-center gap-4'>
                    <h2 className='text-4xl '>"The <span className='text-blue text-4xl font-bold'>no-brainer</span> choice"</h2>
                    <p className='text-xl italic font-normal leading-9'>When you choose SparkLoop over other solutions, you'll<br /> grow <span className='text-blue'>2.3x faster, spend 3.7x</span> less per referral, and <span className='text-blue'>save<br /> hundreds of hours</span> wasted on boring manual work.</p>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-blue text-white py-2 px-5 rounded-md'>Find Out More</button>
                        <button className='bg-white text-black border-2 border-blue py-2 px-5 rounded-md'>Talk to an expert</button>
                    </div>
                </div>

                <div className='flex flex-wrap  justify-center items-center gap-6 mt-10 '>
                    {FeaturesData.map((item, idx) => (
                        <div className='bg-white p-8  flex flex-col  items-start gap-2 w-[500px] rounded-lg'>
                            <img className='md:h-[400px] md:w-[460] h-[350px] w-[400]' src={item.img} alt="" />
                            <div className='flex flex-col gap-2 p-5'>
                                <h3 className='font-bold text-xl'>{item.title}</h3>
                                <p className='w-[400px]'>{item.des}</p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Features