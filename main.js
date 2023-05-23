const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', },
                { id: 2235, color: '#00008B' , image: './assets/images/socks_blue.jpg', },
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -=1
        },
        updateImage( variantImage ){
            this.image= variantImage
        }
    }
})
