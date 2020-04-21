const url = require("url");
const rp = require("request-promise");

class GrafanaClient {
    /**
     * @constructor
     * @param {Object} options 
     */
    constructor(options) {
        this._auth = "Basic " + options.auth;
        this._host = options.host;
        this._repo = options.repo;
    }

    async listFolder(repo) {
        const endpoint = url.resolve(this._host, "/artifactory/api/search/aql");
        return rp({
            method: "POST",
            uri: endpoint,
            headers: {
                "Authorization" : this._auth,
                "Content-Type": `text/plain` 
            },
            body: `items.find({"repo":"` + repo + `"})`,
            json: false
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    }
}

module.exports = GrafanaClient;
