const { Router } = require('express');
const router = Router();

const data = require('../data.json');

router.get('/', (req,res) => {
    res.json(data);
});

router.post('/', (req,res) => {
    const {coordenadas} = req.body; //guardo la informacion en mi bbdd
    if (coordendas){
        const id = data.length + 1;
        const newData = {id, ...req.body};
        data.push(newData);

        res.json("saved");
    }
    else{
        res.send ("wrong request");
    }
    res.send('received');
});

module.exports = router;
