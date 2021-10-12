

export const GetMenuItems = ( option ) =>{
    
    const menuToShow = {
        Cakes : [
            { id: 1, title:'Torta Trio de Chocolate', description: 'Torta base vainilla/chocolate de 1kg, rellena de chocolate Nutella u/o Ovomaltine y en su cubierta adornada con oreos, pirulin', precio: '25$'},
            { id: 2, title:'Torta de Fresas', description: 'Torta base vainilla/chocolate de 1kg, cubierta de crema pastelera y parte superior cubierta con fresas y una rosa comestible', precio: '23$'},
            { id: 3, title:'Torta tres leches', description: 'Torta tipica venezolana de tres leches de 1kg, suvae y adornada con crema pastelera en el tope', precio: '25$'},
            { id: 4, title:'Torta rosca', description: 'Torta tipo rosca con base de vainilla/chocolate de 1/2 kg, adornada con trufas y fresas', precio: '18$'}
        ],

        Cupcakes : [
            { id: 5, title:'Cupcakes de nieve', description: '5 Suaves cupcakes de vainilla, de 80grs, con un crema pastelera blanca y brillantina comestible rosa', precio: '7$'},
            { id: 6, title:'Cupcakes de chocolate', description: '5 Suaves cupcakes de chocolate Nutella/Ovomaltine/Savoy, de 80grs y con una crema pastelera de chocolate y con lluvia de chispas de chocolate', precio: '8$'},
            { id: 7, title:'Cupcakes de frutos secos', description: '5 Suaves cupcakes de base de vainilla combinado con nueces, almendras y avellanas, en su tope con crema pastelera y mani garrapinado', precio: '8$'},
            { id: 8, title:'Cupcakes de arequipe', description: '5 Suaves cupcakes de vainilla, de 80grs, con un crema pastelera blanca con trozo de chocolate y arequipe', precio: '7$'}
        ],

        Donuts : [
            { id: 9, title:'Donas de azucar', description: '3 Donas  de 125grs, de vainilla/chocolate y cubiertas de lluvia de azucar en polvo', precio: '5$'},
            { id: 10, title:'Donas rellenas', description: '3 Donas de 125grs rellenas de chocolate/vainilla/arequipe/crema pastelera', precio: '7$'},
            { id: 11, title:'Donas bañadas', description: '3 Donas de 125grs bañadas en chocolate/vainilla/arequipe/crema pastelera', precio: '7$'}
        ],

        Cookies: [
            { id: 12, title:'Galletas pasteleras', description: '300grs de galletas pasteleras con lluvia de chipas de colores y chocolate', precio: '3.5$'},
            { id: 13, title:'Galletas americanas', description: '300grs de galletas con trozo de chocolates y/o M&M ', precio: '3$'},

            { id: 14, title:'Galletas reinitas', description: 'Deliciosas galletas parecidas a las clasicas reinitas', precio: '3$'},

            { id: 15, title:'Alfajores', description: '5 Alfajores tipicos argentinos con lluvia de polvo de azucar', precio: '4$'}
        ]
    }

    const defaultOptionMenu= '';

    const optionMenu = menuToShow[ option ] || defaultOptionMenu;

    return optionMenu
}