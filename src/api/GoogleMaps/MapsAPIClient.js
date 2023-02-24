import AbstractAPIClient from "../AbstractAPIClient";

class MapsAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://maps.googleapis.com/maps/api/staticmap";
        this.apiKey = "AIzaSyB4DS-yQbV9SBzO0d7nfNUKSEvX6BHp1Cg";
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