import sys


def main():
    a = 10
    b = [1, 2, 3]
    c = "Hello"
    d = {'a': 1, 'b': 2}

    print("Size of 'a' (int):", sys.getsizeof(a))
    print("Size of 'b' (list):", sys.getsizeof(b))
    print("Size of 'c' (str):", sys.getsizeof(c))
    print("Size of 'd' (dict):", sys.getsizeof(d))


if __name__ == "__main__":
    main()
