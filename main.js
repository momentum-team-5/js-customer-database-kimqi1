let customer = {
    name: '',
    location: '',
    phone: '',
    picture: '',
    dob: ''
}

let targetEl = document.querySelector('.customer')

// create a ul 
let list = document.createElement('ul')

// append the ul to the dom
targetEl.appendChild(list)
for (let customer of customers){

// create a li
let listItem = document.createElement('li')

//  create a p element
let itemNameEl = document.createElement('p')
itemNameEl.innerText = customer
listItem.appendChild(itemNameEl)
list.appendChild(listItem)

let imgEl = document.createElement('img')
//  imgEl.src = 
listItem.appendChild(imgEl)
}
