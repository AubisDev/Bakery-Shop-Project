import React from 'react'
import review_1 from '../img/review-1.jpg'
import review_2 from '../img/review-2.jpg'
import review_3 from '../img/review-3.jpg'



export const Reviews = () => {

    const Reviews = [
        { img : review_1, comment: '"Los mejores postres que he comido han sido los de Bakery Shop, son suaves y delicioso"', star: 5 },
        { img : review_2, comment: '"Greats and beautiful cakes, and the cupcakes are the best i ever tasted"', star: 4.7 },
        { img : review_3, comment: '"Excelente atencion al cliente y los postres son los mejores"', star: 4.8},
    ]



    return (

        <div className='flex flex-col lg:flex-row '> 
            { Reviews.map( (review, index ) => (
                        <div className='flex-1 flex flex-col border-pink-300 shadow-review-box ml-4 min-h-card-height min-w-card-width divide-y-2 divide-pink-600 divide-opacity-20 mb-10' key={index} >
                            <img src={review.img} alt="review"  className=' w-5/6 h-4/6 m-auto shadow-lg rounded-2xl'/>

                            <p className='italic h-2/6 mt-3 leading-relaxed lg:text-sm w-3/4 m-auto text-center sm:text-xs md:text-base text-blue-900'>{review.comment}</p>

                            <div className='block m-auto mt-3 mb-2'>
                            <i className="fas fa-star fill-current text-yellow-500 md:text-md lg:text-2xl "></i>{review.star}/5
                            </div>
                        </div>
                    ))}
        </div>

    )
}
