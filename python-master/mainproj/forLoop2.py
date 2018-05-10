number ="9,332,372,036,854,775,807"
cleanedNumber = ''
for char in number:
    if char in '0123456789':
        cleanedNumber = cleanedNumber + char

newNumber = int(cleanedNumber)
print(f"The number is {cleanedNumber}")

# lists
print()
print(f"{'LISTS':_>40}")
for state in ["not pinin'","no more", "a stiff", "bereft of life"]:
    print(f"This parrot is {state}")

for i in range(0, 40, 5):
    print(f"i is {i}")

for i in range(1, 13):
    for j in range(1,13):
        print(f"{i} times {j} is {i*j}")
    print(f"{'':=>20}")
