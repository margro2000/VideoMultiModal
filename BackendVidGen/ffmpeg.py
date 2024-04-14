import subprocess

def re_encode_video(input_video, output_video):
    ffmpeg_command = [
        'ffmpeg',
        '-i', input_video,
        '-c:v', 'libx264',       # Video codec
        '-s', '1280x720',        # Resolution
        '-r', '25',              # Frame rate
        '-pix_fmt', 'yuv420p',   # Pixel format
        '-c:a', 'aac',           # Audio codec
        '-b:a', '192k',          # Audio bitrate
        '-strict', 'experimental',
        output_video
    ]
    subprocess.run(ffmpeg_command, check=True)

def concatenate_videos(video_files, output_file):
    # Write the list of video files to a temporary text file
    with open('filelist.txt', 'w') as file:
        for video in video_files:
            file.write(f"file '{video}'\n")
    
    # FFmpeg command to concatenate videos
    ffmpeg_command = [
        'ffmpeg',
        '-f', 'concat',
        '-safe', '0',
        '-i', 'filelist.txt',
        '-c', 'copy',
        output_file
    ]
    subprocess.run(ffmpeg_command, check=True)

# Execute the functions
re_encode_video('mid.mp4', 'mid_resized.mp4')
video_files = ['intro.mp4', 'mid_resized.mp4', 'outro.mp4']
concatenate_videos(video_files, 'final_output.mp4')
