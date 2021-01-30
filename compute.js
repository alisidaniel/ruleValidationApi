

const resolver = async function (req, res, next){
    try{
        let {name,crew,age,position,missions} = req.body.data;
        let {condition,field,condition_value} = req.body.rule;
        console.log("got here")
    
        if (missions == 'missions.count' || missions == 'missions.successful' || missions == 'missions.failed'){
            console.log(missions);
        }
        
        // switch (condition) {
        //     case "eq":
        //         break;
        //     case "neq":
        //         break;
        //     case "gt":
        //         break;
        //     case "gte":
        //         break;
        //     case "contains":
        //         break;
        // }
    }catch(e){
        next(e)
    }
}

module.exports = {
    resolver
}