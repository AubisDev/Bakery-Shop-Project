import { getImages } from "../helper/images";

const Items = getImages();

export const getItemByName = ( name= '', gallery ) => {

    return  name === '' ?  gallery : gallery.filter( item => item.name.toLowerCase().includes( name )) 
}