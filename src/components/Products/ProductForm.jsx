import { v4 as uuidv4 } from "uuid";
import { useState } from "react";


const ProductForm = function (prop) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

const nameChangeHandler =(event)=>{
setEnteredName(event.target.value)
}
const amountChangeHandler =(event)=>{
setEnteredAmount(event.target.value)
}
const categoryChangeHandler =(event)=>{
setEnteredCategory(event.target.value)
}

const submitHandler=(event)=>{
  event.preventDefault();
  const productData = {
   name: enteredName,
    amount: enteredAmount,
    category: enteredCategory,
    id:uuidv4()
  };
  prop.onSaveData(productData); //lifting the state
  setEnteredName(""); // reseting state to old values
  setEnteredAmount("");
  setEnteredCategory("");
  localStorage.setItem(productData.id,productData)
  }



  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md  rounded-md border p-5">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Add Product
            </h2>

            <form className="mt-8 " onSubmit={submitHandler}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Product Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Product Name"
                      value={enteredName}
                      onChange={nameChangeHandler}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Product Price
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Product Price"
                      value={enteredAmount}
                      onChange={amountChangeHandler}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Category
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      id="Category"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    value={enteredCategory}
                    onChange={categoryChangeHandler}
                      >
                      <option value="" >
                        Select an option
                      </option>
                      <option className="text-black" value="FoodItems">
                        Food Items
                      </option>
                      <option className="text-black" value="ElectronicsItems">
                        Electronics Items
                      </option>
                      <option className="text-black" value="SkinCareItems">
                        SkinCare Items
                      </option>
                      <option className="text-black" value="GroceryItems">
                        Grocery Items
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductForm;
