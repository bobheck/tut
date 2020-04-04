welcome = "Welcome to my Nightmare", "Alice Cooper", 1975
bad = "Bad Company", "Bad Company", 1974
budgie = "Nightflight", "Budgie", 1981
imelda = "More Mayhem", "Imelda May", 2011
metallica = "Ride the Lightning", "Metallica", 1984
metallica_list = ["Ride the Lightning", "Metallica", 1984]


#unpacking a tuple
title, artist, year = imelda
print(title)
print(artist)
print(year)

title, artist, year = bad
print(title)
print(artist)
print(year)

metallica_list.append("Rock")
#error
#title, artist, year = metallica_list

imelda2 = "More Mayhem", "Imelda May", 2011, (
    (1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Waltz"))

print(imelda2)
title, artist, year, tracks = imelda2
print(title)
print(artist)
print(year)
print(tracks)

title, artist, year, tracks = imelda2
print(title)
print(artist)
print(year)
print(tracks[2])


#this will treat the tracks as one tuple with 8 elements, that is not what we want
# must enclose each tuple in parens
imelda3 = "More Mayhem", "Imelda May", 2011, (
    1, "Pulling the Rug", 2, "Psycho", 3, "Mayhem", 4, "Kentish Town Waltz")
print(imelda3)
title, artist, year, tracks = imelda3
print(title)
print(artist)
print(year)
print(tracks)

imelda4 = "More Mayhem", "Imelda May", 2011, (1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Waltz")
print(imelda4)
title, artist, year, track1, track2, track3, track4 = imelda4
print(title)
print(artist)
print(year)
print(track1)
print(track2)
print(track3)
print(track4)

imelda5 = "More Mayhem", "Imelda May", 2011, 1, "Pulling the Rug", 2, "Psycho", 3, "Mayhem", 4, "Kentish Town Waltz"


