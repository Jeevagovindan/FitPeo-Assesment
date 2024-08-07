import React from "react";

const Orders = ({ recentOrders }) => {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg col-span-1 sm:col-span-2 md:col-span-2">
        <h2 className="text-white mb-4 text-2xl font-semibold">
          Recent Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-[550px] w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 text-white">Customer</th>
                <th className="pb-2 text-white">Order No.</th>
                <th className="pb-2 text-white">Amount</th>
                <th className="pb-2 text-white ps-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4 text-white flex items-center space-x-2">
                    <img
                      src={order.avatar}
                      alt={order.customer}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{order.customer}</span>
                  </td>
                  <td className="py-4 text-white px-2">{order.orderNo}</td>
                  <td className="py-4 text-white">{order.amount}</td>
                  <td className="py-4">
                    <span
                      className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-400 text-green-900"
                          : (order.status === "Cancelled" ||
                              order.status === "Pending") &&
                            "bg-red-400 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
