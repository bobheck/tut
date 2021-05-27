# my_list = list(range(23))
# print(my_list)
#
# even = list(range(0, 20, 2))
# odd = list(range(1, 21, 2))
#
# print(odd)
# print(even)
my_string = "abcdefghijklmnopqrstuvwxyz"
print(my_string.index('e'))
print(my_string[7])

small_decimals = range(10)
print(small_decimals)
print(small_decimals.index(4))

odd2 = range(1, 34000, 2)
print(odd2)
print(odd2[1111])

# sevens = range(7, 1000000, 7)
# x = int(input("Input a positive number less than 1,000,000: "))
# if x in sevens:
#     print("{} IS divisible by 7".format(x))
# else:
#     print("{} IS NOT divisible by 7".format(x))

print(small_decimals)
my_range = small_decimals[::2]
print(my_range)
print(list(my_range))
print(my_range.index(4))

decimals = range(0, 100)
print(decimals)
my_range = decimals[3:40:3]
print(my_range)

for i in my_range:
    print(i)

print('-' * 60)

for i in range(3, 40 ,3):
    print(i)

print(my_range == range(3,40,3))