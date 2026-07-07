import * as favorites from "../services/favorites.service.js";

export const getFavorites = async (req, res) => {
    try {
        const { userId } = req.params || {};

        if (!userId)
            return res.status(400).json({ error: "Missing required data" });

        const result = await favorites.getFavorites({ userId });

        return res.status(200).json(result);
    }
    catch(error) {
        res.status(500).json({ error: "Something went wrong" })
    }
}

export const addFavorite = async (req, res) => {
    try {
        const { userId, recipeId, title } = req.body || {};

        if (!userId || !recipeId || !title)
            return res.status(400).json({ error: "Missing required data" });

        const result = await favorites.addFavorite(req.body);

        return res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong" })
    }
};

export const deleteFavorite = async (req, res) => {
    try {
        const { id } = req.params || {};

        if (!id)
            return res.status(400).json({ error: "Missing required data" });
        
        const result = await favorites.deleteFavorite({ id });

        if (result.length === 0)
            return res.status(404).json({ error: "Favorite not found" });
        
        res.status(200).json({ message: "Favorite deleted successfully" });
    }
    catch(error) {
        res.status(500).json({ error: "Something went wrong" })
    }
};