import mongoose from "mongoose";
import { Categoria } from "./models/categoria";

export const insertCategoria = async (titolo: string, sottotitolo?: string, descrizione?: string) => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "ecommerce" });

        const cat = new Categoria();
        cat.titolo = titolo;
        cat.sottotitolo = sottotitolo;
        cat.descrizione = descrizione;

        return await cat.save();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}

export const getCategorie = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING!, { dbName: "ecommerce" });

        return await Categoria.find();
    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}