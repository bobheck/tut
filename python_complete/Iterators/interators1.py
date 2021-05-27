string = "1234567890"
# for char in string:
#     print(char)
# my_iterator = iter(string)
# print(my_iterator)
# print(next(my_iterator))
# print(next(my_iterator))

for char in string:
    print(char)

for char in iter(string):
    print(char)

# mini challenge
list1 = ["bob", "carol", "ted", "alice"]
my_iter = iter(list1)
for i in range(len(list1)):
    print(next(my_iter))