import os
import urllib.request
dir, file = os.path.split(os.path.abspath(__file__))

maps = urllib.request.urlopen("https://pastebin.com/raw/xxxxxxxx") # Maplist - separator \n
maps = maps.read()
maps = maps.splitlines()

fastdl = "http://fast.surfdl.net/csgo/maps/"

for map in maps:
    map = map.decode("utf-8")
    print("Downloading", map)
    url = fastdl + map + ".bsp.bz2"
    dldir = dir + "\\" + map + ".bsp.bz2"
    try:
        urllib.request.urlretrieve(url, dldir)
        print("Downloaded", map)
    except:
        print("Failed to download", url)
        try:
            url = fastdl + map + ".bsp"
            dldir = dir + "\\" + map + ".bsp"
            urllib.request.urlretrieve(url, dldir)
            print("Downloaded", map)
        except:
            print("Failed to download", url)