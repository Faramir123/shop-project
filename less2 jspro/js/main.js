class ProductsLust {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    GoodsList() {
        let calcGoods = 0;
        this.goods.forEach((good) => {
            if (good.price != undefined) {
                calcGoods += good.price;
                console.log(good.price);
            }
        });
        let totalGoodPrice = "Сумма товаров составляет $" + calcGoods;
        document.querySelector('.calcitem').innerHTML = totalGoodPrice;
    }
}


class ProductItem {
    constructor(product, img = 'https://price-altai.ru/uploads/2013/10/thumb/08135230e34098.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id=${this.id}>
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
}

let list = new ProductsLust();


window.onload = () => {
    list.render();
    list.GoodsList();
};

//Класс для корзины
class BasketCart {
    constructor() {
        this.addProduct = [];
        this.deleteProduct = [];
    }
    //добавить товар в корзину
    addToBasket() { }

    //удалить товар из корзины
    deleteFromBasket() { }

    //посчитать стоимость корзины
    calcBasket() { }

    // Метод, который определяет, добавлены ли в корзину какие-либо товары и при их наличии активирует кнопку "Оформить заказ"
    createOrder() { }


    // Рендер динамического содержимого корзины
    render() { }

    // Метод открывания корзины
    openBasket() { }

}

//Класс для элементов корзины
class BasketCarItems {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    // Внешний вид верстки будет отличаться
    render() {

    }
}


