const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true, name: "Green Socks" },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false, name: "Blue Socks" },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    },
    computed: {
        // Boosts perfomance.
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        onSale() {
            let selectingVariant = this.variants[this.selectedVariant];
            return selectingVariant.onSale ? `${selectingVariant.name} (${this.brand} ${this.product}) is on sale.` : ''
        }
        
    }
})
