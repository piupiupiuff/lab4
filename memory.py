def modify_values(a, b):
    a.append(3)
    b = 42


def main():
    lst = [1, 2]
    num = 10
    print("Before function call:")
    print("List:", lst)
    print("Number:", num)

    modify_values(lst, num)

    print("After function call:")
    print("List:", lst)
    print("Number:", num)


if __name__ == "__main__":
    main()
