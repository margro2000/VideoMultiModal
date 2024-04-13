import { appendAudioToVerticalScroll, dowloandMp3fromURL, generateVerticalScroll, takeSnapshot } from "./screenshot";


let filename = await takeSnapshot("https://www.oracle.com/cloud/")
generateVerticalScroll(filename)
// dowloandMp3fromURL(url, "mp3/audio.mp3")
appendAudioToVerticalScroll(filename + ".mp4", "mp3/cloud_chasers.mp3")


import { Elysia } from 'elysia'
import { cors } from "@elysiajs/cors";

// const app = new Elysia();

// app.use(cors({

//     origin: "*"
// }));

// type GenerationParams = { url: string, prompt: string };
// app.post('/generate', async ({ params: GenerationParams }) => {

//     let filename = await takeSnapshot("https://www.oracle.com/cloud/")
//     generateVerticalScroll(filename)
//     appendAudioToVerticalScroll(filename + ".mp4", "Cloud Chasers.mp3")
//     return "DONE"

// });
// app.listen(8000);