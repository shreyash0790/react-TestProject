/* eslint-disable react/prop-types */
import ProductItems from "./ProductItems";

const ProductCategory=function(props){

return(
    <div className="rounded-md border-2 inline-block mr-2.5 bg-slate-600 bg-opacity-25">
    <div className="p-4">
      <h1 className="inline-flex items-center font-bold text-black text-2xl mb-4">
        {props.category}
      </h1>
      <ul className="list-disc pl-6">
        {props.productData
          .filter((data) => data.category === props.category)
          .map((data) => (
            <ProductItems key={data.id} name={data.name} amount={data.amount} />
          ))}
      </ul>
    </div>
  </div>
)



}

export default ProductCategory