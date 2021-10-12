import React, { useEffect, useReducer, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { getItemByName } from '../selectors/searchByName';


export const Gallery = () => {

    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    const ItemsFiltered = getItemByName( searchText.toLowerCase() );
    const [Images, setImages] = useState( ItemsFiltered );
    const [startUpvoting, setStartUpvoting] = useState(false);
    const [indexUpvote, setIndexUpvote] = useState(0);

    useEffect(() => {

            setImages( ItemsFiltered )
            forceUpdate();
   

    }, [setImages, ])
    
    const handleUpVote = ( index ) =>{


        const Votes = [...ItemsFiltered];
        let newVoteValue = {...ItemsFiltered[index]};
        newVoteValue.votes++
        ItemsFiltered[index] = newVoteValue;
        setStartUpvoting( !startUpvoting )
        setIndexUpvote( index  )
        setTimeout(() => {
            setImages( ItemsFiltered )
            forceUpdate();
            setStartUpvoting( false )
        }, 1000);
        

       

    }

  

  

    return (
       <div className='max-w-80p m-auto animate__animated animate__fadeInLeft -mt-24 sm:-mt-12 md:-mt-28'>
            <form className='flex flex-row w-5/6 mx-auto justify-center my-3 py-5 bg-pink-400 bg-opacity-20 shadow-lg'>
            <input 
                className=" border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent p-2 shadow-md rounded-xl w-3/5"
                type='text'
                placeholder='Search Example: Cakes/Cheese/Donuts/Cupcakes'
                name='searchText'
                value={searchText}
                onChange= { handleInputChange }
                autoFocus
            />
            
        </form>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full mt-5 m-auto ">
            { (ItemsFiltered.length !== 0)
            ? (
                ItemsFiltered.map( (image, index) => (
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
                                onClick={ () => handleUpVote( index ) }
                                name={image.name}
                                value={image.votes}
                                disabled={ startUpvoting }
                                className='group text-pink-400 border-2 border-pink-400 hover:bg-red-700 hover:text-white rounded-xl font-bold  px-3 w-3/6 m-auto  transition duration-300 ease-in'
                            > 
                                <i className="fab fa-gratipay w-full h-full text-2xl text-red-600 flex flex-row  pl-3 flex justify-center group-hover:text-white  transition duration-300 ease-in ">
                                     <p className='font-Monserrat flex justify-center items-center  ml-2 text-base xl:text-lg group-hover:text-white  transition duration-300 ease-in'>{image.votes}</p>
                                     { (startUpvoting && ( index === indexUpvote)) &&
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
