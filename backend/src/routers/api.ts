import express from 'express';
import userRouter from "./user_router";


const router = express.Router();
router.get("/", (req, res) => {
  res.send("Open Store API Works.")
})
router.use(userRouter);


export default router;