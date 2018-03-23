import {Workshop} from "./src/workshop";

const workshops = {};

export {findValidator, addValidator} from "./src/validators/validator"

export default function(ws) {
    if (!(ws in workshops)) {
        workshops[ws] = new Workshop;
    } 
    return workshops[ws];
}