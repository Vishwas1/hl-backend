const router = require('express').Router()
const { InitServer, CarControllerBackEnd } =  require('../hl-connection')
const { Car } = require('car-cc');

InitServer();
// user registration end point
router.post('/', async (req, res) => {
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


router.get('/', async (req, res) => {
  try{
    const car = new Car(await CarControllerBackEnd.query('10'));
    res.status(200).json(car)
  }catch(err){
    res.status(500).json(err);
  }
  
})

module.exports = router
