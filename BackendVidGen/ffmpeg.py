import subprocess

def re_encode_video(input_video, output_video, codec='libx264', fps='25', resolution='1280x720', pix_fmt='yuv420p'):
    ffmpeg_command = [
        'ffmpeg',
        '-i', input_video,
        '-c:v', codec,
        '-r', fps,
        '-s', resolution,
        '-pix_fmt', pix_fmt,
        '-c:a', 'aac',
        '-strict', 'experimental',
        '-b:a', '192k',
        output_video
    ]
    subprocess.run(ffmpeg_command, check=True)

def concatenate_videos(file_list_path, output_file):
    ffmpeg_command = [
        'ffmpeg',
        '-f', 'concat',
        '-safe', '0',
        '-i', file_list_path,
        '-c', 'copy',
        output_file
    ]
    subprocess.run(ffmpeg_command, check=True)

# Re-encode mid.mp4 to match intro and outro
re_encode_video('mid.mp4', 'mid_fixed.mp4')

# Concatenate videos
video_files = ['intro.mp4', 'mid_fixed.mp4', 'outro.mp4']
with open('filelist.txt', 'w') as file:
    for video in video_files:
        file.write(f"file '{video}'\n")
concatenate_videos('filelist.txt', 'final_output.mp4')
