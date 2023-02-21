import AbstractAPIClient from "../AbstractAPIClient";

class MapsAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://www.google.com/maps/embed/v1/place";
        this.apiKey = "AIzaSyC7IXnHpREreLX34gD-5CbPqv4C5GQcf54";
    }

    async fetchMapForCity(cityName) {
        try {
            const params = {
                key: this.apiKey,
                q: cityName,
                zoom: 0,
                maptype: "roadmap"
            };
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default MapsAPIClient;