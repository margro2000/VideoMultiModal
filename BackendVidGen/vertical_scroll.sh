#!/bin/bash

ffmpeg -f lavfi -i color=s=1080x1920 -loop 1 -i $1 -filter_complex "[1:v]scale=1080:-2[fg]; [0:v][fg]overlay=y=-'t*h*0.02'[v]" -map "[v]" -t 00:00:30 $1.mp4


