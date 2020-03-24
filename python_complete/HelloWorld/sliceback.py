

letters = "abcdefghijklmnopqrstuvwxyz"
# abcdefghijklmnopqrstuvwxyz
# 01234567890123456790123456
#           1        2

backwards = letters[25:0:-1]
print(backwards)
backwards = letters[25::-1]
print(backwards)
backwards = letters[::-1]
print(backwards)

#challenge
#using letters:
# create a slice qpo
# create a slice edcba
# create a slice to produce the last 8 characters in reverse order
qpo = letters[16:13:-1]
print(qpo)
edbca = letters[4::-1]
print(edbca)
last8 = letters[:17:-1]
print(last8)

#python idoms
print("\nPython Idoms")

reversing_a_sequence = letters[::-1]
print(reversing_a_sequence)

last_item = letters[-1:]
print(last_item)

first_item = letters[:1]
print(first_item)

# first_item = letters[0] would produce an error if sequence is empty, letters[:1] still works
