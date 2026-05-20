from rembg import remove
from PIL import Image

input_path = 'public/profile.jpg'
output_path = 'public/profile-transparent.png'

try:
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    print("Background removed successfully!")
except Exception as e:
    print(f"Error: {e}")
