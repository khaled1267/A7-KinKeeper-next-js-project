'use client';
import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

const Timelineprovider = ({children}) => {
    const [timeline, setTimeline] = useState([]);

    const data = {
        timeline,
        setTimeline
    }

    return (
        <div>
            
            <TimelineContext.Provider value={data}>
                {children}
            </TimelineContext.Provider>
        </div>
    );
};

export default Timelineprovider;