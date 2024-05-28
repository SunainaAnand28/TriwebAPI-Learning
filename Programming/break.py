marks = [1,2,34,43,22,54]
breakcalled = 0

for i in marks:
    if i%11==0:
        breakcalled = 1
        break
    print(i)

if breakcalled == 1:
    print("loop is breaked")
else:
    print("loop is completed")


