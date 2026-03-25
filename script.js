function init() {
  renderCategoryDishes();
}

function renderCategoryDishes(index) {
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
    menuList += `
                 <div class="menu_card">
                <div class="card_description">
                    <img src="" alt="slika jela" class="card_image">
                    <div>
                    <h3>${elementN.menues[dish].name}</h3>
                    <span class="item_description">${elementN.menues[dish].description}</span>
                    </div>
                </div>
                <div class="card_price">
                    <p class="item_price">${elementN.menues[dish].price.toFixed(2).replace(".", ",")} €</p>
                    <button class="add_item">Add</button>
                </div>
            </div>
        `;
  }
  return menuList;
}
