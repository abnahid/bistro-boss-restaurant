import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "./../../../context/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Total Payments: {payments.length}
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
        <table className="w-full text-left">
          <thead className="bg-yellow-500 dark:bg-yellow-600 text-white">
            <tr>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Payment Date</th>
              <th className="px-4 py-2">Total Price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => {
              let formattedDate = "Invalid Date";
              if (payment.date) {
                const date = new Date(payment.date);
                if (!isNaN(date)) {
                  formattedDate = new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(date);
                }
              }

              // Dynamic badge styles
              const statusStyles =
                payment.status === "success"
                  ? "badge badge-success"
                  : "badge badge-warning";

              return (
                <tr
                  key={payment._id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-600"
                      : "bg-white dark:bg-gray-700"
                  }`}
                >
                  <td className="px-4 py-2">{payment.email}</td>
                  <td className="px-4 py-2">{formattedDate}</td>
                  <td className="px-4 py-2">${payment.price}</td>
                  <td className="px-4 py-2">
                    <div className={statusStyles}>{payment.status}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
