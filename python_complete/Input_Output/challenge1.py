# Write a program to append the times tables to our jabberwocky poem
# in sample.txt. We want the tables from 2 to 12 (similar to the output
# from the For loops part 2 lecture in section 6).
#
# The first column of numbers should be right justified. As an example,
# the 2 times table should look like this:
#   1 times 2 is 2
#   2 times 2 is 4
#   3 times 2 is 6
#   4 times 2 is 8
#   5 times 2 is 10
#   6 times 2 is 12
#   7 times 2 is 14
#   8 times 2 is 16
#   9 times 2 is 18
#  10 times 2 is 20
#  11 times 2 is 22
#  12 times 2 is 24
#  --------------------

with open("sample.txt", 'r') as orig:
    lines = orig.read()

with open("sample2.txt", 'w') as nw:
    print(lines, file=nw)

with open("sample2.txt", 'a') as fil:
    for i in range(2, 13):
        for j in range(1, 13):
            print("{0:>2} times {1:>2} is {2:>3}".format(j, i, i * j), file=fil)
