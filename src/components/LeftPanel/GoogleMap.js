import MapsAPIClient from "../../api/GoogleMaps/MapsAPIClient";
import { useState, useEffect } from "react";

function GoogleMap(props) {
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        const mapsAPIClient = new MapsAPIClient();
        const fetchData = async () => {
            const data = await mapsAPIClient.fetchMapForCity(props.city);
            setMapData(data);
        };
        fetchData();
    }, [props.city]);

    return mapData ? (
        <img className="google-map" alt="Country map" src={mapData} />
    ) : (
        <p>Loading map...</p>
    );
}

export default GoogleMap;