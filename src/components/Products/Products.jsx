import React from "react";
import { useState } from "react";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Products = function () {
const [newProductData,setProductData]=useState([])

const productDataHandler=(newProductData)=>{
setProductData((prevData)=>[...prevData,newProductData])
}



  return (
    <React.Fragment>
      <ProductForm onSaveData={productDataHandler} />
      <ProductList items={newProductData} />
    </React.Fragment>
  );
};

export default Products;
