import AbstractAPIClient from "../AbstractAPIClient";

class UnsplashAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.unsplash.com/photos/random";
        this.apiKey = "XSs7C4bbuOsM_dG9DRGSYviQsO7D7PAcM_x8r8bi-x0";
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