name = input("Please enter your name: ")
age = int(input("How old are you, {0}? ".format(name)))
print(age)

# if age >= 18:
#     print("You are old enough to vote")
#     print("Please put an X in the box")
# else:
#     print("Please come back in {0} years".format(18-age))

if age < 18:
    print("Please come back in {0} years".format(18-age))
elif age >= 900:
    print("Sorry, Yoda, you die in Return of the Jedi")
else:
    print("You are old enough to vote")
    print("Please put an X in the box")

tree1 = 'oak'
tree2 = 'elm'

# add the code to compare the trees
if tree1 == tree2:
    print("The trees are the same")
else:
    print("The trees are different")


x = 5
y = 7

if x > y:
    print("x is greater than y")
elif y > x:
    print("x is smaller than y")
else:
    print("x equals y")
