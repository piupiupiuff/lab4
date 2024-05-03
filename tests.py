import unittest
from memory import modify_values

class TestMemoryManagement(unittest.TestCase):
    def test_modify_values(self):
        lst = [1, 2]
        num = 10
        modify_values(lst, num)
        self.assertEqual(lst, [1, 2, 3])
        self.assertEqual(num, 10)

    def test_stack_vs_heap(self):
        a = 10
        b = [1, 2, 3]
        c = "Hello"
        d = {'a': 1, 'b': 2}
        self.assertEqual(a, 10)
        self.assertIsInstance(b, list)
        self.assertIsInstance(c, str)
        self.assertIsInstance(d, dict)

    def test_garbage_collection(self):
        import gc
        class TestClass:
            def __init__(self, name):
                self.name = name

        obj1 = TestClass("obj1")
        obj2 = TestClass("obj2")
        obj3 = TestClass("obj3")

        del obj1
        del obj2
        del obj3


        gc.collect()
        remaining_objects = [obj for obj in gc.get_objects() if isinstance(obj, TestClass)]
        self.assertEqual(len(remaining_objects), 0)


if __name__ == "__main__":
    unittest.main()
