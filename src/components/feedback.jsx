import React from "react";

const Feedback = ({ feedbacks }) => {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg col-span-1 sm:col-span-2 md:col-span-1 custom-scroll">
        <h2 className="text-white mb-4 text-2xl font-semibold">
          Customer's Feedback
        </h2>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="mb-4">
            <div className="flex">
              <img
                src={feedback.avatar}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-white ps-2 self-center">
                {feedback.customer}
              </span>
            </div>

            <span className="text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-star px-[2px] ${
                    i < feedback.rating
                      ? "fas text-yellow-500"
                      : "far text-white"
                  }`}
                ></i>
              ))}
            </span>
            <p className="text-gray-400">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feedback;
