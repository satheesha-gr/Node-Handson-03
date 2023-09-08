const middlewareForAllRoutes = (req, res, next) => {
    console.log('Middleware for all routes')
    next()
}

const middlewareForSpecificRoute = (req, res, next) => {
    console.log('Middleware for special-route1')
    next()
}

module.exports = {middlewareForAllRoutes, middlewareForSpecificRoute}