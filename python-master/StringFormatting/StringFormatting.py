__author__ = "Bob"

age = 55
print("My age is " + str(age) + " years")
print("My age is {0} years".format(age))

print("There are {0} days in {1}, {2}, {3}, {4}, {5}, {6} and {7}".format(31, "January", "March", "May", "July",
        "August", "October", "December"))

print("""
January:    {2:f}
February:   {0:}
March:      {2}
April:      {1}
May:        {2}
June:       {1}
July:       {2}
August:     {2}
September:  {1}
October:    {2}
November:   {1}
December:   {2}
""".format(28,30,31))
print()


# below, stringformatting is deprecated

print("My age is %d years" % age)
print("My age is %d %s, %d %s" % (age, "years", 6, "months"))

for i in range(1, 12):
    print("No. %2d squared is %4d and cubed is %4d" %(i, i ** 2, i ** 3))

