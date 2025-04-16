import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLS } from "./getCartProduct.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

// DOM elements
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = (filterProducts) => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);
    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent = lSActualData.price;

    productClone.querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone.querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.appendChild(productClone);
  });
};

// ✅ Async init
const init = async () => {
  try {
    const response = await fetch('/api/products.json');
    const products = await response.json();
    const cartProducts = getCartProductFromLS();

    const filterProducts = products.filter((curProd) =>
      cartProducts.some((curElem) => curElem.id === curProd.id)
    );

    console.log("Filtered Products:", filterProducts);
    showCartProduct(filterProducts);
    updateCartProductTotal();
  } catch (error) {
    console.error("Error loading products:", error);
  }
};

init();
