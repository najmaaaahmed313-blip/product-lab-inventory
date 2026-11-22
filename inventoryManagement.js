let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(productName) {
    products.push(productName);
}

function updateProductName(position, newName) {
    products[position] = newName;
}

function removeLastProduct() {
    products.pop();
}

module.exports = {
    products,
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct
};