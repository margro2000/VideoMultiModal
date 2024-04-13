import { takeSnapshot } from "./screenshot";

console.log("Hello via Bun!");

await takeSnapshot("https://www.oracle.com/cloud/")