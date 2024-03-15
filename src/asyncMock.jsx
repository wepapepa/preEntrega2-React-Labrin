const products = [
    { 
        id: '1', 
        name: 'Nike Air Max 90', 
        price: 152.990, 
        category: 'zapatillas', 
        img:'https://nikeclprod.vtexassets.com/arquivos/ids/870518-1200-1200?v=638333334225870000&width=1200&height=1200&aspect=true', 
        stock: 25, 
        description:'Descripcion de Zapatillas Air Max 90'
    },

    { id: '2', 
    name: 'Air Jordan 1 Mid SE', 
    price: 152.990, 
    category: 'zapatillas', 
    img:'https://nikeclprod.vtexassets.com/arquivos/ids/941624-1200-1200?v=638405216938800000&width=1200&height=1200&aspect=true', 
    stock: 12, 
    description:'Descripcion de Air Jordan 1 Mid SE'},
    
    { id: '3', 
    name: 'Nike Heritage Cangurera', 
    price: 29.990, 
    category: 'accesorios', 
    img:'https://nikeclprod.vtexassets.com/arquivos/ids/915113-1200-1200?v=638382570730870000&width=1200&height=1200&aspect=true', 
    stock: 2, 
    description:'Descripcion de cangurera'},

    { id: '4', 
    name: 'Nike Jordan Sweatshirt', 
    price: 60.990, 
    category: 'polerones', 
    img:'', 
    stock: 30, 
    description:'Descripcion de Poleron Jordan'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}