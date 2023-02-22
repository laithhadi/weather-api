import AbstractAPIClient from "../AbstractAPIClient";

class MapsAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://maps.googleapis.com/maps/api/staticmap";
        this.apiKey = "ASK LAITH IF YOU NEED TO TEST";
    }

    fetchMapForCity(cityName) {
        const params = {
            key: this.apiKey,
            center: cityName,
            zoom: 8,
            size: "400x400"
        };
        return `${this.baseURL}?${new URLSearchParams(params)}`;
    }
}

export default MapsAPIClient;