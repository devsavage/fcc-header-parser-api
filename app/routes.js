module.exports = (app) => {
    app.get('/', (req, res) => {
        var ip = req.get('X-Forwarded-For') || req.connection.remoteAddress
        var lang = req.get('Accept-Language').split(',')[0]
        var os = req.get('User-Agent').split(') ')[0].split(' (')[1].split(';')[0]
        
        var response = {
            'ipaddress': ip,
            'language': lang,
            'os': os
        }
        
        res.send(response)
    })
}