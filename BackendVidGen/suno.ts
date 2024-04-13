
import axios from 'axios';

type SongGenerationResponse = {
    id: string,
    clips: { id: string }[]
}

export async function generateSong({ prompt }: { prompt: string }): Promise<SongGenerationResponse> {
    const response = await fetch('https://suno-api-zlfa.onrender.com/generate/description-mode', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gpt_description_prompt: prompt,
            make_instrumental: false,
            mv: "chirp-v3-0",
            prompt: ""
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

export const inferSongUrl = (id: string): string => {
    return `https://cdn1.suno.ai/${id}.mp3`
}