import { Router } from "express";
import { getSets, getCardsBySet } from "./controllers/cardsController";

const router = Router();

router.get("/sets", getSets);
router.get("/sets/:id/cards", getCardsBySet);

export default router;
