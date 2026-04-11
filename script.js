let shoppingCart = [];

function init() {
  renderCategoryDishes();
}

function renderCategoryDishes() {
  let categoryDish = document.getElementById("main_menu");
  categoryDish.innerHTML = "";

  for (let index = 0; index < dishes.length; index++) {
    let dishName = dishes[index];
    categoryDish.innerHTML += `
             <div class="category_name">
            <img src="" alt="slika kategorije" class="category_image">
            <h2 class="category_title">${dishName.category}</h2>
        </div>
        <div class="menu_list" id="menu_list${index}">
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
                 <div class="menu_card">
                <div class="card_description">
                    <img src="" alt="slika jela" class="card_image">
                    <div>
                    <h3>${thisDish.name}</h3>
                    <span class="item_description">${thisDish.description}</span>
                    </div>
                </div>
                <div class="card_price">
                    <p class="item_price">${thisDish.price.toFixed(2).replace(".", ",")} €</p>
                    <button class="add_item" onclick="addToCart(${thisDish.id})">Add</button>
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
    shoppingCart.pop(dish);
  } else if (!shoppingCart.includes(dish)) {
    shoppingCart.push(dish);
  }
  renderShoppingCartDesktop();
  renderShoppingCartMobile();
}

function renderShoppingCartDesktop() {
  let shoppingCartDesktop = document.getElementById("shoppingCartDesktop");
  shoppingCartDesktop.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    const dish = shoppingCart[i];

    let price = dish.price * dish.amount;

    shoppingCartDesktop.innerHTML += `
                <div>
                    ${dish.amount}x ${dish.name} - ${price.toFixed(2).replace(".", ",")} €
                    <button onclick="removeFromCart(${dish.id})">➖</button>
                    <button onclick="addToCart(${dish.id})">➕</button>   
                </div>
               `;
  }
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
