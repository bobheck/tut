
#dictionaries and sets are both unordered and unique

fruit = {"orange": "a sweet, orange, citrus fruit",
         "apple": "good for making cider",
         "lemon": "a sour, yellow citrus fruit",
         "grape": "a small, sweet fruit growing in bunches",
         "lime": "a sour, green citrus fruit"}

# print(fruit["grape"])
#
# fruit["pear"] = "an odd shaped fruit"
# print(fruit)
# fruit["lime"] = "great with tequila"
# print(fruit)
# del fruit["lemon"]
# print(fruit)
# fruit.clear()
print(fruit)

while True:
    dict_key = input("Please enter a fruit: ")
    if dict_key == "quit":
        break;
    if dict_key in fruit:
        description = fruit.get(dict_key)
        print(description)
    else:
        print(f"{dict_key} not found")




