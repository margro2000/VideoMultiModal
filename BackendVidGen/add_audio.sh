ffmpeg -i $1 -i $2 -map 0 -map 1:a -c:v copy -shortest $1.withaudio.mp4
