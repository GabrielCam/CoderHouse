const products = [
    {
        id:1,
        name:'Samsung S21',
        price:800,
        categoryId:'celulares',
        img:'https://images.samsung.com/is/image/samsung/p6pim/uy/galaxy-s21/gallery/uy-galaxy-s21-5g-g991-371101-sm-g991bzvjuyo-368337446',
        stock:20,
        description:'Descripcion de S21'
    },
    {
        id:2,
        name:'Samsung modelo 3d',
        price:500,
        categoryId:'notebooks',
        img:'https://static.turbosquid.com/Preview/2019/08/01__08_55_55/Samsung_Notebook7_2019_13inch_01.jpgE214871D-90DA-4C9E-8CC9-C8038AA47586Large.jpg',
        stock:15,
        description:'Descripcion de notebook'
    },
    {
        id:3,
        name:'Peugeot 208 feline',
        price:20000,
        categoryId:'vehiculos',
        img:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_6b742773475345ddadabe1fad775bb0c.jpg',
        stock:2,
        description:'Descripcion de auto'
    },
    
    {
        id:4,
        name:'Casa en venta',
        price:40000,
        categoryId:'inmuebles',
        img:'https://http2.mlstatic.com/D_NQ_NP_728905-MLA49565203120_042022-O.webp',
        stock:1,
        description:'Descripcion de Casa en venta'
    },
    {
        id:5,
        name:'Hueawei p20 Lite',
        price:600,
        categoryId:'celulares',
        img:'https://technologyltda.com/wp-content/uploads/2020/07/huawei-p20-lite-1530700103001.jpg',
        stock:10,
        description:'Descripcion de Huewei'
    },
    {
        id:6,
        name:'Motorola G200',
        price:800,
        categoryId:'celulares',
        img:'https://http2.mlstatic.com/D_NQ_NP_744510-MLA49173911701_022022-O.webp',
        stock:5,
        description:'Descripcion de Motorola'
    },
    
    {
        id:7,
        name:'Departamento',
        price:30000,
        categoryId:'inmuebles',
        img:'https://http2.mlstatic.com/D_NQ_NP_820454-MLA49542375088_042022-O.webp',
        stock:1,
        description:'Descripcion de departamento'
    },
    
    {
        id:8,
        name:'Audi A4',
        price:60000,
        categoryId:'vehiculos',
        img:'https://img2.freepng.es/20180815/hk/kisspng-2-17-audi-a4-car-2-18-audi-a4-audi-q7-tag-for-audi-a4-in-white-images-2-17-audi-a4-rev-5b746f354b19a4.8434634515343573013076.jpg',
        stock:1,
        description:'Descripcion de Audi'
    },
    {
        id:9,
        name:'Notebook Gamer',
        price:2000,
        categoryId:'notebooks',
        img:'https://www.profesionalreview.com/wp-content/uploads/2021/05/Notebook-Gamer-03.jpg',
        stock:5,
        description:'Descripcion de notebook'
    }
    
]

export const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getProductsByCategory = (categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=>prod.categoryId === categoryId))
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