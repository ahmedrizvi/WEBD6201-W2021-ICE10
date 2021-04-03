import { mongo } from "mongoose";

let mongoDBPath = "mongodb://localhost/webd6201";
let sessionSecret = "someSecret";


module.exports = {
    DBPath: mongoDBPath,
    Secret: sessionSecret
}