
const isValidJSON = (string) => {
    try{
      JSON.parse(string);
      return true
    }catch(e){
      return false
    }
}

const ruleValidation = async function(req, res, next) {
    try{
        let {field,condition,condition_value} = req.body.rule;
        let {rule} = req.body;

        //stringify field data for validation
        let string = JSON.stringify(rule)
        let ruleJsonValidatetion = isValidJSON(string);

        // this returns when wrong json payload is passed.
        if (!ruleJsonValidatetion) return res.status(400).json({
            "message": "Invalid JSON payload passed.",
            "status": "error",
            "data": null
        });

        if (!field || /^\s*$/.test(field)){
          return res.status(400).json({
            "message": "rule is required.",
            "status": "error",
            "data": null
            })
        }
        if (!condition || /^\s*$/.test(condition)){
          return res.status(400).json({
            "message": "rule is required.",
            "status": "error",
            "data": null
          })
        }
        if (!condition_value || /^\s*$/.test(condition_value)){
            return res.status(400).json({
              "message": "rule is required.",
              "status": "error",
              "data": null
            })
        }
        next();
    }catch(e){
        next(e)
    }
}

const dataFieldValidation = async function(req, res, next) {
    try{
        let {name,crew,age,position,missions} = req.body.data;
        if (!name || /^\s*$/.test(name)){
          return res.status(400).json({
            "message": "[name] is required.",
            "status": "error",
            "data": null
            })
        }
        if (!crew || /^\s*$/.test(crew)){
            return res.status(400).json({
              "message": "[crew] is required.",
              "status": "error",
              "data": null
              })
          }
          if (!age || /^\s*$/.test(age)){
            return res.status(400).json({
              "message": "[age] is required.",
              "status": "error",
              "data": null
              })
          }
          if (!position || /^\s*$/.test(position)){
            return res.status(400).json({
              "message": "[position] is required.",
              "status": "error",
              "data": null
              })
          }
          if (!missions || /^\s*$/.test(missions)){
            return res.status(400).json({
              "message": "[missions] is required.",
              "status": "error",
              "data": null
              })
          }
    }catch(e){
        next(e)
    }
}

const dataTypeValidation = async (req, res, next) => {
    try{
      let {field,condition,condition_value} = req.body.rule;
      let {missions,position,age,crew,name} = req.body.data;
      
      // rule data type check
      if (typeof field != 'string'){
        return res.status(400).json({
          "message": "[field] should be a [string].",
          "status": "error",
          "data": null
        })
      }
      if (typeof condition != 'string'){
        return res.status(400).json({
          "message": "[condition] should be a [string].",
          "status": "error",
          "data": null
        })
      }
      if (typeof condition_value != 'number'){
        return res.status(400).json({
          "message": "[condition_value] should be a [number].",
          "status": "error",
          "data": null
        })
      }

       // data field dataType check
       if (typeof name != 'string'){
        return res.status(400).json({
          "message": "[condition_value] should be a [number].",
          "status": "error",
          "data": null
        })
      }
      if (typeof crew != 'string'){
        return res.status(400).json({
          "message": "[crew] should be a [string].",
          "status": "error",
          "data": null
        })
      }
      if (typeof age != 'number'){
        return res.status(400).json({
          "message": "[age] should be a [number].",
          "status": "error",
          "data": null
        })
      }
      if (typeof position != 'string'){
        return res.status(400).json({
          "message": "[position] should be a [string].",
          "status": "error",
          "data": null
        })
      }
      // if (typeof missions != 'number'){
      //   return res.status(400).json({
      //     "message": "[missions] should be a [number]|[object].",
      //     "status": "error",
      //     "data": null
      //   })
      // }
    }catch(e){
      next(e)
    }
}

module.exports = {
    ruleValidation,
    dataFieldValidation,
    isValidJSON,
    dataTypeValidation
}