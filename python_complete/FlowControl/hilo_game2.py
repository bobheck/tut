low = 1
high = 1000
guesses = 0

print("Please think of a number between {} and {}".format(low, high))
input("Press enter to start")

while True:
    print("\tGuessing in the range of {} to {} ".format(low, high))
    guess = low + (high - low) // 2
    guesses += 1
    highlow = input("Is it {}? Enter h for higher, l for lower,"
                    " or c for correct: "
                    .format(guess)).casefold()

    if highlow == "c":
        print("I guessed it in {} guesses".format(guesses))
        break;
    elif highlow == "h":
        low = guess + 1
        continue
    elif highlow == "l":
        high = guess - 1
        continue
    else:
        print("Please enter h, l, or c")
