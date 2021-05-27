for i in range(1,13):
    print("No. {0:3} squared is {1:6} and cubed is {2:6}".format(i, i ** 2, i ** 3))

for i in range(1,13):
    print("No. {0:<3} squared is {1:<6} and cubed is {2:<6}".format(i, i ** 2, i ** 3))

for i in range(1,13):
    print("No. {0:<3} squared is {1:^6} and cubed is {2:^6}".format(i, i ** 2, i ** 3))

print()
print("Pi is approximately {0:12}".format(22/7))
print("Pi is approximately {0:12f}".format(22/7))
print("Pi is approximately {0:12.50f}".format(22/7))
print("Pi is approximately {0:52.50f}".format(22/7))
print("Pi is approximately {0:62.50f}".format(22/7))
print("Pi is approximately {0:<72.50f}".format(22/7))
print("Pi is approximately {0:<72.54f}".format(22/7))

for i in range(1,13):
    print("No. {} squared is {} and cubed is {:^6}".format(i, i ** 2, i ** 3))

name = "Bob"
age = 56
print(name + f" is {age} years old")
print(f"Pi is approximately {22 / 7:12.50f}")