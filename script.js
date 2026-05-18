let shoppingCart = [];

function init() {
  renderCategoryDishes();
}

function renderCategoryDishes() {
  let categoryDish = document.getElementById("main-menu");
  categoryDish.innerHTML = "";

  for (let index = 0; index < dishes.length; index++) {
    let dishName = dishes[index];
    categoryDish.innerHTML += `
          <div class="category-section">
              <div class="category-name">
                <img src="${dishName.icon}" alt="category ${dishName.category}" class="category-image">
                <h2 class="category-title">${dishName.category}</h2>
              </div>
          </div>
        <div class="menu-list" id="menu-list${index}">
          ${renderMenuList(index)}
        </div>
        `;
  }
}

function renderMenuList(index) {
  let elementN = dishes[index];
  let menuList = "";
  for (let dish = 0; dish < elementN.menues.length; dish++) {
    let thisDish = elementN.menues[dish];
    menuList += `
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
  return menuList;
}

function addToCart(id) {
  let dish = getAddedDish(id);
  dish.amount++;
  if (!shoppingCart.includes(dish)) {
    shoppingCart.push(dish);
  }
  renderShoppingCartDesktop();
  renderShoppingCartMobile();
}

function getAddedDish(id) {
  for (let categoryIndex = 0; categoryIndex < dishes.length; categoryIndex++) {
    const category = dishes[categoryIndex];

    for (let dishIndex = 0; dishIndex < category.menues.length; dishIndex++) {
      const menu = category.menues[dishIndex];
      if (menu.id == id) {
        return menu;
      }
    }
  }
}

function removeFromCart(id) {
  let dish = getAddedDish(id);
  dish.amount--;

  if (dish.amount < 1) {
    const removeIndex = shoppingCart.indexOf(dish);
    shoppingCart.splice(removeIndex, 1);
  } else if (dish.amount == 0) {
    deleteItemFromBasket(dish);
  } else if (!shoppingCart.includes(dish)) {
    shoppingCart.push(dish);
  }
  renderShoppingCartDesktop();
  renderShoppingCartMobile();
}

function renderShoppingCartDesktop(id) {
  let shoppingCartDesktop = document.getElementById("shoppingCartDesktop");
  shoppingCartDesktop.innerHTML = "";

  let amountNumber = document.getElementById("shoppingSum");
  amountNumber.innerHTML = "";
  let subtotal = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    const dish = shoppingCart[i];

    let price = dish.price * dish.amount;

    shoppingCartDesktop.innerHTML += `
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
    subtotal += dish.price * dish.amount;
  }
  let totalDelivery = subtotal + 4.99;
  amountNumber.innerHTML = `<div class="basket-price-final-count">
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
                    <a onclick=""> Buy now (${totalDelivery.toFixed(2).replace(".", ",")}€)</a>
                  </div>
        </div>`;
}

function renderShoppingCartMobile() {
  let shoppingCartMobile = document.getElementById("shoppingCartMobile");
  shoppingCartMobile.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    const dish = shoppingCart[i];
    const price = dish.price * dish.amount;
    shoppingCartMobile.innerHTML += `
                <div class="basketic">
    
                    <span id="dishAmount${i}">${dish.amount}x ${dish.name} - ${price.toFixed(2).replace(".", ",")} € </span>
                  <div class="dish-amount-counter">
                    <a onclick="removeFromCart(${dish.id})"><img src="${changeDeleteIcon()}"></a>
                    ${dish.amount}<a onclick="addToCart(${dish.id})"><img src="./assets/icons/plus.svg"></a>   
                  </div>
                </div>
                

      `;
  }
}

function changeDeleteIcon(id) {
  for (let i = 0; i < shoppingCart.length; i++) {
    const dish = shoppingCart[i];
    if (dish.amount == 1) {
      return `./assets/icons/delete_icon_dark.svg`;
    }
    else if (dish.amount > 1) {
      return `./assets/icons/minus.svg`;
    }
  }
}

function deleteItemFromBasket(index) {
  shoppingCart.splice(index, 1);
}
