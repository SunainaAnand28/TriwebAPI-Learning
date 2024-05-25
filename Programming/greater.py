n1 = int(input("Enter first number"))

n2 = int(input("Enter second number"))

n3 = int(input("Enter third number"))

if n1 > n2:
    if n1 > n3:
        print("n1 is greatest")
    else:
        print("n3 is grreatest")
else:
    if n2 > n3:
        print("n2 is greatest")
    else:
        print("n3 is greatest")


