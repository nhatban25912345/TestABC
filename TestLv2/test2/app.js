let array = [
    {
        name: "Th01",
        points:99,
        GD:45
    },
    {
        name: "TH02",
        points:75,
        GD:39,
    },
    {
        name: "TH03",
        points:60,
        GD:29
    }
]
console.log(array[0].points);

let tg;

for (let i = 0; i < array.length-1; i++) {
    for (let j = 1; j < array.length; j++) {
        if (array[i].points<array[j].points) {
            tg = array[i];
            array[i]=array[j];
            array[j]=tg;
        }    
    }    
}
console.log(array);
for (let i = 0; i < array.length; i++) {
    array[i].positon = i+1
}
console.log(array);

