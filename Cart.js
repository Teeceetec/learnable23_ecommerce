//Shopping Cart Module.

let cart = [];
//Function that adds items to the cart.
function addToCart (product, quantity) {
  const item = { ...product, quantity };
  cart.push(item);
}

//Function that removes item from cart.
function removeItemFromCart(productId) {
  cart.filter(item => item.Id !== productId);
}
 
//Function that calculates the total amount of item in the cart.
function calculateTotalItems() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0 );
}

module.exports = {cart, addToCart, removeItemFromCart, calculateTotalItems};