import { Router } from "express";
import { getSets, getCardsBySet, getCardDetails } from "./controllers/cardsController";

const router = Router();

router.get("/sets", getSets);
router.get("/sets/:id/cards", getCardsBySet);
router.get("/cards/:id", getCardDetails);

export default router;
