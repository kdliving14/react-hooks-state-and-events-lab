import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategory = (e)=>
  {
    return setSelectedCategory(e.target.value)
  }

  const results = items.filter(item =>
  {
    if(selectedCategory==="All")
    {
      return items;
    }
    else  
    {
      return item.category === selectedCategory;
    }
  })
      
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {results.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
