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

//WAF that return the number of largest number in an array 
function maxnumber (arr3){
    let max = arr3[0]
    // also use --infinity or arr[0] 
    for( i = 0 ; i< arr3.length ; i++){
        if(arr3[i] > max){
            max = arr3[i]
        }
    }
    return max
}

const result3 = maxnumber([99 , 101 , 210 ,1,2,3])
console.log( "result",result3);


//WAf that return the minimum number in an array 

function minNumber (arr4){
    let min = arr4[0]
    for(i = 0 ; i<arr4.length ; i++){
        if(arr4[i] < min){
            min = arr4[i]
        }
    }
    return min
}

const result4 = minNumber([99 , 101 , 210 ,-1,2,3])
console.log( "result",result4);


function secondLargest(arr5){
    let firstLarge = -Infinity;
    let secondLarge = -Infinity
    for(let i=0 ; i<arr5.length  ; i++){
        if(arr5[i] > firstLarge)
        {
            secondLarge = firstLarge
            firstLarge = arr5[i] 
       
        }
        else if (arr5[i] > secondLarge){
            secondLarge = arr5[i]
        }

    }
    return secondLarge
}

const result5 = secondLargest([1,2,3,4])
console.log("second large" , result5);
