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

function renderShoppingCartDesktop() {
  let shoppingCartDesktop = document.getElementById("shoppingCartDesktop");
  shoppingCartDesktop.innerHTML = "";

  let amountNumber = document.getElementById("shoppingSum");
  amountNumber.innerHTML = "";
  let subtotal = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    const dish = shoppingCart[i];

    let price = dish.price * dish.amount;

    shoppingCartDesktop.innerHTML += `
                <div>
                    <span id="dishAmount${i}">${dish.amount}x ${dish.name} - ${price.toFixed(2).replace(".", ",")} € </span>
                  <div class="dish-amount-counter">
                    <a onclick="removeFromCart(${dish.id})"><img src="./assets/icons/minus.svg"></a>
                    ${dish.amount}<a onclick="addToCart(${dish.id})"><img src="./assets/icons/plus.svg"></a>   
                  </div>
                </div>
                `;
    subtotal += dish.price * dish.amount;
  }
  let totalDelivery = subtotal + 4.99;
  amountNumber.innerHTML = `<div><span><b>Subtotal: ${subtotal.toFixed(2).replace(".", ",")} €</b></span>
  <br><span><b>Delivery fee: 4,99 €</b></span><br>
  <span><b>Total: ${totalDelivery.toFixed(2).replace(".", ",")} €</b></span></div>`;
}

function renderShoppingCartMobile() {
  let shoppingCartMobile = document.getElementById("shoppingCartMobile");
  shoppingCartMobile.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    const dish = shoppingCart[i];
    const price = dish.price * dish.amount;
    shoppingCartMobile.innerHTML += `
                <div>
                    ${dish.amount}x ${dish.name} - ${price.toFixed(2).replace(".", ",")} €
                    <button onclick="removeFromCart(${dish.id})">➖</button>
                    <button onclick="addToCart(${dish.id})">➕</button>
                </div>
                `;
  }
}

function deleteItemFromBasket(index) {
  shoppingCart.splice(index, 1);
}
