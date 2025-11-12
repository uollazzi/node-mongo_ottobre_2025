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

        // return await Categoria.find({
        //     $and: [
        //         {
        //             titolo: { $ne: "Books" }
        //         },
        //         {
        //             attiva: true
        //         }
        //     ]
        // }, { _id: 0, attiva: 0, dataCreazione: 0, __v: 0 });

        return await Categoria
            .find()
            .where("titolo").ne("Books")
            .where("attiva").equals(true)
            .select("-attiva -dataCreazione -_id -__v")
            .exec();

    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.disconnect();
    }
}