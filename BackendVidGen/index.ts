import { generateVerticalScroll, takeSnapshot } from "./screenshot";

console.log("Hello via Bun!");




import { Elysia } from 'elysia'
import { cors } from "@elysiajs/cors";

const app = new Elysia();

app.use(cors({

    origin: "*"
}));

type GenerationParams = { url: string, prompt: string };
app.post('/generate', async ({ params: GenerationParams }) => {

    let filename = await takeSnapshot("https://www.oracle.com/cloud/")
    generateVerticalScroll(filename)


    return "DONE"

});
app.listen(8000);