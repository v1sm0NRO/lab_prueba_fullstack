import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getSets = async () => axios.get(`${API_URL}/sets`);
export const getCardsBySet = async (id: string) => axios.get(`${API_URL}/sets/${id}/cards`);
