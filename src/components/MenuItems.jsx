import React, { useState } from 'react'

export const MenuItems = ({id, title, description, price}) => {

    const [buyBtn, setBuyBtn] = useState(false)

    const handleBuy = () =>{
        setBuyBtn( !buyBtn ); 
    }
    
    return (
        <div className='w-full m-auto py-3'>
           <div className='w-90pw m-auto'>
            <p className='flex  w-3/4 sm:w-2/4 pl-2 mb-2 font-semibold border-b-2 border-pink-600 font-subtitle text-2xl text-purple-800'>{title}</p>
                <div className='w-full flex flex-row'>
                    <p className='italic text-sm w-1/2 sm:w-3/4  text-justify text-pink-800 break-words'>{description}</p>
                   <div className='flex flex-col m-auto relative top-1/2 transform -translate-y-1/3'>
                        <p className='w-auto m-auto flex justify-center border-b-2 border-pink-600'>{price}</p>
                        <button 
                            className='mt-3 px-2 sm:px-4 py-1 border-2 border-pink-600 hover:bg-pink-600 hover:text-white text-xs'
                            onClick={ handleBuy }
                        >
                            {
                                ( buyBtn ) ? 'SOON' : 'ADD'
                            }
                        </button>
                   </div>

                </div>
           </div>
        </div>
    )
}
