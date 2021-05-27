# Given the tuple below that represents the Imelda May album "More Mayhem", write
# code to print the album details, followed by a listing of all the tracks in the album.
#
# Indent the tracks to a single tab stop when printing them

imelda = "More Mayhem", "Imelda May", 2011, (
    (1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Waltz"))

album, artist, year, tracks = imelda
print(f"{album}, {artist}, {year}")
for track in tracks:
    nbr, song = track
    print(f"\t{nbr} - {song}")
