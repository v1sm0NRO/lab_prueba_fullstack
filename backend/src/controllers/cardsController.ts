import { Request, Response } from "express";
import pool from "../db";

export const getSets = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM sets");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching sets:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getCardsBySet = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM cards WHERE set_id = $1", [id]);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching cards by set:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
