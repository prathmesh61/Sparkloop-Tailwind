import React from 'react'
import logo from '../assets/sparkLogo.png'

const Footer = () => {
    return (
        <section className='bg-darkBlack'>
            <div className="container mx-auto p-4 ">
                <div className='flex items-center justify-center mt-10'>
                    <img className='w-48 text-center' src={logo} alt="logo" />
                </div>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <ul className='mt-24  flex items-start justify-center flex-col text-white'>
                        <h3 className='text-sm font-bold mb-1'>Features</h3>
                        <li>Rewards</li>
                        <li>Giveaway</li>
                        <li>Referral Hub</li>
                        <li>Analytics</li>
                        <li>Integrations</li>
                    </ul>
                    <ul className='mt-24 flex items-start justify-center text-white flex-col'>
                        <h3 className='text-sm font-bold mb-1'>Resources</h3>
                        <li>Publisher Stories</li>
                        <li>Rewards Library</li>
                        <li>Referral Hub</li>
                        <li>Referral Universit</li>
                    </ul>
                    <ul className='mt-24 flex items-start justify-center text-white flex-col'>
                        <h3 className='text-sm font-bold mb-1 '>Compare</h3>
                        <li>Friendbuy</li>
                        <li>Growsurf</li>
                        <li>Viral Loops</li>

                    </ul>
                    <ul className='mt-24 flex items-start justify-center text-white flex-col'>
                        <h3 className='text-sm font-bold mb-1'>Free Tools</h3>
                        <li>Magic Links</li>
                        <li>Proof</li>
                        <li>Reaction</li>

                    </ul>
                </div>
                <div className='text-center mt-16 '>
                    <p className='text-white text-sm'>Copyright © 2022 SparkTech Enterprises Ltd. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer