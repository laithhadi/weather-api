import AbstractAPIClient from "./AbstractAPIClient";

class GeocodingAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "http://api.openweathermap.org/geo/1.0/direct";
        this.apiKey = "79635c6cf66b1dc393e8496f6d80e8a3";
    }

    async fetchCoordinatesForCity(cityName) {
        const url = `${this.baseURL}?q=${encodeURIComponent(cityName)}&limit=1&appid=${this.apiKey}`;
        const data = await this.fetchData(url);
        if (data && data.length > 0) {
            return {
                latitude: data[0].lat,
                longitude: data[0].lon
            };
        }
        return null;
    }
}

export default GeocodingAPIClient;