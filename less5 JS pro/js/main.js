const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        basketUrl: "/getBasket.json",
        products: [],
        filtered: [],
        basketItem: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgBasket: 'https://placehold.it/100x50',
        userSearch: '',
        showBasket: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(item) {
            let find = this.basketItem.find(el => el.id_product === item.id_product);
            if (find) {
                find.quantity++;
            } else {
                const prdct = Object.assign({ quantity: 1 }, item);
                this.basketItem.push(prdct);
            }
        },

        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.basketItem.splice(this.basketItem.indexOf(item), 1);
            }
        },

        fillter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(elem => regexp.test(elem.product_name))
        }
    },
    mounted() {
        this.getJson(`${API + this.basketUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.basketItem.push(el);
                }
            });

        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    }
})
