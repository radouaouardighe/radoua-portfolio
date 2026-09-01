let cart = [];
let cartCount = 0;

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(productName + " has been added to your cart!");
}

function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Your Cart:\n\n";
    let total = 0;

    cart.forEach(function(product, index) {

        message +=
            (index + 1) +
            ". " +
            product.name +
            " - " +
            product.price +
            " DH\n";

        total += product.price;
    });

    message += "\nTotal: " + total + " DH";

    alert(message);
}
