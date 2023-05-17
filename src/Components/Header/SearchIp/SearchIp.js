import { useContext } from 'react';
import IpContext from '../../../Context/IpContext/IpContext';
import styles from './SearchIp.module.css'
const SearchIp = () => {
    const ctx = useContext(IpContext)
    return (  
        <form action="#">
            <div className={ctx.isLoading? `${styles.formBlock} ${styles.loading}` :`${styles.formBlock}` }>
                <input 
                    placeholder= 'Search for any IP address or domain' 
                    name='ip' 
                    type="text"
                    value={ctx.ipAddress}
                    onChange={ctx.handleChange}
                />
                <button onClick={ctx.handleClick} type="button"></button>
            </div>
        </form>
    );
}
 
export default SearchIp;