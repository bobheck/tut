a = b = c = d = 12
print(c)
a, b = 12, 13
print(a, b)

print("a: {}".format(a))
print("b: {}".format(b))
a, b = b, a
print("a: {}".format(a))
print("b: {}".format(b))