i = 0
count = 0
while i < 10:
    if i%2 == 0:
        i = i + 1
        count = count + 1
        continue
    print(i)
    i = i + 1
print("After loop")
print("In loop it called continue ",count,"number of times")
