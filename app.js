//where the real logic is.

const readline = require('readline');
const items = require('./productItems');
const {cart, addToCart, removeItemFromCart, calculateTotalItems} = require('./Cart.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Function that displays the items available.
 function showProducts() {
    console.log("Available Products:");

    items.forEach(product => console.log(`${product.id}, ${product.name}, ${product.price}, ${product.quantity}`));

    console.log("Your cart:");
    cart.forEach(item => console.log(`${item.name} x${item.quantity}`));
    console.log(`\nTotal: $${calculateTotalItems()}\n`);

 }

  function Shopping () {
     showProducts();

     rl.question('Enter the product Id you wish to add to the learnable cart list (or type "checkout" to complete):', (answer) => {
       if(answer.toLowerCase() === 'checkout') {
         console.log("Thank You for shopping with learnable023 commerce shop!!");
         rl.close();
       }else {
          const productId = parseInt(answer);
           const product = items.find(p => p.id === productId );

           if(product) {
            rl.question( 'Enter the quantity: ', quantity => {
              addToCart(product, parseInt(quantity));
              Shopping();
            });
           } else {
            console.log('Invalid product ID. Please try again later. ');
            Shopping();
           }
       }
     });
  }

 Shopping();



