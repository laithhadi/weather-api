import axios from "axios";

class AbstractAPIClient {
    constructor() {
        this.baseURL = "";
        this.apiKey = "";
    }

    async setBaseURL(url) {
        this.baseURL = url;
    }

    async getBaseURL() {
        return this.baseURL;
    }

    async responseStatusCheck(resObj) {
        if (resObj.status >= 200 && resObj.status < 300) {
            return Promise.resolve(resObj);
        } else {
            return Promise.reject(new Error(resObj.status));
        }
    };

    async getRequest(url) {
        try {
            const req = await axios.get(url);
            const res = await this.responseStatusCheck(req);
            return res;
        } catch (error) {
            // TODO: Error handling
            return "ERROR";
        }
    }

    async fetchData(url, params = {}) {
        const response = await this.getRequest(url, params);
        return response.data;
    };
}

export default AbstractAPIClient;