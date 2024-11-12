import React from "react";

const Review = () => {
  const reviewData = [
    { count: "144K", label: "DOWNLOADS" },
    { count: "200K", label: "USERS" },
    { count: "50K", label: "PROJECTS" },
    { count: "10K", label: "REVIEWS" },
  ];

  return (
    <div className="flex justify-center items-center h-full pt-28 space-x-24 border-b border-white pb-24 mb-20">
      {reviewData.map((item, index) => (
        <div
          key={index}
          className={`text-center text-4xl font-noto font-bold text-red-600 ${
            index < reviewData.length - 1 ? "border-r-2 pr-14" : ""
          } border-white`}
        >
          {item.count}
          <p className="text-white text-lg mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
