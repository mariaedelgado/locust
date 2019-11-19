const { Router } = require('express');
const router = Router();

const data = require('../data.json');
var fs = require("fs");

// devolver el estado del dron
router.get('/info', (req,res) => {
    res.json(data);
});

// creamos el plan de vuelo 
router.put('/flightPlan', (req,res) => {
    const {areaType, humidity, typeOfFlight, coordinates} = req.body;
    const flightPlan = {...req.body};

    // añadimos la informacion a nuestra bbdd
    data.areaType = flightPlan.areaType;
    data.humidity = flightPlan.humidity;
    data.typeOfFlight = flightPlan.typeOfFlight;
    data.coordinates = flightPlan.coordinates;
    
    //stringify
    var jsonContent = JSON.stringify(data);
    console.log(jsonContent);

    fs.writeFile("./data2.json", jsonContent, 'utf8', function(err) {
        if (err){
            console.log(err);
            res.send("Ha fallado");
        }
        res.send("Todo ok");
    });

    // res.json(data);
});

module.exports = router;