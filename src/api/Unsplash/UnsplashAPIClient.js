import AbstractAPIClient from "../AbstractAPIClient";

class UnsplashAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.unsplash.com/photos/random";
        this.apiKey = "4Al3r9u0wv_vipboZ2mqxQ54mDdocUR4wCNRJTKgtjY";
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