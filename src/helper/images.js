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

export const getImages = () =>{

    const randomInitialValue = () => {
        return Math.floor( Math.random() * 100 );
    }

    return [
        {id: 1, imgUrl: Gallery1, votes: randomInitialValue(), name: `cake=1`},
        {id: 2, imgUrl: Gallery2, votes: randomInitialValue(), name: `cake-2`},
        {id: 3, imgUrl: Gallery3, votes: randomInitialValue(), name: `cake-3`},
        {id: 4, imgUrl: Gallery4, votes: randomInitialValue(), name: `cake-4`},
        {id: 5, imgUrl: Gallery5, votes: randomInitialValue(), name: `cake-5`},
        {id: 6, imgUrl: Gallery6, votes: randomInitialValue(), name: `cupcake-6`},
        {id: 7, imgUrl: Gallery7, votes: randomInitialValue(), name: `cupcake-7`},
        {id: 8, imgUrl: Gallery8, votes: randomInitialValue(), name: `dessert-8`},
        {id: 9, imgUrl: Gallery9, votes: randomInitialValue(), name: `cupcake-9`},
        {id: 10, imgUrl: Gallery10, votes: randomInitialValue(), name: `cupcake-10`},
        {id: 11, imgUrl: Gallery11, votes: randomInitialValue(), name: `donut-11`},
        {id: 12, imgUrl: Gallery12, votes: randomInitialValue(), name: `donut-12`},
        {id: 13, imgUrl: Gallery13, votes: randomInitialValue(), name: `donut-13`},
        {id: 14, imgUrl: Gallery14, votes: randomInitialValue(), name: `donut-14`},
        {id: 15, imgUrl: Gallery15, votes: randomInitialValue(), name: `cheese-15`},
        {id: 16, imgUrl: Gallery16, votes: randomInitialValue(), name: `cheese-16`},
        {id: 17, imgUrl: Gallery17, votes: randomInitialValue(), name: `cheese-17`},
        {id: 18, imgUrl: Gallery18, votes: randomInitialValue(), name: `chocolate-18`},
        {id: 19, imgUrl: Gallery19, votes: randomInitialValue(), name: `chocolate-19`},
        {id: 20, imgUrl: Gallery20, votes: randomInitialValue(), name: `chocolate-20`},


    ]
}