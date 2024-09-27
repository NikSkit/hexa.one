"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class HexaWebApi {
    constructor(key) {
        this.hexa = axios_1.default.create({
            baseURL: 'https://hexa.one/api/v1',
            method: 'get',
            headers: {
                'X-API-Key': key,
                'Accept-Encoding': 'utf8',
            },
            responseType: 'json',
            timeout: 60000,
        });
    }
    async prices(appId) {
        return new Promise((resolve, reject) => {
            try {
                this.hexa
                    .request({
                    url: `market/prices/${appId}`,
                })
                    .then(({ data }) => {
                    return resolve(data);
                })
                    .catch((e) => {
                    return reject();
                });
            }
            catch (e) {
                return reject();
            }
        });
    }
    async items(appId) {
        return new Promise((resolve, reject) => {
            try {
                this.hexa
                    .request({
                    url: `market/items/${appId}`,
                })
                    .then(({ data }) => {
                    return resolve(data);
                })
                    .catch((e) => {
                    return reject();
                });
            }
            catch (e) {
                return reject();
            }
        });
    }
    async account() {
        return new Promise((resolve, reject) => {
            try {
                this.hexa
                    .request({
                    url: `api/account`,
                })
                    .then(({ data }) => {
                    return resolve(data);
                })
                    .catch((e) => {
                    return reject();
                });
            }
            catch (e) {
                return reject();
            }
        });
    }
}
exports.default = HexaWebApi;
//# sourceMappingURL=index.js.map