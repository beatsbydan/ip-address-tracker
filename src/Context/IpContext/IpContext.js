import React from "react";

const IpContext = React.createContext({
    ipAddress: "",
    ipData: {},
    isLoading: true,
    handleClick: ()=>{},
    handleChange: ()=>{}
})
export default IpContext