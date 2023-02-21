import AbstractAPIClient from "../AbstractAPIClient";

class UnsplashAPIClient extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://api.unsplash.com/photos/random";
        this.apiKey = "KpHpHDs5sg1Z1oGUKjILjQp29WTGZTteG5JXu7zJ8IQ";
    }
    async fetchImagesForCity(cityName) {
        try {
            const params = {
                count: 4,
                client_id: this.apiKey,
                query: cityName,
            };
            const url = `${this.baseURL}?${new URLSearchParams(params)}`;
            const data = await this.fetchData(url);
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default UnsplashAPIClient;