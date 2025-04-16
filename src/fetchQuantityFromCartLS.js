import { getCartProductFromLS } from "./getCartProduct.js";

export const fetchQuantityFromCartLS = (id, price) => {
  const cartProducts = getCartProductFromLS();


  const existingProduct = cartProducts.find((curProd) => curProd.id === id);


  console.log("Existing Product:", existingProduct);


  let quantity = 1;

  if (existingProduct) {
  
    quantity = existingProduct.quantity || 1;
    price = existingProduct.price || price; 
  } else {
    console.warn(`Product with ID ${id} not found in localStorage`);
  }

  console.log(`Fetched Quantity: ${quantity}, Price: ${price}`);
  return { quantity, price };
};
