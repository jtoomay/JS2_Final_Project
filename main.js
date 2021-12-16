/* 
Jake Toomay 
October 20, 2021 
*/
//* Array of objects containing information about the products available for purchase 
let products = [
{
    id: 0,
    photo: "Images/iphone11new.png",
    productName: "iPhone11",
    description: "iPhone 11 , 64GB, Unlocked",
    price: "499.00"
},
{
    id: 1,
    photo: "Images/iphone12new.png",
    productName: "iPhone 12",
    description: "iPhone 12 , 64GB, Unlocked",
    price: "729.00"
},
{
    id: 2,
    photo: "Images/iphone13new.png",
    productName: "iPhone 13",
    description: "iPhone 13 , 128GB, Unlocked",
    price: "829.00"
},
{
    id: 3,
    photo: "Images/protectionPlannew.png",
    productName: "Apple Care Protection Plan",
    description: "Protection plan covered by Apple for 2 years",
    price: "200.00"
},
{
    id: 4,
    photo: "Images/airpods1.jpg",
    productName: "Apple AirPods Second Generation",
    description: "Apple AirPods Second Generation (without wireless charging case) ",
    price: "150.00"
},
{
    id: 5,
    photo: "Images/airpodsPro.jpg",
    productName: "AirPods Pro",
    description: "Apple AirPods Pro (without wireless charging case)",
    price: "250.00"
},
];

let container = document.getElementById("container"); // Container that will hold all of the elements 

products.forEach(product => { //  For each loop that will loop through each element of the array of items 
//* Container
    let inContain = document.createElement("div"); // Create a container element that will hold each of the values for the items 
    inContain.className = "product-group"; // Give the container a class name 

//* Image of the product
    let productImage = document.createElement("img"); // Create an image element 
    productImage.src = product.photo; // Assign the source for the photo
    productImage.alt = product.description; // Assign an alt attribute for the image 
    inContain.append(productImage); // Append the image to the container 

//* Name and price of the product 
    let name = document.createElement("p"); // Create a header element for the name of the items 
    name.textContent = `${product.productName} : Starting at $${product.price}`; // Give the title a value that includes the price of the item 
    name.className = "title"; // Assign a class name to the header that holds the name of the product 
    inContain.append(name); // Append the name element to the container that holds the values for the product 

//* Description of the product
    let descriptionOf = document.createElement("p"); // Create an element that will hold the description of the item
    descriptionOf.textContent = product.description; // Assign the text Content to the description value of the array holding the items 
    descriptionOf.className = "description"; // Assign a class name of description 
    inContain.append(descriptionOf); // Append the description to the container holding the specific item 

//* Button
    let addToCart = document.createElement("button"); // Create a button that will add the product to the cart 
    addToCart.className = "addToCart"; // Assign a class name of addToCart
    addToCart.textContent = "Add To Cart"; // Text content of the button 
    inContain.append(addToCart); // Append the button to the container holding the specific item 
    container.append(inContain); // Append all items to the page
    addToCart.addEventListener("click", function() { // Event Listener that will listen for the "Click" on the addToCart button. It will also call an anonymous function so a value can be passed as a parameter 
        addToCartFunc(product); // Call addToFunc function with the product as a param
        total += parseInt(product.price); // Add the value of the price to the total amount
        totalPrice.textContent = `Total: $${(total + shippingCost).toFixed(2)}`; // Modify the total to add the price of shipping when an item is added to the cart
        });
    });

//* Cart 
let shoppingCart = document.getElementById("cart"); // Shopping Cart 
let checkout = document.createElement("div"); // Create an element for the checking out process. Pick Shipping and view total
// shoppingCart.appendChild(checkout); // Append the checkout container to the child of the cart 
checkout.className = "checkout"; // Assign a class name to the checkout container 
checkout.id = "checkout-item"; 

let selection = document.querySelector("#select"); // Selection Element 
selection.className = "selection-list"; // Give the selection list a class name 

let shippingOptions = [ // Array showing different shipping options 
{
    "shippingKind": "Free Shipping (5-7 Business Days)",
    "price": 0
},
{
    "shippingKind": "Standard Shipping (3-5 Business Days)",
    "price": 25.00
},
{
    "shippingKind": "Overnight Shipping",
    "price": 50.00
}
];

//* Initial Values
let total = 0; // Initial value of total before anything is selected 
let shippingCost = 0; // Give Shipping Cost a initial value of 0

//* For each loop that will go through the array of shipping options
shippingOptions.forEach(item => {  // Start loop 
    let option = document.createElement("option"); // Create an option element for each item 
    option.value = item.price; // Give each option a value of their price
    option.textContent = `${item.shippingKind} $${item.price}`; // Text Content for the option element
    selection.append(option); // Append the option element to the selection list 
});

 //* Add an event listener that will update the price of the cart when the user selects an option from the menu 
selection.addEventListener("change", (e) => { // Handler, pass in the event 
    shippingCost = parseInt(e.target.value); // Update the shipping cost to equal the item selected's value 
    totalPrice.textContent = `Total: $${(total + shippingCost).toFixed(2)}`; // Update the total to the total + whatever shipping value is selected when the user changes it 
});

//* Function that will fire every time an item is added to the cart 
function addToCartFunc(e) {
//* make a container every time the button is clicked 
    let cartContainer = document.createElement("div"); // Create a container element that will hold each individual item 
    cartContainer.className = "cart-container"; // Give the container a class name 
    shoppingCart.append(cartContainer); // Append the individual container to the shopping cart container

//* Image
    let cartImg = document.createElement("img"); // Create an element for the image 
    cartImg.src = e.photo; // Give the image a source 
    cartImg.className = "cart-image"; // Give the image a class name
    cartContainer.append(cartImg); 

//* Item Label 
    let cartItem = document.createElement("p"); // Create an element for the name of the Cart Item 
    cartItem.textContent = e.productName; // Give the item name a value 
    cartContainer.append(cartItem); // append the name to the container element inside the cart

//* Item Price 
    let itemPrice = document.createElement("p"); // Create an element to hold the item's price 
    itemPrice.textContent = `$${e.price}`; // Display the price of the single item that was added 
    itemPrice.className = "cart-item-price"; // Add a class name to the item that was added 
    cartContainer.append(itemPrice); // Append the price to the container holding the single element 

//* Item Description 
    let itemDesc = document.createElement("p"); // Create an element to hold the item description 
    itemDesc.textContent = e.description; // Assign the content 
    cartContainer.append(itemDesc); // Append the element to the container  

//* Remove Button 
    let removeBtn = document.createElement("button"); // Create an element to remove an item from the shopping cart 
    removeBtn.textContent = "Remove"; // Text content of the button 
    removeBtn.className = "remove-button"; // Class name of the button 
    cartContainer.append(removeBtn); // append the button to the container 
    removeBtn.addEventListener("click", function() { // Add an event listener that will fire when the button is clicked 
        cartContainer.remove(); // Remove the element from the container 
        total -= parseInt(e.price); // Update the total and remove the amount that the item added 
        totalPrice.textContent = `Total: $${(total + shippingCost).toFixed(2)}`; // Update the text content 
    });
};
let totalPrice = document.getElementById("total-price-on-page"); // Grab the total price and store it in a variable 
totalPrice.textContent = `Total: $0`; // Initial text content of the total amount 