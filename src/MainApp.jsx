import React, { useReducer, useState } from 'react'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'
import { Main } from './components/Main'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'

export const MainApp = () => {

    const [screen, setScreen] = useState('');
    const [showMobileMenu, setShowMobileMenu] = useState(false);


    const showScreen = ( screen )=>{

  
        if( screen === 'gallery' ){
            return (
                <div className=' w-screen flex justify-center items-center m-auto '>
                    <Gallery/>
                </div>
            )
        }
        else if( screen === 'products'){
            return (
                <div className='w-screen flex justify-center items-center m-auto'>
                    <Products/>
                </div>
            )
        }
        else if( screen === 'review'){
            return (
                <div className=' w-screen h-screen flex justify-center items-center m-auto mb-10'>
                    <Contact/>
                </div>
            )
        }
        return (

            <div className='w-screen flex justify-center items-center m-auto'>
                    <Main/>
            </div>
        )
    }

    

    const handleMenuOption = ( option ) =>{
        setShowMobileMenu( false );
         setScreen( option )
    }



   
    const mobileBtnClass = 'w-full h-20 text-xl text-white bg-white text-pink-400 font-semibold tracking-widest hover:bg-blue-800 hover:text-white';
    return (

        <div className='' >
        {
            (showMobileMenu) ?
            (
            <div className='container h-screen w-screen bg-pink-300 animate__animated animate__fadeInLeft'>
                   <button
                   >
                   <i 
                        className="text-2xl p-2 absolute  fas fa-times"
                        onClick ={ () => setShowMobileMenu( false ) }
                    ></i>
                   </button>
                <div className='font-Monserrat grid grid-rows-4 w-full h-80pv gap-5 relative top-1/2 transform -translate-y-1/2'>
                    <button 
                        className={mobileBtnClass}
                        onClick={ () => handleMenuOption( 'main' ) }
                    > MAIN </button>
                    <button 
                        className={mobileBtnClass}
                        onClick={ () =>  handleMenuOption( 'gallery' ) }
                    > GALLERY </button>
                    <button 
                        className={mobileBtnClass}
                        onClick={ () =>  handleMenuOption( 'products' ) }
                    > PRODUCTS </button>
                    <button 
                        className={mobileBtnClass}
                        onClick={ () =>  handleMenuOption( 'review' ) }
                    > LEAVE US A REVIEW </button>
                </div>
            </div>
            )

            : (
                <div className='container h-screen w-screen '> 
                    <div className=' h-70ph sm:h-67ph  md:h-90ph '>
                        <NavBar setScreen={setScreen} setShowMobileMenu={ setShowMobileMenu } />
                    </div>
                    { showScreen( screen  )  }
                </div>
            )
        }
        
        </div>
        
    )
}
