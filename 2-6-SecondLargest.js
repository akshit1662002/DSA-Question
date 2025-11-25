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
