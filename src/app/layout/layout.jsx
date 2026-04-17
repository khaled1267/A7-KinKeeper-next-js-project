import Timelineprovider from '@/context/context';
import React from 'react';

const Timelinelayout = ({children}) => {

    return (
        <div>
            
            <Timelineprovider>{children}</Timelineprovider>
        </div>
    );
};

export default Timelinelayout;