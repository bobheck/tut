
greeting = "Bob"
var45 = "This is ok"

num = 34

# variables must start with a letter or underscore
# case sensitive

print(greeting)

print(greeting + str(num))


# DATA TYPES
# Numerics
#   Integer
#   Boolean
#   Floating
#   Complex

# Mappings

# Files

# Classes

# Instances

# Exceptions

# Sequences
#   String


# -------------
# Integer
# -------------
a = 12
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a ** b)
print(a / b)  # result as floating
print(a // b) # result as integer
print(a % b)


for i in range(1, a):
    print(i)

# this will produce error
#for i in range(1, a/b):
#    print(i)

for i in range(1, a//b):
   print(i)

###################
print('###################')

parrot = "Norwegian Blue"
print(parrot)
print(parrot[0])
print(parrot[3])
#print(parrot[32]) # error
print(parrot[-3])
print(parrot[0:6])
print(parrot[:6])
print(parrot[6:])
print(parrot[-4:2])
print(parrot[-4:-2])
print(parrot[0:6:2])
print(parrot[0:6:3])

number = "9,223,372,036,854,775,807"
print(number[1::4])
numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9"
print(numbers[0::3])

string1 = "he's "
string2 = "probably"
print(string1 + string2)
print("he's " "probably " "pining")
print(string2 * 4)
print((string2 + " ") * 4)
print("Hello " * (5 + 4))
print("Hello " * 5 + " 4")
today = "Wednesday"
print("day" in today)
print("Day" in today)
print("Wed" in today)
print("fri" in today)



