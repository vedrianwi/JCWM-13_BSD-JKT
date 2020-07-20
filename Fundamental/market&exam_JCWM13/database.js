let products = [
    {
        name : "Apple",
        image : "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg",
        category : "Fruit",
        stock : 50,
        price : 15000
    },
    {
        name : "Milk",
        image : "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/7786149/2340/1560/m1/fpnw/wm0/17-milk-box-mockup-.png?1582099260&s=482c6ae842be9bfb2522e0029ca9c9b4",
        category : "Drink",
        stock : 100,
        price : 35000
    },
    {
        name : "Lemon",
        image : "https://i5.walmartimages.ca/images/Large/094/504/6000200094504.jpg",
        category : "Fruit",
        stock : 65,
        price : 5000
    },
    {
        name : "Tomato",
        image : "https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato_grande.jpg?v=1576807420",
        category : "Fruit",
        stock : 35,
        price : 3500
    },
]

let users = [
    {
        username : "admin",
        password : "admin",
        role : "admin"
    },
    {
        username : "alee",
        password : "alee",
        role : "user"
    }
]

let cart = []

let role = ''

let histories = []

// let tempProduct = []

class Product {
    constructor(_name, _image, _category, _stock, _price) {
        this.name = _name
        this.image = _image
        this.category = _category
        this.stock = _stock
        this.price = _price
    }
}

class User {
    constructor(_username, _password) {
        this.username = _username
        this.password = _password
    }
    role = 'user'
}

class History {
    constructor(_user, _date, _total) {
        this.user = _user
        this.date = _date
        this.total = _total
    }
}