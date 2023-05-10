//1. Написати функцію з одним аргументом, яка перевіряє чи є аргумент числом. Якщо так, то повертає чи є це цисло парним чи не парним. 
//Якщо аргумент не число - повертає пусту строку.
const isNumber = (number) => {
    if (number === +(number)) {
        return number % 2 ? ('Парне') : ('Не парне');
    }
    return '';
}

console.log(isNumber('123'));
console.log(isNumber(123));
console.log(isNumber(122));

//2. Написати функцію, яка починає перебирати числа від 1 до нескінченності і перевіряє чи є число простим 
//(просте число - те яке ділиться лише на 1 чи само на себе). Якщо просто число знайдене - воно додається до масиву. 
//Після пʼятого знайденого простого числа функція повинна повернути суму всіх пʼяти простих чисел в масиві.
function isSimpleNumber(arrNums) {
    let resultArr = [];
    arrNums.forEach((el) => {
        if ((el % 1) === 0 && (el % el) === 0) {
            resultArr.push(el);
            if (resultArr.length === 5) {
                return;
            }
        }
    })
    let res = 0;
    resultArr.forEach(el => res += el);
    return res
}

console.log(isSimpleNumber([2, 3, 4, 1, 3, 4, 5, 36, 0.123, 0.342]));

//3. Написати функцію з одним аргументом n, що є числом. Функція повинна повернути суму наступного ряду з n чисел 
//1 + 11 + 111 + 1111 + ...., де кожний елемент - число з постійно зростаючою кількістю одиниць.
//Наприклад:
//Ви передаєте в функцію фргумент 5.
//Функція рахує сумму для ряду виду: 1 + 11 + 111 + 1111 + 11111.
//В даному прикладі вона повинна повернути число 12345

const getModifiedSum = (number) => {
    let arrayOfOnes = [];
    for (let i = 0; i < number; i++) {
        let tmp = '';
        for (let j = 0; j <= i; j++) {
            tmp += '1';
        }
        arrayOfOnes.push(+(tmp));
        tmp = '';
    }
    let res = 0;
    arrayOfOnes.forEach(el => res += el)
    return res;
}

console.log(getModifiedSum(5));