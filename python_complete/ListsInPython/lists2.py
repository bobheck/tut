list_1 = []
list_2 = list()
print("list_1: {}".format(list_1))
print("list_2: {}".format(list_2))
print("list_1 == list_2: {}".format(list_1 == list_2))

print(list("The lists are equal"))
even = [2, 4, 6, 8]

another_even = even
another_even = list(even)

# NOTE THIS DIFFERENCE
# == compares lists contents
# is compares instance
print(another_even is even)
print(another_even == even)

another_even.sort(reverse=True)
print(even)

odd = [1,3,5,7,9]
numbers = [even, odd]
print(numbers)
for number_set in numbers:
    print(number_set)
    for value in number_set:
        print(value)

