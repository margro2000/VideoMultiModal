import { generateVerticalScroll, takeSnapshot } from "./screenshot";

console.log("Hello via Bun!");

let filename = await takeSnapshot("https://www.oracle.com/cloud/")

generateVerticalScroll(filename)



