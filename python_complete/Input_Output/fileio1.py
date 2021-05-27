
# text = open("c:\\tut\\python_complete\\Input_Output\\sample.txt", 'r')

print("=" * 43 + " using for")
text = open("sample.txt", 'r')  # 'r' = read only

for line in text:
    if "jabberwock" in line.lower():
        print(line, end='')  # end='' prevents double spacing by repeating newline
text.close()

print("=" * 43 + " using with and for")
# better to use with. auto closes file, even if an error occurs
with open("sample.txt", 'r') as jabber:
    for line in jabber:
        if "JAB" in line.upper():
            print(line, end='')

# ===============================
print("=" * 43 + " using readline")

with open("sample.txt", 'r') as jabber:
    line = jabber.readline()
    while line:
        print(line, end='')
        line = jabber.readline()

print("=" * 43 + " using readlines without while")

with open("sample.txt", 'r') as jabber:
    lines = jabber.readlines()
    print(lines)  # this prints a list on a single line

for line in lines:
    print(line, end='')

print("=" * 43 + " printing reverse ")
for line in lines[::-1]:
    print(line, end='')

print("=" * 43 + " using read in reverse")
with open("sample.txt", 'r') as jabber:
    lines = jabber.read()  # read reads entire file into a single string
    print("=" * 43 + " printing lines from read")
    print(lines)
    print("=" * 43 + " printing lines from read using line in lines[::-1]")
for line in lines[::-1]:
    print(line, end='')

