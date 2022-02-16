import React from 'react'
import { useMediaQuery } from 'react-responsive'
export const Socials = () => {

    const isScreenSmall = useMediaQuery({ query: '(max-width: 870px)' });


    return (
        <div className=' w-full mt-32 h-1/3 flex flex-col m-auto  '>
            
            <p className='font-subtitle text-center text-3xl md:text-4xl flex justify-center p-0 text-blue-600'> Follow us in our social media </p>



            <div className='flex flex-row w-full h-5/6 m-auto '>
                <div className='flex flex-row w-full justify-between items-right p-0 md:justify-evenly relative top-1/3 '>
                   <a href='#!' target='_blank'><i className="fab fa-instagram-square w-16 h-16 text-6xl text-pink-500 bg-white cursor-pointer"><span className='text-xs capitalize'>{ (!isScreenSmall) && '@BakeryShop' }</span></i></a>
                    <a href='#!' target='_blank'>
                    <i className="fab fa-facebook-square w-16 h-16 text-6xl text-blue-700 cursor-pointer"><span className='text-xs capitalize ml-1'>{ (!isScreenSmall) && 'Bakery_Shop' }</span></i>
                    </a>
                    <a href='#!' target='_blank'>
                    <i className="fab fa-twitter-square w-16 h-16 text-6xl text-blue-400 cursor-pointer"><span className='text-xs capitalize'>{ (!isScreenSmall) && '@BakeryShopOfficial'}</span></i>
                    </a>
                </div>
            </div>

            <p className='font-Monserrat flex w-full text-center justify-center'>
                This website has been designed by Aubis Sanchez
            </p>
        </div>
    )
}
