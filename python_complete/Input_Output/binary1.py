# with open("bin1", 'bw') as bin_file:
#         bin_file.write(bytes(range(17)))
#
# with open("bin1", 'br') as bin_file_read:
#     for b in bin_file_read:
#         print(b)

a = 65534  # FF FE
b = 65535  # FF FF
c = 65536  # 00 01 00 00
x = 2998302  # 00 2D C0 1E

with open("bin2", 'bw') as bin_file2:
    bin_file2.write(a.to_bytes(2, 'big'))
    bin_file2.write(b.to_bytes(2, 'big'))
    bin_file2.write(c.to_bytes(4, 'big'))
    bin_file2.write(x.to_bytes(4, 'big'))
    bin_file2.write(x.to_bytes(4, 'little'))

with open("bin2", 'br') as bin_file2:
    aa = int.from_bytes(bin_file2.read(2), 'big')
    bb = int.from_bytes(bin_file2.read(2), 'big')
    cc = int.from_bytes(bin_file2.read(4), 'big')
    xx = int.from_bytes(bin_file2.read(4), 'big')
    zz = int.from_bytes(bin_file2.read(4), 'little')

print(aa, end="\n")
print(bb, end="\n")
print(cc, end="\n")
print(xx, end="\n")
print(zz, end="\n")
