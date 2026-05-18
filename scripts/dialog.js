const dialogRef = document.getElementById("myDialog");

function openDialog() {
    dialogRef.showModal();
deleteBasketItems();
/*
    setTimeout(function () {
        closeDialog();
    },
        15000);
        */
}

function closeDialog() {
    dialogRef.close();
}