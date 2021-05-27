fruit = {"orange": "a sweet, orange, citrus fruit",
         "apple": "good for making cider",
         "lemon": "a sour, yellow citrus fruit",
         "grape": "a small, sweet fruit growing in bunches",
         "lime": "a sour, green citrus fruit"}

print(fruit)
print('-' * 50)

# ordered_keys = list(fruit.keys())
# ordered_keys.sort()

# ordered_keys = sorted(list(fruit.keys()))
# for f in ordered_keys:
#     print(f"{f} - {fruit[f]}")

for f in sorted(list(fruit.keys())):
    print(f"{f} - {fruit[f]}")
print('-' * 50)

# not optimal, better to use keys
for val in fruit.values():
    print(val)
print('-' * 50)
for key in fruit:
    print(fruit[key])
print('-' * 50)
print(fruit.keys())
print('-' * 50)
print(fruit.values())
print('-' * 50)
fruit_keys = fruit.keys()
print(fruit_keys)
print('-' * 50)
fruit["tomato"] = "not nice with ice cream"
print(fruit_keys)
print('-' * 50)
print(' ITEMS ')
print(fruit)
print(fruit.items())
f_tuple = tuple(fruit.items())
print(f_tuple)
fr1, desc1 = f_tuple[1]
print(fr1, desc1)
print('-' * 50)
for snack in f_tuple:
    item, descr = snack
    print(f"{item} is {descr}")
print('-' * 50)
print(dict(f_tuple))
print('-' * 50)
