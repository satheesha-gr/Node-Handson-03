const signin = (req,res) => {
    res.send({
        msg: "This is Signin Page"
    })
}

const signup = (req,res) => {
    res.send({
        msg: "This is Signup Page"
    })
}

const home = (req,res) => {
    res.send({
        msg: "This is Home Page"
    })
}

const dummy_data = (req,res) => {
    res.send({
        name: "Satheesh",
        age: "24",
        Course: "MERN",
        batch: "EA23"
    })
}

const aboutus = (req,res) => {
    res.send({
        msg: "This is About us Page"
    })
}

module.exports = {signin, signup, home, dummy_data, aboutus}