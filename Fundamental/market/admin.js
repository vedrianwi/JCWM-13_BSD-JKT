// show product
function showProduct (data) {
    let tbody = document.getElementsByTagName('table')[0].tBodies[0]

    // do iteration
    let result = []
    for (let i = 0; i < data.length; i++) {
        let tr = `<tr><td>${i+1}</td>`
        // do iteration inside an object
        for (let key in data[i]) {
            if (key === 'image') {
                tr += `<td><img src="${data[i][key]}" alt="product-image" width="50px"/></td>`
            } else {
                tr += `<td>${data[i][key]}</td>`
            }
        }

        if (role === 'admin') {
            tr += `<td>
            <button type="button" onclick="deleteProduct(${i})">Delete ❌</button>
            <button type="button" onclick="editProduct(${i})">Edit 🛠</button>
            </td></tr>`
        } else {
            tr += `<td>
            <button type="button" name="button-add-to-cart" onclick="addToCart(${findIndexOf(data[i].name)})"">Add To Cart 🛒</button>
            </td></tr>`
        }
        result.push(tr)
    }

    // show data
    tbody.innerHTML = result.join('')
}

// add product
function addProduct () {
    // get all input value
    let input = document.forms[0].elements[6].getElementsByTagName('input'),
    name = input[0].value,
    price = parseInt(input[1].value),
    stock = parseInt(input[2].value),
    image = input[3].value

    // get value from select
    let category = document.getElementById('category').value

    // check user input
    if (name === '' || image === '' || isNaN(price) || isNaN(stock)) {
        alert('Please fill all input form !')
        return null
    }

    // add new product to database
    products.push(new Product(name, image, category, stock, price))

    // show an updated data
    showProduct(products)

    // reset input value
    for (let element of input) {
        element.value = ''
    } 
}

// delete product
function deleteProduct (index) {
    products.splice(index, 1)

    // show an updated product
    showProduct(products)
}

// edit product
function editProduct (index) {
    let tbody = document.getElementsByTagName('table')[0].tBodies[0]

    // do iteration
    let result = []
    for (let i = 0; i < products.length; i++) {
        let tr = `<tr><td>${i+1}</td>`
        if (index == i) { // edit product
            for (let key in products[i]) {
                if (key === 'category') {
                    tr += `<td><select id="edit-category" value="${products[i][key]}">
                            <option value="Food">Food</option>
                            <option value="Drink">Drink</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Other">Other</option>
                        </select></td>`
                } else {
                    tr += `<td><input id="edit-${key}" type="text" placeholder="${products[i][key]}"/></td>`
                }
            }
        } else {
            // do iteration inside an object
            for (let key in products[i]) {
                if (key === 'image') {
                    tr += `<td><img src="${products[i][key]}" alt="product-image" width="50px"/></td>`
                } else {
                    tr += `<td>${products[i][key]}</td>`
                }
            }

        }

        if (index === i) {
            tr += `<td>
            <button type="button" onclick="doneEdit(${index})">Save ✔</button>
            <button type="button" onclick="cancelEdit()">Cancel ❌</button>
            </td></tr>`
        } else {
            tr += `<td>
            <button type="button" name="button-add-to-cart" onclick="addToCart(${i})"">Add To Cart 🛒</button>
            <button type="button" onclick="deleteProduct(${i})">Delete ❌</button>
            <button type="button" onclick="editProduct(${i})">Edit 🛠</button>
            </td></tr>`
        }
        result.push(tr)
    }

    // show data
    tbody.innerHTML = result.join('')
}

function doneEdit (index) {
    console.log('done is running.')
    // get all user input
    let editName = document.getElementById('edit-name').value,
    editImage = document.getElementById('edit-image').value,
    editCategory = document.getElementById('edit-category').value,
    editStock = parseInt(document.getElementById('edit-stock').value),
    editPrice = parseInt(document.getElementById('edit-price').value)
    
    // check input
    if (editName === '' || editImage === '' || editCategory === '' || isNaN(editStock) || isNaN(editPrice)) {
        showProduct(products)
    } else {
        products[index].name = editName
        products[index].image = editImage
        products[index].category = editCategory
        products[index].stock = editStock
        products[index].price = editPrice

        // show an updated product
        showProduct(products)
    }
}

function cancelEdit () {
    showProduct(products)
}