import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";

import { cartcountupdate } from './cartcountupdate';

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  // update the localStorage after removing the item
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  //   to remove the div onclick
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

  
    showToast("delete", id);
  }

  // -----------------------------------------------------
  // calculating the card total in our cartProducts page
  // // --------------------------------------------------------
  updateCartProductTotal();

 cartcountupdate(cartProducts);
};
