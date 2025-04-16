import { getCartProductFromLS } from "./getCartProduct.js";

export const fetchQuantityFromCartLS = (id, price) => {
  const cartProducts = getCartProductFromLS();

  // Find the existing product by ID
  const existingProduct = cartProducts.find((curProd) => curProd.id === id);

  // Log for debugging
  console.log("Existing Product:", existingProduct);

  // Default values
  let quantity = 1;

  if (existingProduct) {
    // Ensure `quantity` and `price` exist in the product object
    quantity = existingProduct.quantity || 1;
    price = existingProduct.price || price; // Use the passed price as a fallback
  } else {
    console.warn(`Product with ID ${id} not found in localStorage`);
  }

  console.log(`Fetched Quantity: ${quantity}, Price: ${price}`);
  return { quantity, price };
};
