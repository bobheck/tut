import pickle

# imelda = ("More Mayhem",
#           "IMelda May",
#           "2011",
#           ((1, "Pulling the Rug"),
#            (2, "Psycho"),
#            (3, "Mayhem"),
#            (4, "Kentish Town Waltz")))
#
# with open("imelda.pickle", "wb") as pickle_file:
#     pickle.dump(imelda, pickle_file)

with open("imelda.pickle", "rb") as pickle_file:
    imelda2 = pickle.load(pickle_file)

print(imelda2)

album, artist, year, track_list = imelda2

print(album)
print(artist)
print(year)
for track in track_list:
    track_number, track_name = track
    print(track_number, track_name)

# ----------------------------------------------------
# demonstrating multiple objects pickled in same file
# ordinal position is important
# pickle.dump(journey, multi_file, pickle.HIGHEST_PROTOCOL)
# ----------------------------------------------------

journey = ("Escape",
           "Journey",
           "1981",
           ((1, "Escape"),
            (2, "Who's Crying Now"),
            (3, "Stone in Love"),
            (4, "Don't Stop Believin'")))

even = list(range(0, 10, 2))
odd = list(range(1, 10, 2))

with open("multi.pickle", "wb") as multi_file:
    pickle.dump(journey, multi_file)
    pickle.dump(even, multi_file)
    pickle.dump(odd, multi_file)
    pickle.dump(1234567, multi_file)



with open("multi.pickle", "rb") as multi_file:
    journey2 = pickle.load(multi_file)
    even2 = pickle.load(multi_file)
    odd2 = pickle.load(multi_file)
    x = pickle.load(multi_file)

print(journey)

album, artist, year, track_list = journey2

print(album)
print(artist)
print(year)
for track in track_list:
    track_number, track_name = track
    print(track_number, track_name)

print("=" * 50)
for i in even2:
    print(i)

print("=" * 50)
for i in odd2:
    print(i)

print("=" * 50)
print(x)

print("=" * 50)
# demonstrate how unpickling unsafe data can cause problems
# pickle.loads(b"cos\nsystem\n(S'del imelda_save.pickle'\ntR.")
