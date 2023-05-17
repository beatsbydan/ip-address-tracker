import Location from "./Location/Location";
import SearchIp from "./SearchIp/SearchIp";
import styles from './Header.module.css'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <>
                <h1>IP Address Tracker</h1>
                <SearchIp/>
            </>
            <Location/>
        </header>
     );
}
 
export default Header;