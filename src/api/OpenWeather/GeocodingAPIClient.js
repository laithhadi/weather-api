import AbstractAPIClient from "../AbstractAPIClient";

class GeocodingAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.openweathermap.org/geo/1.0/direct";
        this.apiKey = "79635c6cf66b1dc393e8496f6d80e8a3";
    }

    async fetchCoordinatesForCity(cityName) {
        try {
            const params =
            {
                q: cityName,
                limit: 1,
                appid: this.apiKey
            };
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            return {
                latitude: data[0].lat,
                longitude: data[0].lon
            };
        } catch (error) {
            throw new Error(`Failed to fetch coordinates for ${cityName}. Error: ${error.message}`);
        }
    }

    async fetchCityNameByCoordinates(lat, lon) {
        try {
            const params =
            {
                lat: lat,
                lon: lon,
                limit: 1,
                appid: this.apiKey
            };
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            return {
                name: data[0].name,
                country: data[0].country
            };
        } catch (error) {
            throw new Error(`Failed to fetch city name for coordinates (${lat}, ${lon}). Error: ${error.message}`);
        }
    }
}

export default GeocodingAPIClient;