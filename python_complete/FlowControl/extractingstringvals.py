number = input("Input numbers with various separators: ")
separators = ""

for char in number:
    if not char.isnumeric():
        separators += char

print(separators)

values = "".join(char if char not in separators else " " for char in number).split()
print([int(val) for val in values])
print("Sum = {}".format(sum([int(val) for val in values])))

