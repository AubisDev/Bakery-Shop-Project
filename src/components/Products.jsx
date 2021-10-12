import React, { useState } from 'react'
import { GetMenuItems } from '../helper/menuItems';
import { MenuItems } from './MenuItems';
import "animate.css"

export const Products = () => {

    const menu = [
        {imgNumber: '1', menuItem: 'Cakes'},
        {imgNumber: '2', menuItem: 'Cupcakes'},
        {imgNumber: '3', menuItem: 'Donuts'},
        {imgNumber: '4', menuItem: 'Cookies'}
    ]

    const btn='group rounded-b-lg bg-cover bg-center text-white w-1/4 h-full shadow-lg  focus:bg-pink-400 focus:text-white span:text-60xl'

    const btnSpan = 'block font-semibold sm:font-normal py-3 sm:px-4 sm:py-1 md:px-8 md:py-4 lg:px-12 lg:py-8  xl:px-16 xl:py-12 border-2 bg-black bg-opacity-60 text-xs sm:text-base md:text-lg border-transparent rounded-sm transition duration-300 ease-in-out hover:bg-opacity-90 hover:bg-pink-500 shadow-lg focus:border focus:bg-pink-400 focus:text-white';

    const [Category, setCategory] = useState([]);
    const [activeCategory, setActiveCategory] = useState('')

    const handleMenuCategory = ( option ) =>{

        setCategory( GetMenuItems( option ) );
        setActiveCategory( option )
    }

        /**
     * PurgeCSS:
     * bg-menu-1
     * bg-menu-2
     * bg-menu-3
     * bg-menu-4

     *

    */


    return (
        <div className='h-screen w-4/5 animate__animated animate__fadeInRight -mt-20 sm:-mt-12 md:-mt-20'>
            <div className='flex flex-col w-90pw h-screen m-auto  font-Monserrat '>
                <div className='flex flex-row h-1/4 w-full'>
                    {menu.map( ( m, index ) => (
                        <button 
                            className={`${btn} bg-menu-${m.imgNumber} `}
                            onClick={ () => handleMenuCategory(`${m.menuItem}`) }
                            key={ index }
                        >
                            <span 
                                className={`${btnSpan} `}
                            >{m.menuItem}</span>
                        </button>
                     ))}
                </div>
            
                { ( Category.length === 0 ) 
                    ? (
                        <div className='h-3/4 w-3/4 m-auto  '>
                            <p className='relative top-1/2 transform -translate-y-1/2 text-center text-2xl text-pink-500 p-5 border-t-2 border-b-2 border-pink-500 '>
                                Select an option from the menu above
                            </p>
                        </div>
                    )

                    : (
                        <div className='border-l border-r border-gray-500 border-opacity-70 w-2/4 m-auto h-3/4 w-full md:w-4/5 lg:w-3/4 xl:w-3/5 relative top-1/2 transform -translate-y-2/3 bg-white '>
                            <p className='text-3xl w-1/2 m-auto border-b-2 border-pink-600 tracking-widest pt-3 flex justify-center text-purple-800 uppercase'> {activeCategory} </p>
                            <div className='  h-3/4 w-full  grid grid-rows-4 gap-8 mt-6 '>

                               <div className=''>
                                {Category.map( item => (
                                        <MenuItems id={item.id} key={item.id} title={item.title} description={item.description} price={item.precio} activeCategory={activeCategory} />
                                    ) )
                                    }
                               </div>
                            </div>
                        </div>
                    )

                }
                        


           


            </div>
        </div>
    )
}
