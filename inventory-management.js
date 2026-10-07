// write code here for inventory management system

let products = [{ name: "Laptop" }, { name: "Headphones" }, { name: "Monitor" }];

function logFirstProduct() {
    console.log(products[0].name);
}

function addProduct(productName) {
    products.push({ name: productName });
    console.log(`${productName} has been added to the inventory.`);
}

function updateProductName(position, newName) {
    products[position].name = newName;
}

function removeProduct(position) {
    products.splice(position, 1);
}



//export the necessary functions for testing
module.exports = {
logFirstProduct, typeof logFirstProduct !== "undefined" ? logFirstProduct : undefined,
addProduct, typeof addProduct !== "undefined" ? addProduct : undefined,
updateProductName, typeof updateProductName !== "undefined" ? updateProductName : undefined,
removeProduct, typeof removeProduct !== "undefined" ? removeProduct : undefined,

};