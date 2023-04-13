import { React } from 'react'
import {banner} from '../assets/images/index'

export const Banner = () => {
    return(
        <div className='relative w-full h-full'>
            <img src={banner} alt='banner' />
            <div className='bottom-0 w-full h-[50%] z-10 absolute bg-gradient-to-t from-white to-transparent'></div>
        </div>
    )
}