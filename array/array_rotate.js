/**
 * Array operations
 * Rotate array elements with number of positions
 * 
 */
const readline = require("readline");

// Left rotate method
const leftRotate = (arr, d, n) => {
    for (let i = 0; i < d; i++) {
        leftRotateByOne(arr, n);
    }
}

const leftRotateByOne = (arr, n) => {
    temp = arr[0]

    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[n - 1] = temp
}

const printArray = (arr, n) => {
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

// Creating array object
arr = [1, 2, 3, 4, 5, 6, 7];

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.question("Enter the elements to rotate:\t", (dim) => {
    if(dim > arr.length){
        console.log("Dim can not be more than array size!");
        prompt.close();
        return;
    }
    leftRotate(arr, dim, 7);
    printArray(arr, 7);
    prompt.close();
})
// leftRotate(arr, dim, 7);

// printArray(arr, 7);