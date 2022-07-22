import React from "react";
import {useState} from "react";


function Item({ name, category }) 
{
  const [inCart, setInCart] = useState(false);

  const putInCart = () =>{return setInCart(inCart=>!inCart)}

  const itemClass = inCart ? "in-cart" : "";
  const buttonClass = inCart ? "remove" : "add";
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={putInCart} className={buttonClass}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
