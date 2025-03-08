import "dotenv/config";
import axios from "axios";

const { NODE_ENV } = process.env;
const url = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";

// const api = axios.create({
//   baseURL: `${url}`,
// });

const responseArtists = await axios.get(`${url}/artists`);
const responseSongs = await axios.get(`${url}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;