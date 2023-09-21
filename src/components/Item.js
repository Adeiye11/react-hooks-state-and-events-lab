import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const cartClass = isInCart ? "in-cart" : ""
  const buttonTxt = isInCart ? "Remove From Cart" : "Add To Cart"
  const buttonClass = isInCart ? "remove" : "add"


  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => { handleAddToCartClick() }} className={buttonClass}>{buttonTxt}</button>
    </li>
  );
}

export default Item;
