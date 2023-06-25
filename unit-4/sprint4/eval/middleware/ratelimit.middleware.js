const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
})

module.exports = {limiter}