import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'; // Importe dotenv

dotenv.config(); // Carregue as variáveis de ambiente

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

export const db = client.db("projeto-spotify");


// import { MongoClient } from "mongodb";

// const url = "mongodb+srv://juliooliver77:Resende77@cluster0.hxmzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(url);

// export const db = client.db("projeto-spotify");

// const artistCollection = await db.collection("artists").find({}).toArray();
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(artistCollection, songCollection);