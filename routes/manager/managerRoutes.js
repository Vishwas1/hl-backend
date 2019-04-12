const router = require('express').Router()
const { InitServer, CarControllerBackEnd } =  require('../hl-connection')
const { Car } = require('car-cc');

InitServer();
// http://localhost:3000/api/create
router.post('/create', async (req, res) => {
  try{
    const newCar =  new Car({
      id: '23', make: 'Vab', model: 'Model1', colour: 'blue', owner: 'Vishwas'
    })
    await CarControllerBackEnd.create(newCar);
    res.status(201).send();
  }catch(err){
    res.status(500).json(err);
  }
})

// http://localhost:3000/api/init
router.post('/init', async (req, res) => {
  try{
    await CarControllerBackEnd.init();
    res.status(201).send();
  }catch(err){
    res.status(500).json(err);
  }
})

// http://localhost:3000/api/changeOwner
router.post('/changeOwner', async (req, res) => {
  try{
    await CarControllerBackEnd.changeOwner(req.body.id, req.body.owner);
    res.status(201).send();
  }catch(err){
    res.status(500).json(err);
  }
})

// http://localhost:3000/api/query?id=23
router.get('/query', async (req, res) => {
  try{
    const car = new Car(await CarControllerBackEnd.query(req.query.id));
    res.status(200).json(car)
  }catch(err){
    res.status(500).json(err);
  }
  
})

module.exports = router
