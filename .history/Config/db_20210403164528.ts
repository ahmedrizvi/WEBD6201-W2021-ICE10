import { mongo } from "mongoose";

let mongoDBPath = "mongodb://localhost/webd6201";
let sessionSecret = "someSecret";

function myFunction()
{
    console.log("this function does nothing.");
}

module.exports = {
    DB: mongoDBPath,
    Secret: sessionSecret,
    Nothing: myFunction
}