import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filtered, setFiltered] = useState(items);
  function handleChange(e) {
    if (e.target.value === "All") {
      setFiltered(items);
    } else {
      setFiltered(items.filter((item) => item.category === e.target.value));
    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
