import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
  res.send("PING");
});

export default router;