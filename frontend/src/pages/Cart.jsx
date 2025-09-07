import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.userReducer.products);
  const dispatch = useDispatch();
  console.log(user);

  function increaseQuantityHandler(index, product) {
    const copyUser = { ...user, cart: [...user.cart] };

    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantitiy: copyUser.cart[index].quantitiy + 1,
    };

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  }

  function decreaseQuantity(index, product) {
    const copyUser = { ...user, cart: [...user.cart] };

    if (user.cart[index].quantitiy > 1) {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantitiy: copyUser.cart[index].quantitiy - 1,
      };
    } else {
      copyUser.cart.splice(index, 1);
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  }
  const cartItem = user.cart.map((c, index) => {
    return (
      <li
        className="flex items-center justify-between bg-gray-600 p-3 rounded mt-5 shadow
      "
        key={c?.product?.id}
      >
        <img className="w-[10vmax] h-[10vmax]" src={c.product?.image} alt="" />
        <h1>{c.product?.title}</h1>
        <p>{c.product?.price}</p>

        <p>
          <button
            onClick={() => decreaseQuantity(index, c)}
            className="bg-gray-900 mr-2 text-2xl px-4 rounded"
          >
            -
          </button>
          {c.quantitiy}
          <button
            onClick={() => increaseQuantityHandler(index, c)}
            className="bg-gray-900 ml-2 text-2xl px-4 rounded"
          >
            +
          </button>
        </p>
      </li>
    );
  });
  return user?.cart?.length > 0 ? <ul>{cartItem}</ul> : "No carts avialvale";
};

export default Cart;
