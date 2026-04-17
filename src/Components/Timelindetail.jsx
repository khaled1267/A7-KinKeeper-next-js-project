'use client';
import { TimelineContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

const Timelindetail = () => {
  const context = useContext(TimelineContext);

  
 console.log(context);
   
  

  const { timeline } = context;

  return (
    <div className="p-4">
      {timeline && timeline.length > 0 ? (
        timeline.map((f) => (
          <div key={f.id} className="flex items-center gap-4 mb-2">
            <Image 
              src="/call.png" 
              alt={f.name} 
              width={50} 
              height={50} 
              className="rounded-full"
            />
            <h2>{f.name}</h2>
          </div>
        ))
      ) : (
        <p>No data found in timeline!</p>
      )}
    </div>
  );
};

export default Timelindetail;