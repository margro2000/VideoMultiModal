import puppeteer from "puppeteer-extra";

import fs from 'node:fs'

import StealthPlugin from 'puppeteer-extra-plugin-stealth'


import { setTimeout } from "node:timers/promises";

// ...

puppeteer.use(StealthPlugin());


export async function takeSnapshot(url) {

    const timeout = 6000;

    console.log("LAUNCHING")
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        userDataDir: '/Users/djacobs7/git/gpt_vid_experiment/user_data/1'
    });

    console.log("LAUNCHED")

    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36");

    await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: timeout,
    });


    await page.setViewport({
        width: 1200,
        height: 1200,
        deviceScaleFactor: 1,
    });


    await setTimeout(4000);

    const snapshotDir = './snapshots';
    if (!fs.existsSync(snapshotDir)) {
        fs.mkdirSync(snapshotDir);
    }

    const { v4: uuidv4 } = require('uuid');
    const snapshotFileName = `${snapshotDir}/snapshot-${uuidv4()}.jpg`;

    await page.screenshot({
        path: snapshotFileName,
        fullPage: true,
    });



    const csvLine = `${snapshotFileName}, ${url}\n`;
    fs.appendFileSync('snapshots.csv', csvLine);

    console.log("SNAPSHOTTED")
    await browser.close()



    return snapshotFileName;

}



export function generateVerticalScroll(snapshotFileName: string) {
    const { exec } = require('child_process');

    console.log("GENERATING VERTICAL SCROLL")



    exec(`./vertical_scroll.sh ${snapshotFileName} output.mp4`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}



