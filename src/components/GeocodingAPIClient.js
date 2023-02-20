import AbstractAPIClient from "./AbstractAPIClient";

class GeocodingAPIClient extends AbstractAPIClient {
    constructor() {
        this.super();
        this.baseURL = "http://api.openweathermap.org/geo/1.0/direct";
    }
}

export default GeocodingAPIClient;