import express from "express";
import favoritesRoutes from "./routes/favorites.routes.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use("/api/favorites", favoritesRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({ success: true });
});

app.listen(process.env.PORT);