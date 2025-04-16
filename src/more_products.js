import { addToCart } from "./addToCart.js";

import { homeQuantityToggle } from "./homeQuantityToggle.js";


const productContainer = document.querySelector("#product_containing");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer_2 = (more_products) => {

  //  by Web3




  if (more_products) {
    return false;
  }

  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);


    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
        const quantity = 1;
        const currentCardElement = document.querySelector(`#card${id}`);
        const productQuantity = currentCardElement. querySelector(".productQuantity");
        productQuantity.innerText = quantity;
        console.log(quantity);
        productQuantity.setAttribute("data-quantity", quantity.        toString());
      });
    
    productContainer.append(productClone);
  });
};
