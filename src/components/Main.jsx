import React from 'react'
import { RecentOrders } from './RecentOrders'
import { Reviews } from './Reviews'
import { Socials } from './Socials'

export const Main = () => {
    return (
      <div className='w-screen flex flex-col m-auto animate__animated animate__fadeInLeft '>
        <div className='block m-auto w-4/6   border-opacity-50 -mt-16 sm:-mt-12 md:-mt-20 ' >
            <p className='font-subtitle  text-xl md:text-3xl lg:text-4xl flex justify-center p-0 text-blue-600'> Recently delivered orders... </p>

            <RecentOrders/>
        </div>
        
        <div className='block m-auto w-4/6 mt-20 h-screen border-opacity-50'>
        <p className='font-subtitle text-4xl flex w-full justify-center p-0 text-blue-600'> Customers Reviews... </p>
            <Reviews/>   

            <Socials/>         
        </div>

      </div>
        
    )
}
