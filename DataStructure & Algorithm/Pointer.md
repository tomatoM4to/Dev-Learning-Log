## Memory Addresses
Every location in computer memory has a unique address. All variables or objects occupy memory and have addresses, but constants do not occupy memory and do not have addresses.

## Pointer
A Pointer variable holds the address of another variable.

## CPU and Memory Interaction
The CPU utilizes memory addresses to access and manipulate the data stored in the computer's memory.

## Applications
Pointers are extremely useful in scenarios like dynamic memory management, implementing complex data structures, and for efficient handling of arrays and strings.

***
## Declare Pointer
```c++
char ch = 'a'; // declare a char variable named ch (1 byte)
char* p; // declare a pointer variable (8 byte)
char** pp; // declare a double pointer variable (8 byte)
p = &ch; // storing a address of ch
pp = &p; // storing a address of p

```
<span style="color:red">**CF.**</span> A Pointer variable is also variable because it has an address. All the pointer variables have the same size, as a computer uses a single address system and all address are of the same size. If a system uses a 64-bit address system, then the size of a pointer variable is 8 bytes.

|name| data type | same expression |
|----|-----------|-----------------|
| ch | char      | *p, **pp        |
| p  | char*     | *pp, &ch        |
| pp | char**    | &p              |


***
## Array and Pointer
The address of the first element of an array is the same as the name of the array. Consequently, the name of the array can be used like a pointer.
```c++
int A[5] = {1, 2, 3, 4, 5};
bool test = a == &a[0];
cout << test; // output: 1
```

***

## Function and Pointer
A pointer can be used as a parameter in a function.
```
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int a = 1, b = 2;
    swap(&a, &b);
    cout << a << " " << b; // output: 2 1
    return 0;
}
```

***

## Object and pointer
There is not much difference from the one above, but there is a convenient notation "->"

```
struct MyStruct {
    int test = 1;
};

int main() {
    MyStruct myStruct1, *myStruct2;
    myStruct2 = &myStruct1;

    cout << myStruct1.test << "\n"; // output: 1
    myStruct2->test = 2;
    cout << myStruct1.test << "\n"; // output: 2
    (*myStruct2).test = 3;
    cout << myStruct1.test << "\n"; // output: 3
    return 0;
}
```
<span style="color:green">**RESULT.**</span> myStruct1.test == myStruct2->test == (*myStruct2).test

***
## Call-by-value and Call-by-reference
call-by: The method of passing parameters to a function<br><br>
call-by-value:  Parameters are deeply copied within the function  
<span style="color:green">**Advantages.**</span>  Ensures isolation of the original variable   
<span style="color:red">**Disadvantages.**</span>  Increases memory usage<br><br>
call-by-reference: This method uses direct references to the original variables  
<span style="color:green">**Advantages.**</span>  Reduces memory usage  
<span style="color:red">**Disadvantages.**</span> The original variable is not isolated, allowing modifications

```
struct MyStruct {
    int test = 1;
};

void callByValue(MyStruct m) {
    m.test = 2;
}

void callByReference(MyStruct* m) {
    m->test = 2;
}

int main() {
    MyStruct myStruct;

    cout << myStruct.test << "\n"; // output: 1
    callByValue(myStruct);
    cout << myStruct.test << "\n"; // output: 1
    callByReference(&myStruct);
    cout << myStruct.test << "\n"; // output: 2
    return 0;
}
```

***

## Self-referential class
A self-referential class is a class that includes a member variable which is a pointer to an instance of itself.
```
struct ListNode {
    char data[10];
    ListNode* link;    
}
```
***
## Function Pointer
A function pointer is a type of pointer that holds the memory address of a function. It is commonly used when you want to pass a function as a parameter.

```


```
***

## Pointer calculation
```
int array[5] = {1, 2, 3, 4, 5};
int* p;
p = &array[2];

cout << p << "\n";
cout << *p << "\n";
cout << *p++ << "\n";
cout << ++*p << "\n";
cout << (*p)++ << "\n";
```
