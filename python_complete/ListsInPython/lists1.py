# Lists in Python
#   Range
#   List
#   Tuple
#
#
#
# also three binary types

# ipAddress = input("Please enter an IP address: ")
# print(ipAddress.count("."))
parrot_list = ["non pinin'", "no more", "a stiff", "bereft of life"]
parrot_list.append("dead")
for state in parrot_list:
    print("This parrot is " + state)

even = [2, 4, 6, 8]
odd = [1, 3, 5, 7, 9]
numbers = even + odd
numbers_unsorted = even + odd
numbers.sort()
numbers_sorted = sorted(numbers_unsorted)
print(numbers_unsorted)
print(numbers)
print(numbers_sorted)

print("numbers == numbers_sorted = {}".format(numbers == numbers_sorted))
print("numbers_unsorted == numbers_sorted = {}".format(numbers_unsorted == numbers_sorted))
print("numbers == numbers_unsorted = {}".format(numbers_unsorted == numbers_sorted))