const products = [
    {
        id:1,
        name:'Samsung S21',
        price:800,
        category:'celular',
        img:'https://images.samsung.com/is/image/samsung/p6pim/uy/galaxy-s21/gallery/uy-galaxy-s21-5g-g991-371101-sm-g991bzvjuyo-368337446',
        stock:20,
        description:'Descripcion de S21'
    },
    {
        id:2,
        name:'Samsung modelo 3d',
        price:500,
        category:'notebook',
        img:'https://static.turbosquid.com/Preview/2019/08/01__08_55_55/Samsung_Notebook7_2019_13inch_01.jpgE214871D-90DA-4C9E-8CC9-C8038AA47586Large.jpg',
        stock:15,
        description:'Descripcion de notebook'
    },
    {
        id:3,
        name:'Peugeot 208 feline',
        price:20000,
        category:'vehiculos',
        img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_6b742773475345ddadabe1fad775bb0c.jpg',
        stock:2,
        description:'Descripcion de auto'
    }
]

export const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}