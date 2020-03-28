name = input("Please enter your name: ")
age = int(input("How old are you, {0}? ".format(name)))

if 17 < age < 31:
    print("Welcome to the holiday")
else:
    print("Sorry, you are outside the age range")


