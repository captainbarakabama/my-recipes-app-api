import { eq } from "drizzle-orm";
import { db } from "../../config/db.js";
import { favorites } from "../../db/schema.js";

export const getFavorites = async ({ userId }) => {
    return await db.select().from(favorites).where(eq(favorites.userId, userId));
}

export const addFavorite = async (data) => {
    return await db.insert(favorites).values(data).returning();
}

export const deleteFavorite = async ({ id }) => {
    return await db.delete(favorites).where(eq(favorites.id, id)).returning();
}