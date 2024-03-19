//1. Verilmiş ədədlır siyahısındaki ədədlərin cəmini tapın qaytaran function

function sum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}
console.log(sum([1,2,3,4,5]))

//2.Verilmiş arraydəki ən böyük ədədi tapın qaytaran function

function max(numbers){
    let max=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(max<numbers[i]){
            max=numbers[i]
        }
    }
    return max
}
console.log(max([1,2,3,4,5,8,7,9]))

//3.Verilmiş ədədin rəqəmləri cəmini tapıb qaytaran function
123
function sumNum(num){
    let sum=0;
    while(num>0)
    {
      let digit=num%10;
        sum+=digit;
        num=(num-digit)/10;
    }
    return sum    
}
console.log(sumNum(123))

//4.Verilmiş ədədlər siyahısındaki ən çox təkrarlanan ədədi tapıb qaytaran function
function findMostRepeat(numbers) {
    let count = {}; 
    let mostRepeatNum;
    let maxCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        count[num] = (count[num] || 0) + 1; 
        if (count[num] > maxCount) {
            mostRepeatNum = num; 
            maxCount = count[num];
        }
    }
    return mostRepeatNum;
}
let numbers = [1,5,8,9,4,7,9,3,6,7,7];
console.log(findMostRepeat(numbers)); 

