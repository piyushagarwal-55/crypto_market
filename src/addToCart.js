import { getCartProductFromLS } from "./getCartProduct";
import { cartcountupdate} from "./cartcountupdate";
import { showToast } from "./showToast";


getCartProductFromLS();
export const addToCart = (event, id, stock) => {

let arrLocalStorageProduct = getCartProductFromLS();
const currProdEle=document.querySelector(`#card${id}`);



let price = currProdEle.querySelector(".productPrice").innerText;
let quantity = currProdEle.querySelector(".productQuantity").innerText;



console.log(quantity);

price=price.replace('₹','');
price=Number(price);

let existingProd = arrLocalStorageProduct.find((curr)=>
         curr.id===id);

console.log(existingProd);

if(existingProd){
     quantity=Number(quantity);
     quantity=Number(existingProd.quantity)+quantity;
     price=quantity*price;
     let updatedCart={id,quantity,price};
     updatedCart=arrLocalStorageProduct.map((curr)=>{
        return curr.id===id ? updatedCart:curr;
     });
     localStorage.setItem('cartProductLS',JSON.stringify(updatedCart)); 
     showToast("add", id);
}

if(existingProd){
    return false;
}

price=quantity*price;
quantity=Number(quantity);

console.log(price);
  

arrLocalStorageProduct.push({id,quantity,price});
localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct)); 

cartcountupdate(arrLocalStorageProduct);
showToast("add", id);
}