
# https://docs.python.org/3/library/functions.html#open


cities = ["Dallas", "Houston", "Austin", "San Antonio", "Fort Worth", "El Paso"]

with open("cities.txt", 'w') as city_file:
    for city in cities:
        print(city, file=city_file)

cities = []
with open("cities.txt", 'r') as city_file:
    for city in city_file:
        cities.append(city.strip('\n'))  # strip works on begin or end of string only

print(cities)
for city in cities:
    print(city)

print("=" * 45)

imelda = "More Mayhem", "Imelda May", "2011", (
    (1, "Pulling the Rug"), (2, "Psycho"), (3, "Mayhem"), (4, "Kentish Town Waltz"))

print(imelda)



with open("imelda3.txt", 'w') as imelda_file:
    print(imelda, file=imelda_file)

with open("imelda3.txt", 'r') as imelda_file:
    contents = imelda_file.readline()

imeldat = eval(contents)  # just a demo, not a good idea to do this
print(imeldat)
title, artist, year, tracks = imeldat
print(title)
print(artist)
print(year)

