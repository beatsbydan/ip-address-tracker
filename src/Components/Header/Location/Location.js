import { useContext } from 'react'
import IpContext from '../../../Context/IpContext/IpContext'
import styles from './Location.module.css'
const Location = () => {
    const {ipData, isLoading} = useContext(IpContext)
    return ( 
        <>
        {!isLoading&&
            <div className={styles.location}>
                <div className={styles.ipAddress}>
                    <div>
                        <small>IP ADDRESS</small>
                        <h3>{ipData.data.ip}</h3>
                    </div>
                </div>
                <div className={styles.line}></div>        
                <div className={styles.exactLocation}>
                    <div>
                        <small>LOCATION</small>
                        <h3>{`${ipData.data.location.city},${ipData.data.location.region} ${ipData.data.location.postalCode}`}</h3>
                    </div>
                </div>  
                <div className={styles.line}></div>      
                <div className={styles.timeZone}>
                    <div>
                        <small>TIMEZONE</small>
                        <h3>{ipData.data.location.timezone}</h3>
                    </div>
                </div>  
                <div className={styles.line}></div>      
                <div className={styles.isp}>
                   <div>
                        <small>ISP</small>
                        <h3>{ipData.data.isp}</h3>
                   </div>
                </div>        
            </div>
        }
        </>
     );
}
 
export default Location;