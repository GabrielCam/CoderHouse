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
    },
    {
        id:4,
        name:'Departamento Venta',
        price:400000,
        category:'inmuebles',
        img:'https://assets.easybroker.com/property_images/1016795/15346981/EB-CW6795.jpg?version=1555173574',
        stock:1,
        description:'Descripcion de depto'
    },
    {
        id:5,
        name:'Hueawei p20 Lite',
        price:600,
        category:'celulares',
        img:'https://technologyltda.com/wp-content/uploads/2020/07/huawei-p20-lite-1530700103001.jpg',
        stock:10,
        description:'Descripcion de Huewei'
    }

]

export const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getItemById = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id === parseInt(id)))
        },2000)
    })
}