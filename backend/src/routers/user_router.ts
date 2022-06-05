import express from 'express';
import UserController from "../controllers/user_controller";
import Authentication from '../middlewares/authentication';


const router = express.Router();
const userController = new UserController();
const authentication = new Authentication();

router.get("/users", userController.getAll);
router.get("/users/:username", userController.getOne);
router.post("/users", userController.create);
router.patch("/users/:username", userController.update);
router.delete("/users/:username", userController.delete);


export default router;