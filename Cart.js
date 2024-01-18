//Shopping Cart Module.

let cart = [];
//Function that adds items to the cart.
function addCart (product, quantity) {
  const item = { ...product, quantity };
  cart.push(item);
}

//Function that removes item from cart.
function removeItem(productId) {
  cart.filter(item => item.Id !== productId);
}
 
//Function that calculates the total amount of item in the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0 );
}

module.exports = {cart, addCart, removeItem, calculateTotal};