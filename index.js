const input = document.querySelector('.wrapper__form_input');
const numbers = document.querySelector('.wrapper__form_array');


function sendArray(){
    const array = input.value.split('');
    let doubleNumbers = new DoubleNumbers(array);
    console.log(doubleNumbers.find(array));
    numbers.innerHTML = doubleNumbers.find(array);
}

class DoubleNumbers {
    constructor(arr){
        this.arr = arr;
    }
    find(){
        const obj = {};
        const newArr = [];
        this.arr.forEach((e) => {
            if(obj[e] === undefined){
                obj[e] = 0;
            }
            obj[e]++;
            if(obj[e] > 1){
                newArr.push(e);
            }
        })
        return newArr;
    }
}
