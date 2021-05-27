import time

my_list = ["a", "b", "c", "d"]
letters = "abcdefjhijklmnopqrstuvwxyz"
numbers = "0123456789"

# inefficient, strings are immutable so it is destroyed each time
tic = time.perf_counter()
new_string = ''
for c in my_list:
    new_string += c + ", "
toc = time.perf_counter()
print(new_string, end="\t ")
print(f"loop with += took \t{toc - tic:0.16f} seconds")

# much better to use join
tic2 = time.perf_counter()
new_string2 = ", ".join(my_list)
toc2 = time.perf_counter()
print(new_string2, end="\t\t ")
print(f"using .join took \t{toc2 - tic2:0.16f} seconds")

new_string = " mississippi ".join(numbers)
print(new_string)