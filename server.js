const express = require("express");
const app = express();

//create one more API with one request/response object
app.get('/api/get', (req, res) => {
    res.send({message: "hello world"}) // with a message
}
)

app.listen(5000, () => {
    console.log("listening to 5000");
}
)
