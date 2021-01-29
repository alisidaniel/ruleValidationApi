const express = require("express");

const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
          "name": "Alisi Daniel",
          "github": "@alisidaniel",
          "email": "alisidaniel@gmail.com",
          "mobile": "08107621932",
          "twitter": "@alisidaniel_834"
        }
    });
});

app.post('/validate-rule', (req, res) => {
    res.status(200).json({data:"null"});
});


app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});