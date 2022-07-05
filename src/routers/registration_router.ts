import express from 'express';
import RegistrationController from '../controllers/registration_controller';


const router = express.Router();
const registrationController = new RegistrationController();

router.post("/register", registrationController.register);


export default router;