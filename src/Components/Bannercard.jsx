import React from "react";

const Bannercard = () => {
  const stats = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="bg-gray-50 p-8 w-10/12 mx-auto">
      {" "}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
          >
            
            <h2 className="text-4xl font-bold text-slate-800 mb-2">
              {item.value}
            </h2>

         
            <p className="text-slate-500 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannercard;
