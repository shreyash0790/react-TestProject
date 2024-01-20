/* eslint-disable react/prop-types */
import ProductCategory from "./ProductCategory";

const ProductList = function (props) {
    const productData = props.items;

    const categories = ["FoodItems", "SkinCareItems", "ElectronicsItems", "GroceryItems"];
  
    return (
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {categories.map((category) => (
          <ProductCategory key={category} category={category} productData={productData} />
        ))}
      </div>
    );
};

export default ProductList;
