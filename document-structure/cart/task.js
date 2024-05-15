const cart = document.querySelector('.cart__products');
const add = document.querySelectorAll('.product__add');
const quantity = document.querySelectorAll('.product__quantity-control');


for (let item of quantity) {
  item.addEventListener('click', () => {
    const quantityValue = item.parentElement.querySelector(".product__quantity-value");
    if (item.classList.contains("product__quantity-control_dec") && quantityValue.textContent != 1) {
      quantityValue.textContent--;
    } else if (item.classList.contains("product__quantity-control_inc")) {
      quantityValue.textContent++;
    };
  });
};


for (let item of add) {
  item.addEventListener("click", () => {

    const Products = Array.from(cart.getElementsByClassName('cart__product'));

    for (let element of Products) {
      if (element.dataset.id == item.closest(".product").dataset.id) {
        const value = Number(element.querySelector(".cart__product-count").textContent);
        const plusValue = Number(item.closest(".product").querySelector(".product__quantity-value").textContent.trim());

        element.querySelector(".cart__product-count").textContent = value + plusValue;
        localStorage.setItem("cartHTML", cart.innerHTML);
        return;
      };
    };

    const product = item.closest(".product");

    const quantityValue = product.querySelector(".product__quantity-value").textContent.trim();
    cart.insertAdjacentHTML("beforeend",
      `<div class="cart__product" data-id="${product.dataset.id}">
      <img class="cart__product-image" src="${product.querySelector(".product__image").getAttribute("src")}">
      <div class="cart__product-count">${quantityValue}</div>
      </div>`);
  });
};