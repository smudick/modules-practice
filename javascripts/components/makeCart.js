import { setCart } from './../helpers/data/cartData.js';
import { makeCartDom } from './domCart.js';
import { makeCartModal } from './domModal.js';

const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on("click", () => {
      setCart(array[index]);
      makeCartDom();
      makeCartModal();
    });
  };

  export { addToCart };