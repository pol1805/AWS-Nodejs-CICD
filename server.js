const express = require("express");
const app = express();

//create one more API with one request/response object
app.get('/api/get', (req, res) => {
    res.send({message: "hello world"}) // with a message
}
)

app.get('/api/satsangIT_user_details', (req,res) => {
    res.send({
        user: {
            name: "utpalendu",
            location: "durgapur",
            family_code: "001"
        }

    })
}
)
    
app.get('/api/notifications', (req,res) => {
    res.send({
            status: "200",
            message: "Notifications",
            data: "[]"
        
    })
}
);

app.listen(5000, () => {
    console.log("listening to 5000");
}
)
