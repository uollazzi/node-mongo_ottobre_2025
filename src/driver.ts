import { MongoClient } from "mongodb";

export const getProdotti = async () => {
    const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);

    const db = client.db("ecommerce");
    const collection = db.collection<Prodotto>("prodotti");

    const prodotti = await collection.find().toArray();

    await client.close();

    return prodotti;
}

export const insertProdotto = async (nome: string, categoria: string) => {
    const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);

    const db = client.db("ecommerce");
    const collection = db.collection<Prodotto>("prodotti");

    const prodotto: Prodotto = {
        nome: nome,
        categoria: categoria,
        utenteInserimento: "admin",
        dataInserimento: new Date(),
        dataRimozione: undefined
    }

    const result = await collection.insertOne(prodotto);

    await client.close();

    return result;
}

interface Prodotto extends CicloDiVita {
    nome: string;
    categoria: string;
}

interface Categoria extends CicloDiVita {
    nome: string;
}

interface CicloDiVita {
    utenteInserimento: string;
    dataInserimento: Date;
    dataRimozione: Date | undefined;
}