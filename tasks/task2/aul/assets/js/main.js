// import export
// Classes

import { cleanJail } from "./helpers/cleanJail.js";
import {BombardilloCrocodillo} from './entities/BombardilloCrocodillo.js'
import {TralaleloTralala} from './entities/TralaleloTralala.js'





const bombardilloCrocodillo = new BombardilloCrocodillo('crocodyle',5,'tiktok', 'eh o GOAT', 1, 7)

const tralaleloTralala = new TralaleloTralala('tutu',5,'tiktok', 'nao eh o GOAT', 1, 'adibas')



console.log(tralaleloTralala.shoes,bombardilloCrocodillo.description)

console.log(1);

console.log(cleanJail(20));
