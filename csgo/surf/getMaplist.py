import os, fnmatch

f = open("maplist.txt", "a")


listOfFiles = os.listdir('.')  
pattern = "surf_*.bsp"  
for entry in listOfFiles:  
    if fnmatch.fnmatch(entry, pattern):
            print (entry.replace('.bsp', ''))
            f.write(entry.replace('.bsp', '') + "\n")
f.close()