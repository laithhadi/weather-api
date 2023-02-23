import AbstractAPIClient from "../AbstractAPIClient";

class MapsAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://maps.googleapis.com/maps/api/staticmap";
        this.apiKey = "AIzaSyDjxYoP7w_xVoK-BgBAvImODPS1YUDl4BA";
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