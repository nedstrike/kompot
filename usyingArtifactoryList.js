const ArtifactoryList = require('./artifactoryList.js');

var artifactoryHost = 'http://artifactory.sbtech.com'; // the host that gets sent to artifactoryList file ( look at the other file you idiot)
var artifactoryKey = "YmV0dGluZzp5NVNLUHpqSHAzalVDOQ=="; // generate with btoa("username:password") in your browser's console

var artifactoryList = new ArtifactoryList({
    auth: artifactoryKey,
    host: artifactoryHost
});

var repoKey = "Betting"; // additional argumetns just for this case ( you don't need this in your case)

(async () => {
    try {
        let listZips = JSON.parse(await artifactoryList.listFolder(repoKey));
        console.log(listZips);
    } catch (e) {
        console.error(e);
        console.error("Something failed, I hope you know who to call ?!?");
    }
})();
