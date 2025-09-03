import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeletProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    productReducer: { products },
    userReducer: { user },
  } = useSelector((state) => state);
  const product = products.find((product) => product.id == id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProductHandler = (product) => {
    // navigate("/products");
    dispatch(asyncUpdateProduct(id, product));
  };
  function productDeleltHandler() {
    dispatch(asyncDeletProduct(id));
    navigate("/products");
  }

  return product ? (
    <>
      <div className="w-full flex mt-4 ">
        <img
          className="w-1/2 h-[50vh] rounded object-cover "
          src={product?.image}
          alt=""
        />
        <div className=" px-3 ">
          <h1 className="text-5xl mb-5">{product?.title}</h1>

          <h2 className="text-3xl">${product?.price}</h2>
          <p>{product?.description}</p>

          <button type="button"> Add to cart</button>
        </div>
      </div>
      <hr />

      {user && user?.isAdmin && (
        <div className="">
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="flex flex-col w-1/2 mt-5"
          >
            <input
              {...register("image")}
              className="bg-transparent outline-0 border-b p-2 text-xl"
              type="url"
              placeholder="image Url"
            />
            <input
              {...register("title")}
              className="bg-transparent outline-0 border-b p-2 text-xl"
              type="text"
              placeholder="title"
            />
            <input
              {...register("price")}
              className="bg-transparent outline-0 border-b p-2 text-xl"
              type="text"
              placeholder="price"
            />
            <textarea
              className="bg-transparent outline-0 border-b p-2 text-xl"
              {...register("description")}
              placeholder="descriptions"
            ></textarea>

            <input
              {...register("category")}
              className="bg-transparent outline-0 border-b p-2 text-xl"
              type="text"
              placeholder="category"
            />

            <button className=" w-[30%] bg-green-800 p-2 mt-2">
              Update Product
            </button>
            <button
              onClick={productDeleltHandler}
              type="button"
              className=" w-[30%] bg-red-800 p-2 mt-2"
            >
              Delete Product
            </button>
          </form>
        </div>
      )}
    </>
  ) : (
    "Loading"
  );
};

export default ProductDetails;
