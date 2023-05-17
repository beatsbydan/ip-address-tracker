import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Map.css'
import 'leaflet/dist/leaflet.css'
import { useContext } from "react";
import IpContext from "../../../Context/IpContext/IpContext";
import { Icon } from "leaflet";
import MoveToView from "./MoveToView/MoveToView";
const icon = new Icon({
        iconUrl:'../../../images/icon-location.svg',
        iconSize:[25,25]
})
const Map = () => {
    const {ipData, isLoading} = useContext(IpContext)
    return (
        <div id="map">
            {isLoading ? <h1 className="isLoading">Please Wait...</h1>:<MapContainer center={[ipData.data.location.lat,ipData.data.location.lng]} zoom={13} scrollWheelZoom={false} style={{width:'100%',height:'100%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={[ipData.data.location.lat,ipData.data.location.lng]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <MoveToView myCoordinates={[ipData.data.location.lat,ipData.data.location.lng]}/>
            </MapContainer>}
        </div>
     );
}
 
export default Map;