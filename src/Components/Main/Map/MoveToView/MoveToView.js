import { useMap } from "react-leaflet";

const MoveToView = (props) => {
    const myMap = useMap()
    myMap.setView(props.myCoordinates, myMap.getZoom())
}
 
export default MoveToView;