import AbstractAPIClient from "../AbstractAPIClient";

class UnsplashAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.unsplash.com/photos/random";
        this.apiKey = "Ljg-WZmOOtGg5UI818KIc1NUo9W_9Ev_iXtYckb2dRo";
    }
    async fetchImagesForCity(cityName) {
        try {
            const params = {
                count: 5,
                client_id: this.apiKey,
                query: cityName
            };
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            return data;
        } catch (error) {
            return null;
        }
    }
}

export default UnsplashAPIClient;