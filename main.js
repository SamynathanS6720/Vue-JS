const app = Vue.createApp({
    data(){
        return{
            // Product
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes:[
                { id: 1134, size: '10' },
                { id: 1135, size: '9' },
                { id: 1136, size: '8' },
                { id: 1137, size: '7' },
                { id: 1138, size: '6' },
            ]
        }
    }
})
