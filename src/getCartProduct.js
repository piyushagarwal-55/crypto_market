import { cartcountupdate } from "./cartcountupdate";

export const getCartProductFromLS=()=>{
    let cartProducts=localStorage.getItem(`cartProductLS`);

    if(!cartProducts){
        return [];
    }
   cartProducts=JSON.parse(cartProducts);
  cartcountupdate(cartProducts);

   return cartProducts;
}
