import { appendAudioToVerticalScroll, dowloadFilefromURL, generateVerticalScroll, takeSnapshot } from "./screenshot";
import { generateSong, inferSongUrl } from "./suno";




const url = "https://www.daily.co/"
const prompt = `Generate a catchy tune to showcase daily.co.  It is Real-time voice, video, and AI for developers.  Thousands of developers trust our platform to build live features and experiences. `
const name = "daily_co"
const did_intro = "WOW!  DAILY DOT CO"
const did_outro = "DAILY DOT CO. TRY OUR API TODAY"

let s = await generateSong({
    prompt
})
const songId = s.clips[0].id;

console.log(`Generating song for ${songId}`)


let filename = await takeSnapshot(url)
generateVerticalScroll(filename)

let did_url_intro = await generateDIDClip(did_intro)
await dowloadFilefromURL(did_url_intro, `${name}-did-intro.mp4`)

let did_url_outro = await generateDIDClip(did_outro)
await dowloadFilefromURL(did_url_outro, `${name}-did-outro.mp4`)

console.log(`WAITING for ${songId}`)
await new Promise(resolve => setTimeout(resolve, 10000));

// console.log("AND NOW DONE")

// const songId = "81f36fee-28d1-4e14-be3c-46585f164723"
// const filename = "snapshots/snapshot-e0e13d30-4e9d-4d59-a3e5-e6ea91d77643.jpg"
await dowloadFilefromURL(inferSongUrl(songId), `mp3/audio-${name}.mp3`)
appendAudioToVerticalScroll(filename + `.mp4`, `mp3/audio-${name}.mp3`)



console.log(filename + `.mp4`)

import { Elysia } from 'elysia'
import { cors } from "@elysiajs/cors";
import { generateDIDClip } from "./did";

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