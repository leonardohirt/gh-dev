from PIL import Image

# Open original user PNG
img = Image.open('C:/Users/leona/.gemini/antigravity/brain/3d1c54e3-a1a3-4d76-abf9-9188f01c3689/.user_uploaded/media__1784825335297.png').convert('RGBA')

datas = img.getdata()

# 1. Save original transparent as logo_original.png
img.save('src/assets/logo_original.png')

# 2. Create dark-mode optimized version:
# Make dark blue text ('gh') bright white/light blue so it is 100% visible on dark backgrounds
new_data = []
for item in datas:
    r, g, b, a = item
    if a > 30: # non-transparent pixel
        # If it's dark blue / dark pixel (low green/red, dark blue hue)
        if r < 80 and g < 100 and b < 180:
            # Change dark blue gh to clean white
            new_data.append((255, 255, 255, a))
        else:
            new_data.append(item)
    else:
        new_data.append(item)

img.putdata(new_data)
img.save('src/assets/logo.png', 'PNG')
print("Created logo.png optimized for dark mode and saved logo_original.png")
