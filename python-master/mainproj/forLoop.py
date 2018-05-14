import string

for i in range(1,20):
    print(f"i is now {i}")

number ="9,332,372,036,854,775,807"
# for i in range(0, len(number)):
#     print(number[i])

cleanedNumber = ''
for i in range(0, len(number)):
    #if number[i] in '0123456789':
    if number[i] in string.digits:
        cleanedNumber = cleanedNumber + number[i]
newNumber = int(cleanedNumber)
print(f"The number is {newNumber:38d}")
print(f"The number is {newNumber:38.0f}")
print(f"The number is {newNumber:=38.0f}")
print(f"The number is {newNumber:t=38.0f}")
print(f"The number is {newNumber:38x}")
print(f"The number is {newNumber:38o}")
print(f"The number is {newNumber:38b}")
print(f"The number is {newNumber:0=38d}")
print(f"The number is {newNumber:x=38d}")
print(f"The number is {newNumber:038d}")


for i in range(0,10):
    print(i)

for i in range(0,10):
    print(i,end='')

#-----------------------------------------

number 