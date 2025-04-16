import "./style.css";
import products from "./api/products.json";
// import more_products from "./api/more_products.json";
// console.log(products);
import { showProductContainer } from "./homeProductCards";
// import { showProductContainer_2 } from "./more_products";


// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);
// showProductContainer_2(more_products);


