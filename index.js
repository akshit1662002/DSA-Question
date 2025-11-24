// WAF to search for an element in an array and return index , if the element is not present then just return -1 
function findelement(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            return i
        }
    }
    return -1
}
const result = findelement([11, 211, 139, 404, 55, 96, 79, 81, 99], 139)
console.log("result", result)



//WAF that return the number of negative number in an array 
function negativeN(arr2) {
    let count = 0
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < 0) {

            count++

        }
    }
    return count

}

const result2 = negativeN([1, -1, 2, -2, 3, -3, 4, -4])
console.log("result2", result2)