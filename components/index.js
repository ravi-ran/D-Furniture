window.onload = async function () {
    fetchData();
}

async function fetchData() {

    if(document.getElementById('product-container')) {
        document.getElementById('product-container').style.display = 'none';
    }
    let furnitureData;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = await function() {
        if(this.readyState === 4 && this.status === 200) {
            furnitureData = JSON.parse(this.response);
            loadFurnitureData(furnitureData);         
        }
    }
    await xhttp.open('get','https://my-json-server.typicode.com/ravi-ran/D-Furniture/db');
    await xhttp.send();

}
function loadFurnitureData(furnitureData) {

    document.getElementById('loader').style.display = 'none';
    if(document.getElementById('product-container')) {
        document.getElementById('product-container').style.display = 'grid';
    }

    document.getElementById('filter').style.display = 'block';
    if(document.getElementById('product-detail-sub-container')) {
        document.getElementById('product-detail-sub-container').remove();
    }
    let products = document.createElement('div');
    products.id = 'products'

    for (let item of furnitureData.furnitureData) {        
        let newProduct = document.createElement('div');
        let productImg = document.createElement('img');
        let productName = document.createElement('div');
        let productPrice = document.createElement('div');
        let productDetailsButton = document.createElement('button');

        productImg.src = '../asset/Showroom.jpg';
        productImg.className += 'product-avatar';

        productName.innerText = item.name;
        productName.className += 'product-label';

        productPrice.innerText = item.price;
        productPrice.className += 'product-price';

        productDetailsButton.innerHTML = 'See Details';
        productDetailsButton.className += 'product-details-btn';

        newProduct.append(productImg, productName, productPrice, productDetailsButton);
        products.appendChild(newProduct);

        newProduct.className += 'product-card';

        productDetailsButton.onclick = function () {
            showProductDetails(item);
        }
    }
    document.getElementById('product-container').appendChild(products);
}

function showProductDetails(product) {

    document.getElementById('products').remove();
    document.getElementById('filter').style.display = 'none';

    let productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-detail-sub-container';
    productDetailsContainer.style.display = 'grid';
    document.getElementById('product-details-container').appendChild(productDetailsContainer);

    let productDetailAvatarContainer = document.createElement('div');
    productDetailAvatarContainer.id = 'product-detail-avatar-container';
    productDetailAvatarContainer.className = 'product-detail-avatar-container';

    let productDetail = document.createElement('div');
    productDetail.id = 'product-detail';

    productDetailsContainer.append(productDetailAvatarContainer, productDetail);

    let productImg = document.createElement('img');
    productImg.src = '../asset/Showroom.jpg';
    productImg.className += 'product-detail-avatar';
    productDetailAvatarContainer.appendChild(productImg);

    let productName = document.createElement('div');
    let productPrice = document.createElement('div');
    let productAvailable = document.createElement('div');
    let goBackToListBtn = document.createElement('button');

    productName.innerText = product.name;
    productName.className += 'product-detail-label';

    productPrice.innerText = product.price;
    productPrice.className += 'product-detail-price';

    if(product.available === 'Yes') {
        productAvailable.innerText = 'In Stock';
        productAvailable.className += 'in-stock-label';
    } else {
        productAvailable.innerText = 'Out of Stock';
        productAvailable.className += 'out-of-stock-label';
    }
    

    goBackToListBtn.innerHTML = 'Go Back';
    goBackToListBtn.className += 'go-back-btn';

    productDetail.append(productName, productPrice, productAvailable, goBackToListBtn);

    goBackToListBtn.onclick = function () {
        document.getElementById('loader').style.display = 'block';
        fetchData();
    }
}


