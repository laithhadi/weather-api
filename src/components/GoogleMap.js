import MapsAPIClient from "../api/GoogleMaps/MapsAPIClient";

function GoogleMap(props) {
    const mapsAPIClient = new MapsAPIClient();
    const mapData = mapsAPIClient.fetchMapForCity(props.city);
    return (
        <img className="google-map" alt="Country map" src={mapData} />
    )
};

export default GoogleMap;