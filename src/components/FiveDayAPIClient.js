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
                units: "metric",
                cnt: 5, // retrieve the next 5 days with 24-hour intervals
                start: Math.floor(Date.now() / 1000), // start from current time
                interval: 24 // set 12-hour intervals
            };
            // TODO: fix this
            // const response = await this.fetchData(this.baseURL, params);
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default FiveDayAPIClient;