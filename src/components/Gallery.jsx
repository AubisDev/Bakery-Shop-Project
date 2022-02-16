import React, { useEffect, useReducer, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { getItemByName } from '../selectors/searchByName';
import Gallery1 from '../img/Gallery-1.jpg'
import Gallery2 from '../img/Gallery-2.jpg'
import Gallery3 from '../img/Gallery-3.jpg'
import Gallery4 from '../img/Gallery-4.jpg'
import Gallery5 from '../img/Gallery-5.jpg'
import Gallery6 from '../img/Gallery-6.jpg'
import Gallery7 from '../img/Gallery-7.jpg'
import Gallery8 from '../img/Gallery-8.jpg'
import Gallery9 from '../img/Gallery-9.jpg'
import Gallery10 from '../img/Gallery-10.jpg'
import Gallery11 from '../img/Gallery-11.jpg'
import Gallery12 from '../img/Gallery-12.jpg'
import Gallery13 from '../img/Gallery-13.jpg'
import Gallery14 from '../img/Gallery-14.jpg'
import Gallery15 from '../img/Gallery-15.jpg'
import Gallery16 from '../img/Gallery-16.jpg'
import Gallery17 from '../img/Gallery-17.jpg'
import Gallery18 from '../img/Gallery-18.jpg'
import Gallery19 from '../img/Gallery-19.jpg'
import Gallery20 from '../img/Gallery-20.jpg'

export const Gallery = () => {


    const [gallery, setGallery] = useState([
        {id: 1, imgUrl: Gallery1, votes: 23, name: `cake-1`},
        {id: 2, imgUrl: Gallery2, votes: 55, name: `cake-2`},
        {id: 3, imgUrl: Gallery3, votes: 11, name: `cake-3`},
        {id: 4, imgUrl: Gallery4, votes: 40, name: `cake-4`},
        {id: 5, imgUrl: Gallery5, votes: 37, name: `cake-5`},
        {id: 6, imgUrl: Gallery6, votes: 28, name: `cupcake-6`},
        {id: 7, imgUrl: Gallery7, votes: 18, name: `cupcake-7`},
        {id: 8, imgUrl: Gallery8, votes: 74, name: `dessert-8`},
        {id: 9, imgUrl: Gallery9, votes: 14, name: `cupcake-9`},
        {id: 10, imgUrl: Gallery10, votes: 21, name: `cupcake-10`},
        {id: 11, imgUrl: Gallery11, votes: 31, name: `donut-11`},
        {id: 12, imgUrl: Gallery12, votes: 10, name: `donut-12`},
        {id: 13, imgUrl: Gallery13, votes: 36, name: `donut-13`},
        {id: 14, imgUrl: Gallery14, votes: 62, name: `donut-14`},
        {id: 15, imgUrl: Gallery15, votes: 17, name: `cheese-15`},
        {id: 16, imgUrl: Gallery16, votes: 26, name: `cheese-16`},
        {id: 17, imgUrl: Gallery17, votes: 37, name: `cheese-17`},
        {id: 18, imgUrl: Gallery18, votes: 34, name: `chocolate-18`},
        {id: 19, imgUrl: Gallery19, votes: 80, name: `chocolate-19`},
        {id: 20, imgUrl: Gallery20, votes: 12, name: `chocolate-20`},
    ])

    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;
    
    const [Images, setImages] = useState(  getItemByName( searchText.toLowerCase(), gallery ) );
    const [startUpvoting, setStartUpvoting] = useState(false);
    const [idUpvote, setIdUpvote] = useState(0);

    useEffect(() => {

            setImages( getItemByName( searchText.toLowerCase(), gallery ) )
            forceUpdate();
   

    }, [setImages, searchText ])
    
    const handleUpVote = ( id ) =>{
        const newGalleryState = [...gallery];
        newGalleryState.forEach( item => {
            if(item.id === id){
                item.votes++
            }
        });

        setStartUpvoting( !startUpvoting )
        setIdUpvote( id  )

        setTimeout(() => {
            setGallery( newGalleryState );
            setImages( getItemByName( searchText.toLowerCase(), gallery ) )
            forceUpdate();
            setStartUpvoting( false )
        }, 500);
        
    }

    return (
       <div className='max-w-80p m-auto animate__animated animate__fadeInLeft -mt-16 sm:-mt-12 md:-mt-20'>
            <form className='flex flex-row  w-full sm:w-5/6 mx-auto justify-center my-3 py-5 bg-pink-400 bg-opacity-20 shadow-lg'>
            <input 
                className=" border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent p-2 shadow-md rounded-xl w-4/5 sm:w-3/5"
                type='text'
                placeholder='Search Example: Cakes/Cheese/Donuts/Cupcakes'
                name='searchText'
                value={searchText}
                onChange= { handleInputChange }
                autoFocus
            />
            
        </form>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full mt-5 m-auto ">
            { (Images.length !== 0)
            ? (
                Images.map( (image, index) => (
                    <div key={ index }>
                      <div className='w-full h-4/5 min-h-gallery-height m-0 divide-y-2 divide-pink-600 divide-opacity-20'>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={image.imgUrl}
                            className=''
                        >
                                <img src={image.imgUrl} key={image.id} alt='Dessert Postre Tortas Cake' className=' sm:w-auto h-full object-cover shadow-lg min-w-full' />
                            </a>
                      </div>
                        <div className='flex flex-col w-full justify-center mt-2'>
                            <button
                                onClick={ () => handleUpVote( image.id) }
                                name={image.name}
                                value={image.votes}
                                disabled={ startUpvoting }
                                className='group text-pink-400 border-2 border-pink-400 hover:bg-red-700 hover:text-white rounded-xl font-bold  px-3 w-3/6 m-auto  transition duration-300 ease-in'
                            > 
                                <i className="fab fa-gratipay w-full h-full text-2xl text-red-600 flex flex-row  pl-3  justify-center group-hover:text-white  transition duration-300 ease-in ">
                                     <p className='font-Monserrat flex justify-center items-center  ml-2 text-base xl:text-lg group-hover:text-white  transition duration-300 ease-in'>{image.votes}</p>
                                     { (startUpvoting && ( image.id === idUpvote)) &&
                                        <p className='text-green-600 text-sm xl:text-base float-right ml-2 m-auto animate__animated animate__fadeOutUp'> +1 </p>
                                     }
                                </i>  
                            </button>
    
                         
                        </div>
                    </div>
                ))
            )
            : (
                <div className='w-screen h-96'>
                    <div className='w-3/4 h-1/2 flex flex-row justify-center my-3 py-5 bg-pink-400 bg-opacity-20'>
                        <p className='font-Monserrat text-xl flex items-center'> Sorry we couldnt find any item with that name. Try another :) like Donuts</p>
                    </div>
                </div>
            )
                


            }
        </div>
       </div>
    )
}
