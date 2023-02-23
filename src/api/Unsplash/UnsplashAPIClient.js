import AbstractAPIClient from "../AbstractAPIClient";

class UnsplashAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.unsplash.com/photos/random";
        this.apiKey = "VnnoJYVG6X2WxCkaVnoEvF9QjYOwC9LyDxkPp8fVZI8";
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