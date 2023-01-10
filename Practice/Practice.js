
// getting number & obj value of an array.
const arr = [1, 2, 3, 4, 5, {name: "raja", age: 30}, {name: "samir", age: 29}, () => console.log("hello everyone"),];
for (var i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "number") {
        console.log(arr[i]);
    }
    else if (typeof(arr[i]) == "object") {
        console.log(arr[i].name);
        console.log(arr[i].age);
    }
    else {
        console.log(arr[i]());
    }
}

// arrow function.
const add = (num1, num2) => num1 + num2;
const arrowFunc = add(2, 3);
console.log(arrowFunc);


// map function is used for like enhance loop. getting every element
const resultArr = (arr) => {
    const result = arr.map((num) => num * 10);
    return result;
}
const currArr = resultArr([1, 2, 3, 4, 5]);
console.log(currArr);


// getting obj value
const salas = (arr) => {
    const sutta = arr.map((obj) => obj.name);
    return sutta;
}
const newMap = salas([{name: "sagar", age: 20}, {name: "tikka", age: 25}, {name: "rahul", age: 30}]);
console.log(newMap);

// using map , but without function
const bisu = [{name: "sagar", age: 20}, {name: "tikka", age: 25}, {name: "rahul", age: 30}];
const monu = bisu.map((obj) => obj.age);
console.log(monu);

// filter is used for getting boolean value & return element if true.
const dije = [21, 24, 33, 35, 37, 40, 52, 56, 57, 67];
const raj = dije.filter((num) => num % 2 !== 0);
console.log(raj);


// this is for each loop
const biga = [21, 24, 33, 35, 37, 40, 52];
biga.forEach((gi) => console.log(gi));

//this is for index
const idx = biga.map((num, idx) => idx);
console.log(idx);

//this is for array element sum/anything
const sumEle = biga.reduce((num, sum) => num + sum, 0);
console.log(sumEle);

//this is for int arr sorting
const hiko = [9, 2, 12, 5, 7, 10];
hiko.sort((a, b) => a - b);
console.log(hiko);


// this is for add first, last, dFirst, dLast in an array
const darr = [1, 2, 3];

darr.push(4);
console.log(darr); // [1, 2, 3, 4]

const dLast = darr.pop();
console.log(dLast); // 4

console.log(darr); // [1, 2, 3]

const dFirst = darr.shift();
console.log(dFirst); // 1
console.log(darr); // [2, 3]

darr.unshift(1);
console.log(darr); // [1, 2, 3]

console.log(darr.toString()); // "1,2,3"

console.log(darr.join(" ")); // "1 2 3"

//square root array
const nwg = [4, 9, 16, 25];
const nwn = nwg.map(Math.sqrt)

console.log(nwn);


// this is for concating array
const arrC1 = ["Cecilie", "Lone"];
const arrC2 = ["Emil", "Tobias", "Linus"];
const arrC3 = ["Robin"];

const children = arrC1.concat(arrC2, arrC3); 

document.getElementById("demo").innerHTML = children.join(" ");

