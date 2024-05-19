import { useState } from "react";

export function Form({ onAddItem }) {
  // state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // usual preventing default behavior like in vanilla JS
    e.preventDefault();

    // guard clause
    if (!description) return;

    // creating new item object
    const item = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    // restauring to initial state
    setDescription("");
    setQuantity(1);

    // updating state by calling function by prop name (parent element)
    onAddItem(item);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="item..."
      ></input>
      <button>ADD</button>
    </form>
  );
}
