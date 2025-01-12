import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import SectionTitle from "./../../components/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div className="bg-white dark:bg-gray-800 p-8 mt-10 text-black dark:text-gray-200">
        <div className="flex justify-evenly my-8">
          <h2 className="text-4xl dark:text-gray-300">Items: {cart.length}</h2>
          <h2 className="text-4xl dark:text-gray-300">
            Total Price: ${totalPrice}
          </h2>
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-primary">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-primary">
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-Primary text-white dark:bg-Primary rounded-tl-2xl rounded-tr-2xl">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id} className="dark:border-gray-700">
                  <th className="dark:text-gray-300">{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="dark:text-gray-300">{item.name}</td>
                  <td className="dark:text-gray-300">${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600 dark:text-red-400"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
