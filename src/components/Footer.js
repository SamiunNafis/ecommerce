import React from 'react'
import { ImGithub } from 'react-icons/im'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    return(
        <div className='py-20 px-4 flex flex-col gap-6 bg-black text-[#949494] font-titleFont'>
            <h1 className='text-3xl font-bold'>EBazar</h1>
            <span>©EBazar 2015-2023</span>
            <div className='flex gap-4 text-gray-500'>
                <ImGithub className='hover:text-white duration-300' />
                <FaFacebook className='hover:text-white duration-300' />
                <FaTwitter className='hover:text-white duration-300' />
                <FaInstagram className='hover:text-white duration-300' />
            </div>
        </div>
    )
}