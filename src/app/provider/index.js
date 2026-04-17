

import Timelineprovider from "@/context/context";



const Provider = ({children}) => {
    return (
        <div>
         <Timelineprovider>{children}</Timelineprovider>
        </div>
    );
};

export default Provider;