window.onload = function() {
    let furnitureData = this.getFurnitureData();
    console.log(furnitureData);
    this.loadFurnitureData(furnitureData);
    
}

function loadFurnitureData(furnitureData) {
    let products = document.getElementById('products');
    document.getElementById('product-details-container').style.display =  'none';
    products.style.display = 'grid';
    for(let item of furnitureData) {
        let newProduct = document.createElement('div');
        let productImg = document.createElement('img');
        let productName = document.createElement('div');
        let productPrice = document.createElement('div');
        let productAvailable = document.createElement('div');
        let productDetailsButton = document.createElement('button');

        productImg.src = 'Showroom.jpg';
        productImg.className += 'product-avatar';

        productName.innerText = 'Name:' + item.name;
        productPrice.innerText = 'Price: ' + item.price;
        productAvailable.innerText = 'In Stock: ' + item.available;

        productDetailsButton.innerHTML = 'See Details';

        newProduct.append(productImg, productName, productPrice, productAvailable, productDetailsButton);
        products.appendChild(newProduct);

        newProduct.className += 'product-card';

        productDetailsButton.onclick = function () {
            showProductDetails(item);
        }
    }
}

function showProductDetails(product) {     

    document.getElementById('product-container').style.display = 'none';
    const productDetailsContainer = document.getElementById('product-details-container');
    productDetailsContainer.style.display = 'grid';

    


}

function getFurnitureData() {
    const furnitureData = [
        {
            id: 1,
            name: 'Chair',
            price: '220$',
            available: 'Yes'
        },
        {
            id: 2,
            name: 'Table',
            price: '300$',
            available: 'Yes'
        },
        {
            id: 3,
            name: 'Bed Table',
            price: '120$',
            available: 'Yes'
        },
        {
            id: 4,
            name: 'Bed',
            price: '620$',
            available: 'Yes'
        },
        {
            id: 5,
            name: 'King Bed',
            price: '1220$',
            available: 'Yes'
        },
        {
            id: 6,
            name: 'Bean Bag',
            price: '200$',
            available: 'Yes'
        },
        {
            id: 7,
            name: 'Cheap Chair',
            price: '100$',
            available: 'Yes'
        },
        {
            id: 8,
            name: 'Dresser',
            price: '499$',
            available: 'No'
        },
        {
            id: 9,
            name: 'Fabric Sofa',
            price: '1520$',
            available: 'Yes'
        },
        {
            id: 10,
            name: 'Recliner',
            price: '999$',
            available: 'Yes'
        },
        {
            id: 11,
            name: 'Coffee Table',
            price: '220$',
            available: 'Yes'
        },
        {
            id: 12,
            name: 'Book Case',
            price: '599$',
            available: 'Yes'
        },
        {
            id: 13,
            name: 'Dining Table',
            price: '820$',
            available: 'Yes'
        },
        {
            id: 14,
            name: 'Mirrors',
            price: '220$',
            available: 'Yes'
        },
        {
            id: 15,
            name: 'Storage Cabinets',
            price: '600$',
            available: 'Yes'
        },
        {
            id: 16,
            name: 'Mattresses',
            price: '230$',
            available: 'Yes'
        },
        {
            id: 17,
            name: 'Nightstand',
            price: '420$',
            available: 'Yes'
        },
        {
            id: 18,
            name: 'Side Chairs',
            price: '220$',
            available: 'Yes'
        },
    ];

    return furnitureData;
}
