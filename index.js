// ... (same as before) ...

document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".add-btn");
    const decreaseButtons = document.querySelectorAll(".decrease-quantity");
    const increaseButtons = document.querySelectorAll(".increase-quantity");
    const quantityElements = document.querySelectorAll(".quantity");
    const likeButtons = document.querySelectorAll(".like-btn");
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const clearCartButton = document.getElementById("clear-cart");

    let total = 0;

    addButtons.forEach((button, index) => {
        let quantity = 1; // Initial quantity

        button.addEventListener("click", () => {
            const item = button.parentNode;
            const itemName = item.querySelector("h2").textContent;
            const itemPrice = parseFloat(item.querySelector("p").textContent.slice(1));

            const cartItem = document.createElement("li");
            cartItem.innerHTML = `${itemName} - $${(itemPrice * quantity).toFixed(2)} <button class="remove-btn">Remove</button>`;
            cartItems.appendChild(cartItem);

            total += itemPrice * quantity;
            totalElement.textContent = total.toFixed(2);
        });

        decreaseButtons[index].addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityElements[index].textContent = quantity;
            }
        });

        increaseButtons[index].addEventListener("click", () => {
            quantity++;
            quantityElements[index].textContent = quantity;
        });

        likeButtons[index].addEventListener("click", () => {
            likeButtons[index].classList.toggle("active");
        });
    });


    cartItems.addEventListener("click", event => {
        if (event.target.classList.contains("remove-btn")) {
            const cartItem = event.target.parentNode;
            const itemPrice = parseFloat(cartItem.textContent.match(/\d+\.\d+/)[0]);
            
            cartItem.remove();
            total -= itemPrice;
            totalElement.textContent = total.toFixed(2);
        }
    });

    clearCartButton.addEventListener("click", () => {
        cartItems.innerHTML = "";
        total = 0;
        totalElement.textContent = total.toFixed(2);
    });
    // ... (same as before) ...
});
