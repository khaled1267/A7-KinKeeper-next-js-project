"use client";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "@/context/context";
import Footer from "@/Components/Footer";

const Chartpage = () => {
  const { timeline } = useContext(TimelineContext);

  
  const activityCounts = timeline.reduce((acc, curr) => {
    const type = curr.activityType || "Other";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(activityCounts).map((key) => ({
    name: key,
    value: activityCounts[key],
  }));

  const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

 
  const hasData = data.length > 0;

  return (
    <div className="flex flex-col items-center min-h-screen p-10 bg-base-200">
      <h2 className="text-4xl font-bold mb-8">Friendship Analytics</h2>

      {!hasData ? (
        
        <div className="flex flex-col items-center justify-center h-64 bg-white w-full max-w-2xl rounded-2xl shadow-sm border border-dashed border-gray-300">
          <p className="text-lg text-gray-500 font-medium">
            No Chart data available yet.
          </p>
          <p className="text-sm text-gray-400">
            Try adding some interactions from friend details!
          </p>
        </div>
      ) : (
        
        <div className="w-full max-w-2xl">
          <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            style={{ width: "100%", height: 400 }}
          >
            <h1 className="text-[#244D3F] font-bold text-xl mb-4 text-center">
              By Interaction Type
            </h1>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="65%"
                  outerRadius="85%"
                  paddingAngle={8}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          
          <div className="flex flex-wrap justify-center gap-6 mt-6 bg-white p-4 rounded-xl shadow-sm">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  className="w-3 h-3 rounded-full"
                ></div>
                <span className="text-sm font-medium text-gray-700">
                  {entry.name}: <span className="font-bold">{entry.value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Chartpage;
