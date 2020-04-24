# Parts of the JS file:

## Insertion Sort

Builds up the sort by gradually creating a larger portion which is always sorted. Instead of finding the largest or smallest element, it takes an element and places it in the correct position in the sorted portion.

## Selection Sort

Instead of placing large values into sorted position at the end of the array, we are sorting smaller pieces of data at the beginning of the array. It goes all the way through the array, looking for the smallest value, then puts that value at the front of the array, so on and so forth.

## Bubble Sort

Compares each value to the bext value, then swaps positions accordingly. Larger values "bubble" to the end of the array. Works well with nearly-sorted arrays.

## Merge Sort

Merge sort exploits the fact that arrays of 0 or 1 value are already sorted. It recursively decomposes a larger array into smaller and smaller pieces, all the way down to single- value arrays. It then starts merging those arrays in sequential order, resulting in a sorted final array.

## Example of Recursion "What is the (n)th value of the fibonacci sequence?"

A process/function that calls itself. Basically performing small actions over and over on smaller pieces of information until you reach and end case (or base case). It can sometimes be cleaner than iteration.

### The Call Stack

A stack is a data structure. Think of it like a stack of paper. 
- When a function is invoked, it is placed on the top of the call stack (push). Like a stack of papers on my desk, when I have a new sheet, I place it on top.
- When JS sees a return keyword or a function ends, the complier will remove the top item of the stack (pop)
- When we write recursive functions, we keep pushing the same function over and over onto the call stack
- The call stack has to stop somewhere! If it doesn't, it's something called a stack overflow (boom!)

Recursive functions invoke themselves with a _different input_ over and over until a _base case_ is reached.

### Here's a story:

Martin was a young boy who was given a list of numbers. He was tasked with asking a wise dragon if any of the numbers were odd (education in medieval times was lacking). The numbers were as follows:

`[32, 16, 6]`

When he got to the dragon and asked if any of the numbers were odd, the dragon replied "I'll only tell you if the FIRST number is odd!" Martin got an idea! 

Martin said, "Wise dragon, is this number odd?" And showed the dragon `32`. The dragon replied, "no."
Then he asked, "How about this one?" And showed the dragon `16`. The dragon again said, "no."
Finally, Martin asked, "Ok dragon, what about this one?" Showing `6`, the dragon said, "no."

Martin felt like a real hotshot and said, "Hey dragon, i got you to tell me if the whole list was odd or no! I tricked you!" The dragon smiled and said, "Great job boy, you've discovered recursion."

In the example above, Martin called his own inner `askIfOdd` function over and over, using _different inputs_ each time, until a _base case_ of running out of numbers to ask about. 
