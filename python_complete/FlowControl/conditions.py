age = int(input("Age?: "))

if 16 <= age <= 65:
    print("Have a good day at work")
else:
    print("Enjoy your free time")

print("-" * 50)

if age < 16 or age > 65:
    print("Enjoy your free time")
else:
    print("Have a good day at work")

print("-" * 50)

if age in range(16, 66):
    print("Have a good day at work")
else:
    print("Enjoy your free time")
