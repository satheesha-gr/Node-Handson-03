const route = require("express").Router()
const {signin, signup, home, dummy_data, aboutus} = require("../Controller/userController")
const { middlewareForSpecificRoute, middlewareForAllRoutes } = require("../Middleware/userMiddleware")

route.use(middlewareForAllRoutes)

route.get('/signin', middlewareForSpecificRoute, signin)
route.get('/signup', middlewareForSpecificRoute, signup)
route.get('/home', home)
route.get('/data', dummy_data)
route.get('/aboutus', aboutus)

module.exports = route
