import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import shoppingbag from "../images/shopping-bag.png";
import order from "../images/order.png";
import plus from "../images/plus.png";
import Dollar from "../images/money-bag.png";
import ActivityChart from "./activityChart";
import Goal from "../images/mark.png";
import Arrow from "../images/next.png";
import Burger from "../images/burger.png";
import Menus from "../images/restaurant.png";
import Wade from "../images/profiles/1.png";
import Jane from "../images/profiles/2.png";
import Guy from "../images/profiles/3.png";
import Kristin from "../images/profiles/4.png";
import Cody from "../images/profiles/5.png";
import Savannah from "../images/profiles/6.png";
import Jenny from "../images/profiles/7.png";
import Dianne from "../images/profiles/8.png";
import Devon from "../images/profiles/9.png";
import Arlene from "../images/profiles/11.png";
import Cameron from "../images/profiles/12.png";
import Lesilie from "../images/profiles/13.png";
import Orders from "./orders";
import Feedback from "./feedback";

const Dashboard = () => {
  const recentOrders = [
    {
      customer: "Wade Warren",
      avatar: Wade,
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      avatar: Jane,
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      avatar: Guy,
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      avatar: Kristin,
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      avatar: Cody,
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      avatar: Savannah,
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  const feedbacks = [
    {
      avatar: Jenny,
      customer: "Jenny Wilson",
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (glutten-free) which was also great. They were very conscientious about gluten allergies",
      rating: 4,
    },
    {
      avatar: Dianne,
      customer: "Dianne Russell",
      feedback:
        "We enjoyed the Eggs Benedict on homemade focaccia bread and hot coffee. perfect service",
      rating: 5,
    },
    {
      avatar: Devon,
      customer: "Devon Lane",
      feedback: "Normally we have wings, but",
      rating: 4,
    },
    {
      avatar: Arlene,
      customer: "Arlene McCoy",
      feedback:
        "The ambiance was wonderful, and the food was even better. The grilled salmon was cooked to perfection. Will definitely return!",
      rating: 3,
    },
    {
      avatar: Cameron,
      customer: "Cameron Williamson",
      feedback:
        "Great experience overall. The steak was tender and flavorful. The only downside was the wait time, but it was worth it.",
      rating: 2,
    },
    {
      avatar: Lesilie,
      customer: "Leslie Alexander",
      feedback:
        "Had a delightful evening. The pasta dishes are fantastic, and the dessert options are to die for. Highly recommend the tiramisu!",
      rating: 5,
    },
  ];

  return (
    <div className="flex bg-black min-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4 h-screen overflow-y-auto custom-dashboard-scroll mt-5">
          <h1 className="text-white text-2xl font-semibold pb-2">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mb-4">
            <div className="bg-gray-800 p-2 rounded-lg text-left col-span-1 sm:col-span-1 md:col-span-1 px-4">
              <img
                src={order}
                width={60}
                height={60}
                className="border-1 bg-blue-300 rounded-md"
              />
              <div className="text-start">
                <h2 className="text-white inline-block">
                  <span className="inline md:block lg:inline">Total </span>
                  <span className="inline md:block lg:inline">orders</span>
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[40px] md:text-[20px] lg:text-[40px] text-white">
                  75
                </p>
                <p className="text-sm text-green-500 mt-1">▲ 3%</p>
              </div>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg text-left col-span-1 sm:col-span-1 md:col-span-1 px-4">
              <img
                src={shoppingbag}
                width={60}
                height={60}
                className="border-1 bg-green-600 rounded-md"
              />
              <div className="text-start">
                <h2 className="text-white inline-block">
                  <span className="inline md:block lg:inline">Total </span>
                  <span className="inline md:block lg:inline">Delivered</span>
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[40px] md:text-[20px] lg:text-[40px] text-white">
                  70
                </p>
                <p className="text-sm text-red-500 mt-1">▼ 3%</p>
              </div>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg text-left col-span-1 sm:col-span-1 md:col-span-1 px-4">
              <img
                src={plus}
                width={60}
                height={60}
                className="border-1 bg-red-400 rounded-md"
              />
              <div className="text-start">
                <h2 className="text-white inline-block">
                  <span className="inline md:block lg:inline">Total </span>
                  <span className="inline md:block lg:inline">Cancelled</span>
                </h2>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[40px] md:text-[20px] lg:text-[40px] text-white">
                  05
                </p>
                <p className="text-sm text-green-500 mt-1">▲ 3%</p>
              </div>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg text-left col-span-1 sm:col-span-1 md:col-span-1 px-4">
              <img
                src={Dollar}
                width={60}
                height={60}
                className="border-1 bg-pink-500 rounded-md p-1"
              />
              <div className="text-start">
                <h2 className="text-white inline-block">
                  <span className="inline md:block lg:inline">Total </span>
                  <span className="inline md:block lg:inline">Revenue</span>
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[35px] md:text-[15px] lg:text-[35px] text-white">
                  $12k
                </p>
                <p className="text-sm text-red-500 mt-1">▼ 3%</p>
              </div>
            </div>
            <div className="bg-gray-800 px-3 py-2 rounded-lg text-center col-span-1 sm:col-span-2 md:col-span-2">
              <div className="flex justify-between px-1 md:px-0 lg:px-3">
                <div className="flex flex-col items-start text-left pt-3">
                  <h2 className="text-white">Net Profit</h2>
                  <p className="text-[2rem] lg:text-[2rem] md:text-[1.5rem] font-bold text-white">
                    $6759.25
                  </p>
                  <p className="text-sm text-green-500 mt-1">▲ 3%</p>
                </div>

                <div className="flex flex-col bg-gray-800 items-center">
                  <div className="w-28 h-28 md:w-24 lg:w-28 relative">
                    <CircularProgressbar
                      value="70%"
                      text={`70%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#6366f1",
                        trailColor: "#1f2937",
                        textSize: "25px",
                        strokeLinecap: "round",
                      })}
                    />
                    <div className="text-center text-[10px] md:text-[8px] lg:text-[10px] text-white absolute bottom-5 md:bottom-7 lg:bottom-5 left-1/2 transform -translate-x-1/2 whitespace-pre-line">
                      Goal
                      <br />
                      Completed
                    </div>
                  </div>
                  <p className="text-xs md:text-[10px] lg:text-xs text-gray-500">
                    *The values here have been rounded off.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-800 p-4 rounded-lg col-span-1 sm:col-span-2 md:col-span-2">
              <ActivityChart />
            </div>
            <div className="bg-gray-800  p-3 md:p-3 md:pt-14 lg:p-9 sm:p-3 rounded-lg  col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex justify-between mb-10">
                <div className="flex items-center">
                  <img
                    src={Goal}
                    width={60}
                    height={60}
                    className="bg-orange-500 rounded-full lg:w-[64px] lg:h-[64px] md:w-10 md:h-10"
                  />

                  <span className="font-semibold text-[1.5rem] text-white px-3 md:px-1 lg:px-3">
                    Goals
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={Arrow} width={40} height={40} />
                </div>
              </div>
              <div className="flex justify-between mb-10">
                <div className="flex items-center">
                  <img
                    src={Burger}
                    width={60}
                    height={60}
                    className="bg-blue-400 rounded-full lg:w-[64px] lg:h-[64px] md:w-10 md:h-10"
                  />

                  <h2 className="font-semibold text-[1.5rem] md:text-[25px] lg-text[1.5rem] text-white px-3 md:px-1 lg:px-3">
                    Popular Dishes
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={Arrow} width={40} height={40} />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={Menus}
                    width={60}
                    height={60}
                    className="rounded-full lg:w-[64px] lg:h-[64px] md:w-10 md:h-10"
                    style={{ backgroundColor: "rgba(84, 166, 199, 1)" }}
                  />

                  <h2 className="font-semibold text-[1.5rem] text-white px-3 md:px-1 lg:px-3">
                    Menus
                  </h2>
                </div>
                <div className="flex items-center">
                  <img src={Arrow} width={40} height={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <Orders recentOrders={recentOrders} />

            <Feedback feedbacks={feedbacks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
