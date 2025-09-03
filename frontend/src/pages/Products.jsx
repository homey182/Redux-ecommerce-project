import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  console.log(products);

  const renderProduct = products.map((product) => {
    return (
      <div
        className=" w-[31%] h-[35%] mr-3 mb-3 border shadow "
        key={product.id}
      >
        <img
          className="w-full h-[20vh] object-cover"
          src={product.image}
          alt=""
        />
        <h1>{product.title}</h1>
        <small>{product.description}</small>
        <div className="flex items-start justify-between">
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
        <Link
          className="text-blue-400 block w-1/2 m-auto  "
          to={`/product-details/${product.id}`}
        >
          More info
        </Link>
      </div>
    );
  });
  return products ? (
    <div className=" w-full flex flex-wrap ">{renderProduct}</div>
  ) : (
    "Loading..."
  );
};

export default Products;
