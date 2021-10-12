import React from 'react'
import brand from '../img/brand.png'
import { useMediaQuery } from 'react-responsive'


export const NavBar = ({ setScreen, setShowMobileMenu }) => {


    const btn= 'bg-white text-pink-400 font-bold py-2 px-5 hover:bg-pink-400 hover:text-white focus:border focus:bg-pink-400 focus:text-white transition duration-300 ease-in'

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleMenu = () => {
        setShowMobileMenu( true );
    }

    return (
        <div className='w-screen h-full sm:h-75vh md:h-screen '>
            <div className='w-full bg-navbar-bg bg-cover bg-center h-4/6'>
                <div className='
                flex flex-col p-10 bg-white bg-opacity-80 w-80pw md:w-4/6 lg:w-3/6 xl:w-2/5 m-auto rounded-sm h-4/5 sm:h-3/5 shadow-xl   relative top-1/2 transform -translate-y-1/2'>

{/*  relative h-80ph h-3/4 l  top-2/4 justify-center  */}
                    <img src={brand} alt='logo-brand-bakery-desserts' className='w-20 h-20 md:w-24 md:h-24 m-auto' />
                    <h1 className='font-Monserrat text-blue-700 text-center mt-2 text-2xl md:text-3xl lg:text-5xl  '><span className='text-pink-500'>Bakery </span>Shop</h1>
                    <p className='font-subtitle block w-5/4 text-center m-auto  md:text-xl lg:text-2xl xl:w-full lg:w-3/4 lg:text-center'>
                        We are <span className='text-pink-600'>elegants </span>, we are <span className='text-pink-600'>professionals </span>  we are <span className='text-blue-800'>flavor </span>
                    </p>
                </div>
            </div>
            
           {
               (!isTabletOrMobile ? 
                 (   <div className='flex w-3/5 m-auto  border-b-2 border-grey-200 '>
                        <ul className='flex flex-row m-auto'>
                            <li>
                                
                                <button 
                                    className={btn}
                                    onClick={ () => setScreen('main') }
                                > 
                                    Main 
                                </button>
                                
                            </li>
                            <li>
                                <button 
                                    className={btn}
                                    onClick={ () => setScreen('gallery') }

                                > 
                                   Gallery 
                                </button>
                            </li>
                            <li>
                                <button 
                                    className={btn}
                                    onClick={ () => setScreen('products') }

                                > 
                                    Products 
                                </button>
                            </li>

                            <li>
                                <button 
                                    className={btn}
                                    onClick={ () => setScreen('review') }

                                > 
                                    Write a Review
                                </button>
                            </li>
                            
                        </ul>
                    </div>
                 )
                 :(
                     <div className='flex justify-center  text-xl text-pink-400   m-auto  border-b-2 border-grey-200'>
                        <i 
                            className=" p-3 hover:bg-pink-400 hover:text-white fas fa-bars"
                            onClick={ handleMenu }
                        ></i>
                        
                     </div>
                 )
           
                )
           }

          
        </div>
    )
}
