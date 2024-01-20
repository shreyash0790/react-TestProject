import { useState } from "react";

export function ProductItems(prop) {
  const [deleteItem, setDelete] = useState(true);

  const deleteHandler = () => {
    setDelete(false);
  };

  return (
    <div>
      {deleteItem && (
        <ul>
          <li className="text-xl font-semibold">
            {prop.name} {prop.amount}{" "}
          </li>
          <button
            type="button"
            className="mt-4  w-22 rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </ul>
      )}
    </div>
  );
}

export default ProductItems;
