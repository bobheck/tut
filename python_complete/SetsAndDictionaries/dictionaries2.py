fruit = {"orange": "a sweet, orange, citrus fruit",
         "apple": "good for making cider",
         "lemon": "a sour, yellow citrus fruit",
         "grape": "a small, sweet fruit growing in bunches",
         "lime": "a sour, green citrus fruit"}

print(fruit)
for key in fruit:
    print(fruit[key])


while True:
    dict_key = input("Please enter a fruit: ")
    if dict_key == "quit":
        break;
    description = fruit.get(dict_key, f"{dict_key} not found")
    print(description)
    # if dict_key in fruit:
    #     description = fruit.get(dict_key)
    #     print(description)
    # else:
    #     print(f"{dict_key} not found")

