const express = require("express");
const {dataFieldValidation, ruleValidation, dataTypeValidation} = require("./middleware/validations");
const {resolver} = require('./compute')
const app = express();
app.use(express.json());
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

app.post('/validate-rule', dataTypeValidation, ruleValidation, dataFieldValidation, resolver);


app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});