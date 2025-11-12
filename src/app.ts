import { config } from "dotenv";
config({ quiet: true });

console.log(process.env.MONGODB_CONNECTION_STRING);

import * as driver from "./driver";


// driver.insertProdotto("Cappello da capitano Hugh Hefner", "Men's cloth")
//     .then(r => {
//         console.log(r);
//         driver.getProdotti().then(p => console.log(p));
//     });

import * as orm from "./orm";

// orm.getCategorie().then(risultato => console.log(risultato));

const popolaCategorie = async () => {
    let r = await orm.insertCategoria("Woman Shoes", "Woman Shoes", "Woman Shoes");
    console.log(r);

    r = await orm.insertCategoria("Books", "Books", "Books");
    console.log(r);

    r = await orm.insertCategoria("Men's cloth", "Men's cloth", "Men's cloth");
    console.log(r);
}

// popolaCategorie();
orm.getCategorie().then(r => console.log(r));