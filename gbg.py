import gc


class TestClass:
    def __init__(self, name):
        self.name = name
        print(f"Object {self.name} created.")


def main():
    obj1 = TestClass("obj1")
    obj2 = TestClass("obj2")
    obj3 = TestClass("obj3")
    del obj1
    del obj2
    del obj3
    gc.collect()
    print("Garbage collection done.")


if __name__ == "__main__":
    main()
