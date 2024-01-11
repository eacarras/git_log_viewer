const https = require('https')

const { generateOptions } = require('./utils')


/**
 * @description Util function to get logs of a repository
 * @param {*} req [Request] passed by the controller
 * @param {*} res [Response] passed by the controller
 */
const getLogs = async function (req, res) {
    const repository = req.query.repository
    const owner = req.query.owner

    const options = generateOptions(`/repos/${owner}/${repository}/commits`)

    https.get(options, function (response) {
        let rawData = '';

        // Collect data
        response.on('data', (chunk) => {
            rawData += chunk;
        })

        // Process final data
        response.on('end', () => {
            const parsedData = JSON.parse(rawData)
            try {
              const cleanedData = parsedData.map((e) => ({
                commit: {
                    message: e.commit.message,
                    comments: e.commit.comments || []
                },
                author: {
                    user: e.author.login,
                    avatar: e.author.avatar_url
                },
                link: e.html_url
              }))

              return res.status(200).json({ data: cleanedData })
            } catch (e) {
                console.log(e)
                return res.status(503).json({ err: parsedData.message || e.message })
            }
        })
    }).on('error', (e) => {
        console.log(e)
        res.status(500).send(constants.error_message);
    })
}

module.exports = { getLogs }