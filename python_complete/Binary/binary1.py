for i in range(17):
    print(f"{i:>02} in binary is {i:>016b}")

# for i in range(17):
#     print(f"{i:>02} in octal is {i:>016o}")
#
# for i in range(17):
#     print(f"{i:>02} in hex is {i:>016x}")

x = 0x20
y = 0x0a

print(x)
print(y)
print(x * y)

z = 0b001011111

print(z)
print(f"{z:>08b}")
print(f"{z:>04x}")
print(z * y)


#CHALLENGE
# print binary without using string formatter

powers = []
for power in range(15, -1, -1):
    powers.append(2 ** power)

print(powers)

printing = False
x = int(input("Please enter a number: "))
for power in powers:
    bit = x // power
    if bit != 0 or power == 1:
        printing = True
    if printing:
        print(bit, end='')
    x %= power
