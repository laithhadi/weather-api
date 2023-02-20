import AbstractAPIClient from "./AbstractAPIClient";
import GeocodingAPIClient from "./GeocodingAPIClient";

class FiveDayAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.openweathermap.org/data/2.5/forecast";
        this.apiKey = "79635c6cf66b1dc393e8496f6d80e8a3";
        this.geocodingAPI = new GeocodingAPIClient();
    }

    async fetchFiveDayForecastByCity(cityName) {
        try {
            const coords = await this.geocodingAPI.fetchCoordinatesForCity(cityName);
            const params = {
                lat: coords.latitude,
                lon: coords.longitude,
                appid: this.apiKey,
                units: "metric"
            };
            // TODO: fix this
            // const response = await this.fetchData(this.baseURL, params);
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const response = await this.fetchData(url);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default FiveDayAPIClient;