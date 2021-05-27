decimals = range(0, 100)
my_range = decimals[3:40:3]
print(my_range == range(3, 40, 3))
print(range(0, 5, 2) == range(0, 6, 2))

print(list(range(0, 5, 2)))
print(list(range(0, 6, 2)))

r = range(0, 17)
print(r)

for i in r[::-2]:
    print(i)
print('-' * 50)
for i in range(16, 0, -2):
    print(i)
print('-' * 50)
print(range(0, 18)[::-2] == range(17, 0, -2))

# this does not loop at all because the start value
# is less than the finish value and we are using
# a negative step value
# notice how the slice above does work though
for i in range(0, 18, -2):
    print(i)

back_string = "egaugnal lufrewop yrev a si nohtyP"
print(back_string[::-1])

r = range(0, 10)
for i in r[::-1]:
    print(i)
