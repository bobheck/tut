
imelda = "More Mayhem", "Imelda May", 2011, (
    [(1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Waltz")])

print(imelda)

imelda[3].append((5, "All For You"))

album, artist, year, tracks = imelda
tracks.append((6, "Eternity"))
print(f"{album}, {artist}, {year}")
for track in tracks:
    nbr, song = track
    print(f"\t{nbr} - {song}")
