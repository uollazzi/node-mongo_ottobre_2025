import { config } from "dotenv";
config();

console.log(process.env.MONGODB_CONNECTION_STRING);

import * as driver from "./driver";

driver.insertProdotto("Cappello da capitano Hugh Hefner", "Men's cloth")
    .then(r => {
        console.log(r);
        driver.getProdotti().then(p => console.log(p));
    });


