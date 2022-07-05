import express from 'express';
import userRouter from "./user_router";
import registrationRouter from "./registration_router";



const router = express.Router();
router.get("/", (req, res) => {
  res.send("Open Store API Ok!")
})
router.use(userRouter);
router.use(registrationRouter);


export default router;