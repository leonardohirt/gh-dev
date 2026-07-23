from PIL import Image

try:
    img = Image.open('src/assets/logo.jpg').convert('RGBA')
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check for white / near white background
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            new_data.append((255, 255, 255, 0)) # transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save('src/assets/logo.png', 'PNG')
    print("Logo processed successfully into src/assets/logo.png")
except Exception as e:
    print("Error processing logo:", e)
