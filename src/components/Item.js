import React, { useState } from "react";

function Item({ name, category }) {
  const [active, setActive] = useState(true);
  const [inCart, setInCart] = useState("");
  const [btnClass, setBtnClass] = useState("add");
  function handleAdd(e) {
    if (active) {
      setInCart("in-cart");
      setBtnClass("remove");
      e.target.textContent = "Remove from Cart";
      setActive(false);
    } else {
      setInCart("");
      setBtnClass("add");
      e.target.textContent = "Add to Cart";
      setActive(true);
    }
  }
  return (
    <li className={inCart} onClick={handleAdd}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass}>Add to Cart</button>
    </li>
  );
}

export default Item;
