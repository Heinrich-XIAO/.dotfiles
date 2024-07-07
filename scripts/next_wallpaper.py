import os
import random
import subprocess

def choose_random_png(directory):
    # Get a list of all PNG files in the specified directory
    png_files = [f for f in os.listdir(directory) if f.endswith('.png')]
    if not png_files:
        raise ValueError(f"No PNG files found in {directory}")

    # Choose a random PNG file
    random_png = random.choice(png_files)
    return os.path.join(directory, random_png)

def set_wallpaper_and_terminal_bg(png_file):
    subprocess.run(f'swww img {png_file}', shell=True)
    subprocess.run(f'wallust run {png_file}', shell=True)

if __name__ == '__main__':
    # Directory containing PNG wallpapers
    wallpaper_directory = os.path.expanduser('~/Pictures/Wallpaper-Bank/wallpapers/')

    try:
        # Choose a random PNG file
        random_png_file = choose_random_png(wallpaper_directory)

        # Set wallpaper and terminal background
        set_wallpaper_and_terminal_bg(random_png_file)

        print(f"Wallpaper set to: {random_png_file}")
    except ValueError as e:
        print(e)

