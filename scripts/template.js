function templateRenderCategoryDishes(dishName, index) {
    return `
        <div class="category-section">
            <div class="category-name">
                <img src="${dishName.icon}" alt="category ${dishName.category}" class="category-image">
                <h2 class="category-title">${dishName.category}</h2>
            </div>
        </div>
        <div class="menu-list" id="menu-list${index}">${renderMenuList(index)}</div>
        `;
}

function templateRenderMenuList(thisDish, index) {
    return `
                <div class="menu-card">
                    <div class="card-description-img">
                        <img src="${thisDish.picture}" alt="${thisDish.name}" class="card-image"> 
                    </div>
                    <div class="card-description-text">
                        <h3>${thisDish.name}</h3>
                        <p class="item_description">${thisDish.description}</p>
                    </div>
                    <div class="card-price">
                        <p class="item-price">${thisDish.price.toFixed(2).replace(".", ",")} €</p>
                        <a class="add-item" id="add-item${index}" onclick="addToCart(${thisDish.id})">Add to basket</a>
                </div>
            </div> 
        `;
}

function templateShoppingCartDesktop(i, id, dish, price) {
    return `
                <div class="basket-item">
                    <span id="dishAmount${i}">${dish.amount} x ${dish.name}</span>
                <div class="dish-amount-counter">
                    <div>
                        <a onclick="removeFromCart(${dish.id})"><img src="${changeDeleteIcon(id)}"></a>
                    <span>${dish.amount}</span>
                    <a onclick="addToCart(${dish.id})"><img src="./assets/icons/plus.svg"></a>   
                    </div>
                    <span>${price.toFixed(2).replace(".", ",")} € </span>
                    </div>
                </div>
                `;
}

function templateAmountNumber(subtotal, totalDelivery) {
    return `<div class="basket-price-final-count">
                <div class="subtotal-price">
                        <span><b>Subtotal</span>
                        <span> ${subtotal.toFixed(2).replace(".", ",")} €</b></span>
                </div>    
                <div class="delivery-fee-price"> 
                        <span><b>Delivery fee</span> 
                        <span> 4,99 €</b></span>
                </div>
                <div class="border-total-top"></div>
                <div class="total-price">
                        <span><b>Total</span> 
                        <span> ${totalDelivery.toFixed(2).replace(".", ",")} €</b></span>
                </div>
                <div class="btn-buy">
                    <a onclick="openDialog()"> Buy now (${totalDelivery.toFixed(2).replace(".", ",")}€)</a>
                </div>
        </div>`;
}


function templateShoppingCartMobile() {
    return ``;
}

function templateEmptyBasket() {
    return `
            <div class="empty-basket">
                <p>Nothing here yet.<br>Go ahead and choose something delicious!</p>
                <img src="./assets/icons/basket-empty.svg" alt="empty basket">
            </div>
        `;
}