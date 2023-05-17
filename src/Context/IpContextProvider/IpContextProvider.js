import { useEffect, useState } from "react";
import IpContext from "../IpContext/IpContext";
import axios from "axios";

const IpContextProvider = (props) => {
    const [ipAddress,setIpAddress] = useState("")
    const [ipData, setIpData] = useState({})
    const [isLoading, setIsLoading ] = useState(true)
    const handleChange = (e) => {
        setIpAddress(e.target.value)
    }
    const useFetch = async () => {
        setIsLoading(true)
        const ip = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_f7g1RhfNsj8YRPnkPYx760rv4hYBH&ipAddress=${ipAddress}`)
            if(ip){
            setIpData(ip)
            setIsLoading(false)
        }
        setIpAddress("")
    }
    useEffect(()=>{
        const defaultFetch = async () => {
            const ip = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_f7g1RhfNsj8YRPnkPYx760rv4hYBH&ipAddress=${ipAddress}`)
            if(ip){
                setIpData(ip)
                setIsLoading(false)
            }
        }
        defaultFetch()
    },[])
    const ipContext = {
        ipAddress: ipAddress,
        ipData: ipData,
        isLoading: isLoading,
        handleChange: handleChange,
        handleClick: useFetch
    }
    return (  
        <IpContext.Provider value={ipContext}>
            {props.children}
        </IpContext.Provider>
    );
}
 
export default IpContextProvider;