const express = require("express")

const app = express()
const route = require("./Router/userRouter")
app.use('/user',route)

const port = 3030

app.listen(port,() => {
    try {
        console.log("server running successfully");
    }
    catch(err) {
        console.log('Error');
    }
})