import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ allItems, onRemoveItem, onToggle, onRemove }) {
  const [sortBy, setSortBy] = useState("packed");
  let sortedItems;

  if (sortBy === "input") sortedItems = allItems;

  if (sortBy === "description")
    sortedItems = allItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = allItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onRemoveItem={onRemoveItem}
              onToggle={onToggle}
            />
          );
        })}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onRemove}>Clear List</button>
      </div>
    </div>
  );
}
