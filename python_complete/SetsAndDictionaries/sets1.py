# sets are unique and unordered

# two ways to create a set
# 1 braces
farm_animals = {"sheep", "cow", "hen"}
print(farm_animals)

for animal in farm_animals:
    print(animal)

print("=" * 50)

# 2 pass a list to the set constructor
wild_animals = set(["lion", "tiger", "panther", "deer", "bison"])
print(wild_animals)

for animal in wild_animals:
    print(animal)

print("=" * 50)

farm_animals.add("horse")
wild_animals.add("eagle")

print(farm_animals)
print(wild_animals)

print("=" * 50)

empty_set = set()
empty_set2 = {}
empty_set.add("a")
# empty_set2.add("b") won't work
# {} creates an empty dictionary, not set
even = set(range(0, 40, 2))
print(even)
print(len(even))

squares_tuple = (4, 9, 16, 25)
squares = set(squares_tuple)
print(squares)
print(len(squares))
print("=" * 50)

print('even.union(squares)')
print(even.union(squares))
print('len(even.union(squares))')
print(len(even.union(squares)))
print("=" * 50)
print('even.intersection(squares)')
print(even.intersection(squares))
print('even & squares')
print(even & squares)
print("=" * 50)

print('sorted(even)')
print(sorted(even))

print("=" * 50)
print('sorted(squares)')
print(sorted(squares))

print("=" * 50)
print('sorted(even.difference(squares))')
print(sorted(even.difference(squares)))

print("=" * 50)
print("even - squares")
print(sorted(even - squares))

print("=" * 50)
print('sorted(squares.difference(even))')
print(sorted(squares.difference(even)))

print("=" * 50)
print('sorted(squares - even)')
print(sorted(squares - even))

print("=" * 50)
print('sorted(even)')
print(sorted(even))
print('squares')
print(squares)
even.difference_update(squares)
print('even.difference_update(squares)')
print('sorted(even)')
print(sorted(even))

print("=" * 50)
print('symmetric difference -- all elements in either, but not both, sets')

even = set(range(0, 40, 2))
print('sorted(even)')
print(sorted(even))
squares_tuple = (4, 9, 16, 25)
squares = set(squares_tuple)
print('sorted(squares)')
print(sorted(squares))
print('sorted(even.symmetric_difference(squares))')
print(sorted(even.symmetric_difference(squares)))
print('sorted(squares.symmetric_difference(even))')
print(sorted(squares.symmetric_difference(even)))

print("=" * 50)
squares.discard(4)
squares.remove(16)
squares.discard(8)   #no error, discard does nothing
print(squares)
# squares.remove(8) #error if set does not contain arg

even = set(range(0, 40, 2))
squares_tuple = (4, 16)
squares = set(squares_tuple)

if squares.issubset(even):
    print("squares is a subset of even")
if even.issuperset(squares):
    print("even is a superset of squares")

# frozen set is immutable

even = frozenset(range(0,100,2))
print(even)
# even.add method does not exist
