import mongoose from "mongoose";

type ICategoria = {
    titolo: string,
    sottotitolo?: string,
    descrizione?: string,
    dataCreazione: Date,
    attiva: boolean,
}

const categoriaSchema = new mongoose.Schema<ICategoria>({
    titolo: { type: String, required: true },
    sottotitolo: String,
    descrizione: { type: String },
    dataCreazione: { type: Date, default: Date.now() },
    attiva: { type: Boolean, default: true }
});

export const Categoria = mongoose.model<ICategoria>("Categoria", categoriaSchema, "categorie");