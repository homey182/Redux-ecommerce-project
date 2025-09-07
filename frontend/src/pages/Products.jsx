import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

const Products = () => {
  const {
    userReducer: { user },
    productReducer: { products },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    const copyUser = { ...user, cart: [...user.cart] };
    const x = copyUser.cart.findIndex((f) => f.product?.id == product?.id);
    if (x == -1) {
      copyUser.cart.push({ product, quantitiy: 1 });
      console.log(copyUser);
    } else {
      copyUser.cart[x] = {
        product,
        quantitiy: copyUser.cart[x].quantitiy + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };
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
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
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
