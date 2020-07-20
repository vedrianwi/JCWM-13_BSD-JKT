// call or invoke the function
// showProduct(products)

// user login and logout
function login () {
    // get all user input
    let username = document.getElementById('username').value,
    password = document.getElementById('password').value

    // check user in database
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            role = users[i].role
        }
    }

    // check role
    if (role === '') {
        alert('username or password is wrong.')
        document.
        return
    } else if (role === 'admin') {
        document.getElementById('input-data').hidden = false
        document.getElementById('table-product').hidden = false
        document.getElementById('button-logout').hidden = false
        document.getElementById('filter').hidden = false
        document.getElementById('button-login').disabled = true
        document.getElementById('button-register').hidden = true
    } else if (role === 'user') {
        document.getElementById('table-product').hidden = false
        document.getElementById('table-cart').hidden = false
        document.getElementById('receipt').hidden = false
        document.getElementById('filter').hidden = false
        document.getElementById('button-logout').hidden = false
        document.getElementById('button-login').disabled = true
        document.getElementById('button-register').hidden = true
    }

    document.getElementById('title').innerHTML = `Hi!, ${username}`

    // reset input value
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''

    // disable login button

    // show product after login
    showProduct(products)
}


function logout () {
    document.getElementById('input-data').hidden = true
    document.getElementById('table-product').hidden = true
    document.getElementById('table-cart').hidden = true
    document.getElementById('receipt').hidden = true
    document.getElementById('filter').hidden = true
    document.getElementById('button-logout').hidden = true
    document.getElementById('button-login').disabled = false
    document.getElementById('button-register').hidden = false
    role = ''
    document.getElementById('title').innerHTML = `Welcome to Happy Shopping`
}

function register () {
    // get all user input
    let username = document.getElementById('username').value,
    password = document.getElementById('password').value
    
    // create new user to database
    users.push(new User(username, password))
}

function filterByName () {
    // get user input
    let filterName = document.getElementById('filter-name').value.toLowerCase()

    // search filterName in our database
    let filterProduct = products.filter(item => item.name.toLowerCase() === filterName)

    // show filtered result
    showProduct(filterProduct)
}

function clearFilter () {
    document.getElementById('filter-name').value = ''
    document.getElementById('min-price').value = ''
    document.getElementById('max-price').value = ''
    // products = [...tempProduct]
    showProduct(products)
}

function filterByCategory () {
    // get option value
    let category = document.getElementById('filter-category').value.toLowerCase()

    // filter product by category
    let filterProduct = products.filter(item => item.category.toLowerCase() === category)

    // show filtered result
    showProduct(filterProduct)
}


function filterByPrice () {
    // get price value
    let maxPrice = parseInt(document.getElementById('max-price').value)
    let minPrice = parseInt(document.getElementById('min-price').value)

    // filter product by price
    let filterProduct =products.filter(item => item.price >= minPrice && item.price <= maxPrice)

    // show filtered result
    showProduct(filterProduct)
}

function findIndexOf (product) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase() === product.toLowerCase()) {
            return i
        }
    }
}