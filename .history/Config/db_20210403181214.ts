import { mongo } from "mongoose";

export const mongoDBPath = "mongodb://localhost/webd6201";
let sessionSecret = "someSecret";


module.exports = {
    Path: mongoDBPath,
    Secret: sessionSecret
}