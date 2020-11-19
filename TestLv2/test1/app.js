let array1 = [1,2,"a"];
let array2 = [1,3,"b"];
let array = [];
let a,b;
let arrayCheck  = [];
for (let i = 0; i < array1.length; i++) {
    array.push(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
    array.push(array2[i]);
}


for (let i = 0; i < array.length-1; i++) {
    for (let j = 1; j < array.length; j++) {
        if (array[i]==array[j]) {
            
        }

    }
    
}
// console.log(arrayCheck);
for (let i = 0; i < array.length; i++) {
    let check;
        if(arrayCheck.indexOf(array[i])==-1){
            arrayCheck.push(array[i]);
        } else {
            check = array[i]
        }
        for (let j = 0; j < array.length; j++) {
            if(array[j]==check){
                arrayCheck.splice(j,1);
            }            
        }
}
console.log(arrayCheck);