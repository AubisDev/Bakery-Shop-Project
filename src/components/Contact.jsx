import React from 'react'

export const Contact = () => {
    return (
        <div className='h-screen w-full sm:w-3/4  sm:bg-pink-600 sm:bg-opacity-80 animate__animated animate__fadeInRight -mt-8 sm:-mt-16 md:-mt-36 '>
            <div className='h-9ph w-4/5  lg:w-1/2 bg-white  m-auto relative top-1/2 transform -translate-y-2/4 rounded-lg'>
                <form 
                    className='grid grid-cols-1 gap-3 w-full text-serif p-2 border-2 border-pink-400 border-opacity-40 '
                    
                >
                    <p className='text-2xl font-bold flex flex-col m-auto w-full items-center py-4 underline'>Review Form </p>
                   <div className='flex flex-col m-auto w-full items-center pb-5'>
                    <label className='w-3/4 text-gray-500 text-opacity-90 text-xs'> Full Name *</label>
                        <input
                            className=' border-b-2 border-pink-400  px-2 shadow-sm  w-3/4 focus:outline-none focus:border-transparent focus:border-pink-400 '
                            placeholder='Full Name'
                            type='text'
                            required
                            
                        />
                   </div>

                   <div className='flex flex-col m-auto w-full items-center pb-5'>
                    <label className='w-3/4 text-gray-500 text-opacity-90 text-xs'> Email *</label>
                        <input
                            className=' border-b-2 border-pink-400  px-2 shadow-sm  w-3/4 focus:outline-none focus:border-transparent focus:border-pink-400 '
                            placeholder='Email'
                            type= 'email'
                            required
                            
                        />
                   </div>

                   <div className='flex flex-col m-auto w-full items-center pb-5'>
                    <label className='w-3/4 text-gray-500 text-opacity-90 text-xs'> Phone Number *</label>
                       <div className='flex flex-row w-3/4 justify-cente items-center m-auto'>
                        <select>
                                <option defaultValue value='0424'>0424</option>
                                <option defaultValue value='0414'>0414</option>
                                <option defaultValue value='0416'>0416</option>
                                <option defaultValue value='0426'>0426</option>
                                <option defaultValue value='0412'>0412</option>
                            </select>
                            <input
                                className=' border-b-2 border-pink-400  px-2 shadow-sm  w-2/4 focus:outline-none focus:border-transparent focus:border-pink-400 '
                                placeholder='Phone Number'
                                type= 'text'
                                required
                                
                            />
                       </div>
                   </div>

                   <div className='flex flex-col m-auto w-full items-center pb-5'>
                    <label className='w-3/4 text-gray-500 text-opacity-90 text-sm pb-2'>Review/Comments </label>
                        <textarea
                            className='  px-2 shadow-sm  w-3/4  text-sm border-2 border-pink-400  min-h-comment max-h-comment-sm md:max-h-comment-box overflow-auto focus:outline-none focus:border-transparent  focus:border-pink-400 '
                            placeholder='Please leave us your review here, thank you for your purchase'
                            required
                            
                        />
                   </div>

                   <div className='flex flex-col m-auto w-full items-center pb-5'>
                    <label className='w-3/4 text-gray-500 text-opacity-90 text-sm pb-2'>Purchase Ticket * </label>
                        <input
                            className='  px-2 shadow-sm  w-3/4 md:w-2/4  text-sm'
                            placeholder='Email'
                            type= 'file'
                            required
                            
                        />
                   </div>

                   <div className='flex flex-row w-full items-center justify-center '>
                        <input
                                className=' px-2 shadow-sm  text-sm'
                                placeholder='Email'
                                type= 'checkbox'
                                required
                                
                            />
                        <label className=' w-3/4 text-gray-600  text-sm pb-2 pl-2 p-1'>Agreed to Terms & Conditions</label>
                        
                   </div>
                   
                   <button
                    type='submit'
                    className='w-full rounded-lg m-auto py-2  bg-blue-600 hover:bg-blue-900 text-white'
                   >
                       Confirm & Send
                   </button>
                      
                </form>
            </div>
        </div>
    )
}
