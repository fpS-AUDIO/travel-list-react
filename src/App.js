import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  // shared state array of items (used by Form and PackingList)
  const [items, setItems] = useState([]);

  // function to update items array (immutability)
  function addItems(newItem) {
    // returning new array by spreading the old one with the new item
    setItems((items) => [...items, newItem]);
  }

  function removeItem(id) {
    // using filter method to remove element by id without muting the origin array (creating a new one)
    setItems((items) => items.filter((el) => el.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }

  function removeAllItems() {
    const confirmed = window.confirm("Are you sure to remove all items?");
    if (!confirmed) return;
    setItems(() => []);
  }

  return (
    <div className="app">
      <Logo />
      {/* passing addItems function as prop to child component */}
      <Form onAddItem={addItems} />
      <PackingList
        allItems={items}
        onRemoveItem={removeItem}
        onToggle={toggleItem}
        onRemove={removeAllItems}
      />
      <Stats allItems={items} />
    </div>
  );
}
