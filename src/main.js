import { showProductContainer } from "./homeProductCards.js";

const loadProducts = async () => {
  try {
    const response = await fetch('/api/products.json'); // This fetches from public/api/products.json
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const products = await response.json();
    showProductContainer(products);
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

loadProducts();
