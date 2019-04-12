import { Car } from "car-cc";
import { Request, Response, Router } from "express";
import { CarControllerBackEnd, InitServerIdentity } from "../convector";
const router: Router = Router();

InitServerIdentity();

// http://localhost:8080/car/create
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.send(await CarControllerBackEnd.query(id));
  } catch (err) {
      res.status(500).send(err);
  }
});

// http://localhost:8080/car/:id=231
router.post("/create", async (req: Request, res: Response) => {
  try {
    const newCar =  new Car({
      id: '231', make: 'Vab', model: 'Model1', colour: 'blue', owner: 'Vishwas'
    });
    await CarControllerBackEnd.create(newCar);
    res.status(200).send('SUCCESS');
  } catch (err) {
    res.status(500).send(err);
  }
});

export const CarControllerRouter: Router = router;
