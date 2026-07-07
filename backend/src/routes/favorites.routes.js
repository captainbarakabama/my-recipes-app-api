import { Router } from "express";
import { getFavorites, addFavorite, deleteFavorite } from "../controllers/favorites.controller.js";

const router = Router();

router.get("/:userId", getFavorites)
router.post("/", addFavorite);
router.delete("/:id", deleteFavorite);

export default router;