const https = require('https')

const { generateOptions } = require('./utils')


/**
 * @description Util function to get logs of a repository
 * @param {*} req [Request] passed by the controller
 * @param {*} res [Response] passed by the controller
 */
const getLogs = async function (req, res) {
    //const owner = req.params.owner;
    //const user = req.params.user;
    const options = generateOptions('/repos/eacarras/git_log_viewer/commits')

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

module.exports = { getLogs }