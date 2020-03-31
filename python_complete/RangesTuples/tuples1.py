# t = "a", "b", "C"
# tt = ("a", "b", "c")
# print(t)
# print(tt)
# print("a", "b", "c")
# print(("a", "b", "c"))
welcome = "Welcome to my Nightmare", "Alice Cooper", 1975
bad = "Bad Company", "Bad Company", 1974
budgie = "Nightflight", "Budgie", 1981
imelda = "More Mayhem", "Emilda May", 2011
metallica = "Ride the Lightning", "Metallica", 1984

print(metallica)
print(metallica[2])

#this will cause an error
# metallica[0] = "Master of Puppets"

#tuples are immutable, but you can change the elements like this
imelda = imelda[0], "Imelda May", imelda[2]
print(imelda)

metallica2 = ["Ride the Lightning", "Metallica", 1984]
print(metallica2)
metallica2[0] = "Master of Puppets"
print(metallica2)