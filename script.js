


function init(){
   // renderMenuList();
   renderCategoryDishes();
}

function renderCategoryDishes(index){
   let dishName = dishes[index];
    let categoryDish = document.getElementById("main_menu");
    categoryDish.innerHTML="";

    for (let index = 0; index < dishes.length; index++) {
       //  let dishName = dishes[index];

        categoryDish.innerHTML+=`
             <div class="category_name">
            <img src="" alt="slika kategorije" class="category_image">
            <h2 class="category_title">${dishes.category}</h2>
        </div>
        <div class="menu_list" id="menu_list${index}">
         ${renderMenuList(index, dishName)}
        </div>
        `;
        
    }
}

function renderMenuList(index, dishName){
     let elementN = dishes[index];
  //  let menuList = document.getElementById(`menu_list${index}`);
     //   menuList.innerHTML="";
    let menuList ="";
  //  for (let index = 0; index < dishes.length; index++) {
      
        for(let dish = 0; dish < elementN.menues.length; dish++){

         //let dish = dishes[index];
         //let menu = dishName[index];
         

       // console.log(menu);
       // console.log(dish);   ${renderMenuList(dishName, index)}
        
        
        menuList += `
                 <div class="menu_card">
                <div class="card_description">
                    <img src="" alt="slika jela" class="card_image">
                    <div>
                    <h3>${elementN.menues[index].name}</h3>
                    <span class="item_description">${elementN.menues[index].description}</span>
                    </div>
                </div>
                <div class="card_price">
                    <p class="item_price">${elementN.menues[index].price.toFixed(2).replace(".",",")} €</p>
                    <button class="add_item">Add</button>
                </div>
            </div>
        `;
         }
  //  } 
  return menuList;
    
}


