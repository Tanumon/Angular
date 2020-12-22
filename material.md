### Table of Contents
|  | [Links](bit.ly/nggit)|
|---- | ---------
|1 | [C#Concept](#Concept)|
|2 | [C#Tricks](#Tricks)|
|3 | [Question](#Question)|
|4 | [Snippid](#Snippid)|
||   [Exception](#Exception)|
||   [use of yeild](#use-of-yeild)|
||   [Exception](#Exception)|


---

# Concept

```C#
Public sealed class Singleton
{
    Private static readonly Singleton _instance = new Singleton();
}

```

---
# Tricks
```C#
```

---
# Question

## difference between "is" and "as" operators

"is" operator is used to check the compatibility of an object with a given type, and it returns the result as Boolean.

"as" operator is used for casting of an object to a type or a class.


## What is the difference between lambdas and delegates

They are actually two very different things.

Delegate is actually the name for a variable that holds a reference to a method or a lambda, and a lambda is a method without a permanent name.

Lambdas are very much like other methods, except for a couple subtle differences:

 * A normal method is defined in a "statement" and tied to a permanent name, whereas a lambda is defined "on the fly" in an "expression" and has no permanent name.
 * Lambdas can be used with .NET expression trees, whereas methods cannot.


 ## Equals

 System.Object.Equals()

 System.Object.ReferenceEquals()

 ===

 //last two// checks if two reference type variables
 //first// checks if two objects are equivalent.

 ## Interface
 Why can't you specify the accessibility modifier for methods inside the interface?

 In an interface, we have virtual methods that do not have method definition. All the methods are there to be overridden in the derived class. That's why they all are public.

---
# Snippid

## Exception
```c#
class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("Hello");
            }
            catch (ArgumentNullException)
            {
                Console.WriteLine("A");
            }
            catch (Exception)
            {
                Console.WriteLine("B");
            }
            finally
            {
                Console.WriteLine("C");
            }
            finally
            {
                Console.WriteLine("D");
            }
            Console.ReadKey();
        }
    }
```
// Error two finally block 

Hello

C

## use of yeild
```c#
IEnumerable<object> FilteredList()
{
    foreach( object item in FullList )
    {
        if( IsItemInPartialList( item )
            yield return item;
    }
}
```
Yield has two great uses:

It helps to provide custom iteration without creating temp collections.

It helps to do stateful iteration.


## Thread
```c#
static void Main()

{

    Thread t = new Thread (Print);

    t.Start();

    t.Join();

    Console.WriteLine ("Thread ended!");

}

static void Print()

{

    for (int i = 0; i < 1000; i++) Console.Write ("X");

}
```

1000 times X
Thread ended!
---