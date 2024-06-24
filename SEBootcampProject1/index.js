let total = 0;  // Total cost initialized to zero
let quantity=0;
let price=0;
let quantityInput;
let product=null;
let previousQuantities = { "addToCart1": 0, "addToCart2": 0, "addToCart3": 0}; //store previous quantity
const addToCartBtn1 = document.querySelector('#addToCart1');
const addToCartBtn2 = document.querySelector('#addToCart2');
const addToCartBtn3 = document.querySelector('#addToCart3');


// First Add button
document.addEventListener('DOMContentLoaded', function() {
    addToCartBtn1.addEventListener('click', function() { 

    quantityInput = document.querySelector('#quantity1');
    let details1;
    if (quantityInput && quantityInput.value <= 0) {
        details1 = 'Whoops, something went wrong while adding to cart';
        document.getElementById('details1').innerHTML = details1;
    } else {
        quantity = parseInt(quantityInput.value);  
        price = parseFloat(addToCartBtn1.getAttribute('data-price'));
        product=String(addToCartBtn1.getAttribute('data-product'));

        // Update total by subtracting previous quantity's price and adding the new one
        total -= previousQuantities["addToCart1"] * price;
        total += price * quantity;  

        // Update previous quantity
        previousQuantities["addToCart1"] = quantity;

        details1 = 'Great! Order of ' + quantity + ' services is received, total price is $'
        + total.toFixed(2);  
        document.getElementById('details1').innerHTML = details1;
    }
  
        // quantityInput = document.querySelector('#quantity1');
        // let details1;
        // if (quantityInput && quantityInput.value <= 0) {
        //     details1 = 'Whoops, something went wrong while adding to cart'
        //     document.getElementById('details1').innerHTML = details1;
        // } else {
        //     quantity = parseInt(quantityInput.value);  
        //     price = parseFloat(addToCartBtn1.getAttribute('data-price'));
        //     product=String(addToCartBtn1.getAttribute('data-product'));
        //     total += price * quantity;  
        //     details1 = 'Great! Order of ' + quantity + 'services is received, total price is $'
        //     + total.toFixed(2);  
        //     document.getElementById('details1').innerHTML = details1;
        // }

    });
    

    addToCartBtn2.addEventListener('click', function() {

        quantityInput = document.querySelector('#quantity2');
        let details2;
        if (quantityInput && quantityInput.value <= 0) {
            details2 = 'Whoops, something went wrong while adding to cart';
            document.getElementById('details2').innerHTML = details2;
        } else {
            quantity = parseInt(quantityInput.value);  
            price = parseFloat(addToCartBtn2.getAttribute('data-price'));
            product=String(addToCartBtn2.getAttribute('data-product'));

            // Update total by subtracting previous quantity's price and adding the new one
            total -= previousQuantities["addToCart2"] * price;
            total += price * quantity;  

            // Update previous quantity
            previousQuantities["addToCart2"] = quantity;

            details2 = 'Great! Order of ' + quantity + ' services is received, total price is $'
            + total.toFixed(2);  
            document.getElementById('details2').innerHTML = details2;
        }



        // quantityInput = document.querySelector('#quantity2');
        // let details2;
        // if (quantityInput && quantityInput.value <= 0) {
        //     details2 = 'Whoops, something went wrong while adding to cart'
        //     document.getElementById('details2').innerHTML = details2;
        // } else {
        //     quantity = parseInt(quantityInput.value);  
        //     price = parseFloat(addToCartBtn2.getAttribute('data-price'));
        //     product=String(addToCartBtn2.getAttribute('data-product'));
        //     total += price * quantity;  
        //     details2 = 'Great! Order of ' + quantity + 'services is received, total price is $'
        //     + total.toFixed(2);  
        //     document.getElementById('details2').innerHTML = details2;
        // }
    });

    addToCartBtn3.addEventListener('click', function() {

        quantityInput = document.querySelector('#quantity3');
        let details3;
        if (quantityInput && quantityInput.value <= 0) {
            details3 = 'Whoops, something went wrong while adding to cart';
            document.getElementById('details3').innerHTML = details3;
        } else {
            quantity = parseInt(quantityInput.value);  
            price = parseFloat(addToCartBtn3.getAttribute('data-price'));
            product=String(addToCartBtn3.getAttribute('data-product'));

            // Update total by subtracting previous quantity's price and adding the new one
            total -= previousQuantities["addToCart3"] * price;
            total += price * quantity;  

            // Update previous quantity
            previousQuantities["addToCart3"] = quantity;

            details3 = 'Great! Order of ' + quantity + ' services is received, total price is $'
            + total.toFixed(2);  
            document.getElementById('details3').innerHTML = details3;
        }



        // quantityInput = document.querySelector('#quantity3');
        // let details3;
        // if (quantityInput && quantityInput.value <= 0) {
        //     details3 = 'Whoops, something went wrong while adding to cart'
        //     document.getElementById('details3').innerHTML = details3;
        // } else {
        //     quantity = parseInt(quantityInput.value);  
        //     price = parseFloat(addToCartBtn3.getAttribute('data-price'));
        //     product=String(addToCartBtn3.getAttribute('data-product'));
        //     total += price * quantity;  
        //     details3 = 'Great! Order of ' + quantity + 'services is received, total price is $'
        //     + total.toFixed(2);  
        //     document.getElementById('details3').innerHTML = details3;
        // }
    });   
});

// let total = 0;  // Total cost initialized to zero

// document.addEventListener('DOMContentLoaded', function() {
//     const addToCartButtons = [document.querySelector('#addToCart1'), document.querySelector('#addToCart2'), document.querySelector('#addToCart3')];

//     addToCartButtons.forEach((button, index) => {
//         button.addEventListener('click', function() {
//             const quantityInput = document.querySelector(`#quantity${index + 1}`);
//             if (quantityInput && Number.isInteger(parseInt(quantityInput.value)) && parseInt(quantityInput.value) > 0) {
//                 const quantity = parseInt(quantityInput.value);  // Ensuring quantity is treated as an integer
//                 const price = parseFloat(button.getAttribute('data-price')); // Correct reference to the button
//                 total += price * quantity;
//                 console.log(`Adding to cart: ${quantity} units at $${price} each.`);
//                 console.log(`Total: $${total.toFixed(2)}`);  
//                 alert(`Great! Order of ${quantity} item(s) received. Total price is $${price * quantity}.`);
//             } else {
//                 console.error('Invalid quantity or quantity input not found.');
//             }
//         });
//     });
// });
 // quantityInput = document.querySelector('#quantity1');
        // if (quantityInput && quantityInput.value > 0) {
        //     quantity = parseInt(quantityInput.value);  
        //     price = parseFloat(addToCartBtn1.getAttribute('data-price'));
        //     product=String(addToCartBtn1.getAttribute('data-product'));
        //      // Correct reference to the button
        //     total += price * quantity;  
        //     var details1 = 'Great! Order of ' + quantity + 'services is received, total price is $'
        //     + total.toFixed(2);  
        //     document.getElementById('details').innerHTML = details;
        // } else {
        //     var details2 = 'Whoops, something went wrong while adding to cart'
        //     document.getElementById('detals').innerHTML = details2;
        // }

