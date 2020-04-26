fruit = {"orange": "a sweet, orange, citrus fruit",
         "apple": "good for making cider",
         "lemon": "a sour, yellow citrus fruit",
         "grape": "a small, sweet fruit growing in bunches",
         "lime": "a sour, green citrus fruit"}

print(fruit)

veg = {"cabbage": "every child's favorite",
       "sprouts": "mmmm, lovely",
       "spinach": "can I have some more fruit, please"}
print(veg)

# update modifies one dictionary by adding another to it
# update returns None
# veg.update(fruit)
# print(veg)

fruit_and_veg = fruit.copy()
fruit_and_veg.update(veg)
print(fruit_and_veg)
print(fruit)
print(veg)
