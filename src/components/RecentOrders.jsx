import React from 'react'
import { Slider } from './Slider'
import { useMediaQuery } from 'react-responsive'


export const RecentOrders = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <div className=' pt-3 bg-white'>
            {
                (!isTabletOrMobile) ?  <Slider/>
                : 
                (
                <div className='h-full '>
                    <div className=' shadow-xl bg-pink-100 '>
                        <img src='https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204_960_720.jpg' alt='cupcakes'/>

                        <div className='w-3/4 m-auto '>
                            <p className='pb-3 font-Monserrat text-justify mt-3 mb-10 text-blue-900 italic text-xs md:text-sm font-medium '>Deliciosos cupcakes rellenos de mora con una cubierta de crema de fresa con moras en la punta acompanado de una hoja de menta.</p>
                        </div>
                    </div>
                    <div className='shadow-xl pt-3 bg-pink-100 '>
                        <img src='https://cdn.pixabay.com/photo/2016/09/19/23/31/cakes-1681543_960_720.jpg' alt='cake' />
                        <div className='w-3/4 m-auto '>

                        <p className=' pb-3 font-Monserrat text-justify mt-3 mb-10 text-blue-900 italic text-xs md:text-sm font-medium'> Elegant cake named 'bouquet of roses'. This  beautiful cake is covered is a white fondant and sugar white pearls at the bottom and is filled in with chocolate. The box gift and flowers are eatable</p>
                        </div>
                    </div>
                    <hr className='my-5 '/>
                    <div className='shadow-xl pt-3 bg-pink-100'>
                        <img src='https://cdn.pixabay.com/photo/2016/03/17/15/26/strawberry-roll-1263099_960_720.jpg' alt='brazo-gitano'/>

                        <div className='w-3/4 m-auto '>
                        <p className='pb-3 font-Monserrat text-justify mt-3 mb-10 text-blue-900 text-xs md:text-sm italic font-medium'> Brazo gitano, hecho con una masa super suave al contacto. Relleno de una deliciosa crema de mantequilla y trozos fresas</p>
                        </div>

                    </div>
                
                </div>
            )
            }
        </div>
    )
}
