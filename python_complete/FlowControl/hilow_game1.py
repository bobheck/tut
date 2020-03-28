import random

max = 1000
answer = random.randint(1, max)
# print(answer) # TODO: Remove after testing
guess = None
print("Enter a number between 1 and {}: ".format(max))

while guess != answer:
    guess = int(input())

    if guess == 0:
        break
    elif guess == answer:
        print("Well done, you guessed it")
    elif guess < answer:
        print("Guess higher")
    else:
        print("Guess lower")
