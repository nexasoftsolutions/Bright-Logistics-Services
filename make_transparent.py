from PIL import Image
import os

input_path = "public/brightlogo.jpeg"
output_path = "public/brightlogo.png"

def remove_white_background():
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    # Using 240 to be safe and avoid removing light grays
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Saved to", output_path)

remove_white_background()
