// **INSERTION SORT*************************************************************
// builds up the sort by gradually creating a larger portion which is always sorted
// instead of finding the largest or smallest element, it takes an element and places it in the correct position in the sorted portion

nums = [2,1,9,76,4]
// lets assume our array is somewhat sorted. what happens to 4?
// [1,2,9,76,4]

const insertionSort = (arr) => {
  // we are assuming the first value is automatically sorted so we start at array index 1
  for(var i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    // now we just want to work backwards ONLY if the current value is less than the previous element
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // swap
      arr[j + 1] = arr[j]
      console.log(arr);
    }
    // after the loop finishes, we have found the correct spot for our current value. we then swap that element for the current value. must be j + 1 so that we don't replace the number that's supposed to go to the left of current val
    arr[j + 1] = currentVal
  }
  return arr
}
insertionSort(nums)

// **SELECTION SORT*************************************************************
// instead of placing large values into sorted position at the end of the array, we are sorting smaller pieces of data at the beginning of the array.
// go all the way throught the array, looking for the smallest value, then putting that value at the front of the array
let nums = [34,22,10,19,17]
const selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    // set the minimum as the index of the first element in the array since it technically is the smallest value you've seen so far
    let min = i
    // compare the "min" to the rest of the array to find the smallest value
    for(let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[min]) {
        // find the index of the lowest value in the array
        min = j
      }
    }
    // if a swap needs to happen...
    if(i !== min) {
      // then swap!
      let temp = arr[i]
      // the smallest values index is stored in "min"
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

selectionSort(nums)

// **BUBBLE SORT****************************************************************
// kind of a fun one to know! not very efficient but it is important to know whats happening.
// when sorting by numbers, the larger numbers "bubble" to the top

let nums = [3,6,6,3,12,87,5,9]

const bubbleSort = (arr) => {
  // many JS sorting algorithms have some sort of "swapping" functionality
  // helper method that "swaps"
  const swap = (arr, idx0, idx1) => {
    let temp = arr[idx0]
    arr[idx0] = arr[idx1]
    arr[idx1] = temp
  }

  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      // is the current index larger than the next index? yes? then swap
      if(arr[j] > arr[j + 1]) {
        // console.log(arr, arr[j], arr[j + 1])
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

bubbleSort(nums)

// **MERGE SORT*****************************************************************
//  merge sort exploits the fact that arrays of 0 or 1 value are already sorted
// decomposes a larger array into smaller and smaller arrays. all the way down to single- value arrays.

// In order to implement merge sort, it's useful to first create a function that
// merges two sorted arrays. This helper function should also return a sorted
// array of all elements of previous 2 arrays:
let merge = (arr1, arr2) => {
  // create an empty array, take a look at smallest values of input arrays
  let results = []
  // create some pointers to targets elements in the arrays
  let i = 0
  let j = 0
  // while there are still values we havent looked at in both arrays...
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      // 1. if the value in the first array is smaller than the value in ther
      // second array, push the value from the first array into the results, and
      // move onto the NEXT value in the first array
      results.push(arr1[i])
      i++
    } else {
      // 2. if the value in the first array is LARGER than the value in the
      // second array, push the value of the second array into the results, and
      // move onto the next value in the second array
      results.push(arr2[j])
      j++
    }
  }
  // console.log(results);
      // 3. Merge them as far as we can until we hit the end of one of the arrays. Once we exhaust one array, push all remaining values from the other array.
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  console.log(results);
  return results
}
// console.log(merge([1,10,50], [2,14,99,100]))

let nums = [10,24,76,73,72,1,9]
const mergeSort = (arr) => {
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // 1. Break up array in halves until you have 1 element or empty arrays. It is
  // recommended to use .slice()
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  // 2. With smaller arrays, use merge function until you return the full length
  // of the initial array
  return merge(left, right)
}
mergeSort(nums)


// **RECURSION******************************************************************

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// console.log(fib(6));
