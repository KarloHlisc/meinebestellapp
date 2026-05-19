const dialogRef = document.getElementById("myDialog");
const hideShopCard = document.getElementById("section-shopingCards");

function openDialog() {
    hideShopCard.classList.add("d-none");
    dialogRef.showModal();
    shoppingCart = [];
    deleteBasketItems();

    setTimeout(function () {
        closeDialog();
        },5000);        
}

function closeDialog() {
    hideShopCard.classList.remove("d-none");
    dialogRef.close();
}