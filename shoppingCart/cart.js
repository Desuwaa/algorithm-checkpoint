const cartItems = [
    { id: 1, name: "Item 1", price: 2000, quantity: 2, liked: false },
    { id: 2, name: "Item 2", price: 3400, quantity: 2, liked: true },
    { id: 3, name: "Item 3", price: 6000, quantity: 3, liked: false }
];

function renderCart() {
    const itemList = document.getElementById("item-list");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    itemList.innerHTML = "";

    cartItems.forEach(item => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");
    itemInfo.innerHTML = `
    <span>${item.name}</span>
    <span>Price: ₦${item.price}</span>
    `;

    const itemQuantity = document.createElement("div");
    itemQuantity.classList.add("item-quantity");
    itemQuantity.innerHTML = `
    <button onclick="decreaseQuantity(${item.id})">-</button>
    <span>${item.quantity}</span>
    <button onclick="increaseQuantity(${item.id})">+</button>
    `;

    const likeButton = document.createElement("button");
    likeButton.innerHTML = item.liked ? "❤" : "♡";
    likeButton.classList.add("like-button");
    if (item.liked) {
    likeButton.classList.add("liked");
    }
    likeButton.addEventListener("click", () => toggleLike(item.id));

    cartItem.appendChild(itemInfo);
    cartItem.appendChild(itemQuantity);
    cartItem.appendChild(likeButton);
    itemList.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
});

totalPriceElement.textContent = `Total Price: ₦${totalPrice}`;
}

function increaseQuantity(itemId) {
const item = cartItems.find(item => item.id === itemId);
if (item) {
    item.quantity++;
    renderCart();
}
}

function decreaseQuantity(itemId) {
const item = cartItems.find(item => item.id === itemId);
if (item && item.quantity > 1) {
    item.quantity--;
    renderCart();
}
}

function toggleLike(itemId) {
const item = cartItems.find(item => item.id === itemId);
if (item) {
    item.liked = !item.liked;
    renderCart();
}
}

renderCart();