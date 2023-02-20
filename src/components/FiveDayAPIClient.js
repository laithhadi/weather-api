import AbstractAPIClient from "./AbstractAPIClient";

class FiveDayAPIClient extends AbstractAPIClient {
    constructor() {
        this.super();
        this.baseURL = "https://api.openweathermap.org/data/2.5/forecast";
    }
}

export default FiveDayAPIClient;