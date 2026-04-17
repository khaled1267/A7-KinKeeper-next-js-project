"use client";
import Footer from "@/Components/Footer";
import { TimelineContext } from "@/context/context";
import Image from "next/image";
import { use, useState } from "react";

const Timeline = () => {
  const { timeline } = use(TimelineContext);
  const [filtertype, setFiltertype] = useState("All");

  // ফিল্টার করা ডাটা এই ভেরিয়েবলে থাকবে
  const filtertimeline = timeline.filter((item) => {
    if (filtertype === "All") return true;
    return item.activityType === filtertype;
  });

  const getIcon = (type) => {
    if (type === "Call") return "/call.png";
    if (type === "Text") return "/text.png";
    if (type === "Video") return "/video.png";
    return "/call.png"; // Default icon
  };

  return (
    <div className="bg-base-300 min-h-screen">
      <div className="p-10 max-w-2xl mx-auto ">
        <h1 className="text-2xl font-bold mb-6">Timeline</h1>
        
        <div className="mb-6">
          <select 
            onChange={(e) => setFiltertype(e.target.value)} 
            className="select select-ghost border border-gray-700 rounded-lg bg-white"
            defaultValue="All"
          >
            {/* ১. "All" অপশনটি যোগ করা হয়েছে */}
            <option value="All">Filter timeline (All)</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {filtertimeline.length === 0 ? (
          <p>No activities found.</p>
        ) : (
          /* ২. এখানে timeline.map এর বদলে filtertimeline.map হবে */
          filtertimeline.map((f, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-4 p-4 bg-white shadow-sm rounded-xl border border-gray-100"
            >
              <div className="bg-gray-100 p-3 rounded-lg">
                <Image
                  src={getIcon(f.activityType)}
                  alt={f.activityType || "activity"}
                  width={24}
                  height={24}
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  {f.activityType}{" "}
                  <span className="font-normal text-gray-500">
                    with {f.name}
                  </span>
                </h2>
                <p className="text-sm text-gray-400">
                  {f.activityDate || "Just now"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Timeline;