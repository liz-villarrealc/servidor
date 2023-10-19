var cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}