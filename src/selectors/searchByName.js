import { getImages } from "../helper/images";

const Items = getImages();

export const getItemByName = ( name= '' ) => {

    // name.toLowerCase();
    
    return  name === '' ?  Items : Items.filter( item => item.name.toLowerCase().includes( name )) 
}