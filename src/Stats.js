export function Stats({ allItems }) {
  if (!allItems.length)
    return (
      <footer className="stats">
        <em>You have no items in your list. Let's start add items!</em>
      </footer>
    );

  const numItems = allItems.length;
  const packedItems = allItems.filter((item) => item.packed).length;
  const percentPackedItems = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {numItems === packedItems ? (
        <em>You have packed all of your items. You're ready for the travel!</em>
      ) : (
        <em>
          You have {numItems} items in your list, and you already packed
          {packedItems} ({percentPackedItems}%)
        </em>
      )}
    </footer>
  );
}
