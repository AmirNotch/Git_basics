// var a = 99;
// var b = 100;

// const pravda = a > b 
//                     ? 
//                     a === b 
//                             ? 
//                             "1 часть" 
//                             : 
//                             "2 часть" 
//                     : 
//                     a !== 99 
//                             ? 
//                             "3 часть" 
//                             : 
//                             "4 часть";

// switch (pravda) {
//     case "1 часть":
//         console.log("1 часть");
//     break;

//     case "2 часть":
//         console.log("2 часть");
//     break;
    
//     case "3 часть":
//         console.log("3 часть");
//     break;

//     case "4 часть":
//         console.log("4 часть");
//     break;
// }



// if(pravda) {
//     console.log("Да это Тип String")
// }
// else {
//     console.log("Нет это не тип String")
//     console.log(pravda)
// }


// let operand1 = 100;
// let operand2 = 0;



let sign = "";

switch (sign) {
    case "*": 
        if(operand1 == 0 || operand2 == 0) console.log(0);
        else console.log(operand1*operand2)
    break;

    case "/":
        if(operand1 == 0 || operand2 == 0) console.log(0);
        else console.log(operand1/operand2);
    break; 
    
    case "-":
        console.log(operand1-operand2)
    break;

    case "+":
        console.log(operand1+operand2)
    break;
}


// let pen1 = 20;
// let pen2 = 10;

// console.log(`pen1 = ${pen1}`);

// var pen = 30;
// console.log(pen)

// var pen = 50;
// console.log(pen)

// const box = "shahrom"
// // const box = "shahrom"

// pen1 = "Hello";
// console.log(`pen1 = ${pen1 + " " + box}`);



// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
//   const rndInt = randomIntFromInterval(1, 19)
//   console.log(rndInt)

let month = 12;
let season
switch (month) {
    case 12:
    case 1:
    case 2:
        season = "зима"
        break;

    case 3:
    case 4:
    case 5:
       season = "весна"
       break;

    case 6:
    case 7:
    case 8:
        season = "лето"
        break;

    case 9:
    case 10:
    case 11:
        season = "осень"
        break;

    default:
        season = "неверное число месяца"
}

// console.log(`номер числа пренадлежит сезону = ${season}`)

// let number = 999999;

// let result = (number % 2 === 0) ? "чётное" : "не чётное";

// console.log(`число ${number} равно ${result}`)

// let num1 = 48
// let num2 = 98
// let num3 = 0

// let max = num1; 
// if(num2 > max) {
//     max = num2
// }
// if(num3 > max) {
//     max = num3
// }
// console.log(max)

let incriment = 99;

incriment++; // Инкримент 1
++incriment; // Инкримент 2

incriment--; // Дикримент 1
--incriment; // Дикримент 2

const books = [
                "Harry Potter","Harry Potter 2","Harry Potter 3",
                1, true, "Harry Potter 6",
                "Harry Potter 7"
            ];

const name1 = "Hobbit";
const name2 = "King Of The Rings";

if(name1 == "Hobbitt") {
    books[5] = name2;
}
else {
    books[6] = name1;
}

// console.log(books)

const biographyPeople = [
    ["Batman", 10, false],
    ["Sherlok Holmes", 18, false], 
    ["Kung Fu Panda 4", 6, true]
]; 

biographyPeople[2] = ['it',18, false];


biographyPeople[0];

const fuelEngine = ["BMW", 5, true];
const electricEngine = ["Tesla", 4, false];
const rocketEngine = ["Ruslan", 65, true];

const engine = [fuelEngine, electricEngine, rocketEngine];


// console.log(engine[1][0]);



// let clasCount = 5;

// while(clasCount < 12){
//     if(clasCount == 13){
//         clasCount = clasCount + 1
//         break;
//     }

//     console.log(clasCount);

//     clasCount = clasCount + 1;

//     if (clasCount == 12){
//         console.log("Класс заполнен");
//     }
// }

// const laptop = ["HP", "Lenovo", "Samsung", "Apple", "Asus", "Dell", "Huawei", "Xiaomi"];
// const brands = [
//     "Nike",
//     "Apple",
//     "Samsung",
//     "Amazon",
//     "Google",
//     "Adidas",
//     "Microsoft",
//     "Sony",
//     "Toyota",
//     "BMW",
//     "Mercedes-Benz",
//     "Coca-Cola",
//     "McDonald's",
//     "Disney",
//     "Louis Vuitton",
//     "Intel",
//     "IBM",
//     "Facebook",
//     "Twitter",
//     "Instagram",
//     "YouTube",
//     "Tesla",
//     "Pepsi",
//     "Ford",
//     "Honda",
//     "Audi",
//     "Lego",
//     "Volkswagen",
//     "Nissan",
//     "Uber",
//     "Airbnb",
//     "Netflix",
//     "PayPal",
//     "Sony",
//     "Canon",
//     "Dell",
//     "HP",
//     "Lenovo",
//     "Panasonic",
//     "Bose",
//     "Gucci",
//     "Rolex",
//     "Chanel",
//     "Hermès",
//     "Prada",
//     "Zara",
//     "H&M",
//     "Gap",
//     "Under Armour",
//     "Lululemon",
//     "Starbucks",
//     "Dunkin'",
//     "Burger King",
//     "KFC",
//     "Pizza Hut",
//     "Subway",
//     "Walmart",
//     "Target",
//     "IKEA",
//     "Costco",
//     "Home Depot",
//     "Lowe's",
//     "Best Buy",
//     "Whole Foods",
//     "Trader Joe's",
//     "Kellogg's",
//     "Nestlé",
//     "Ferrero Rocher",
//     "Hershey's",
//     "Lindt",
//     "Cadbury",
//     "Guinness",
//     "Heineken",
//     "Budweiser",
//     "Corona",
//     "Absolut",
//     "Jack Daniel's",
//     "Coca-Cola",
//     "Pepsi",
//     "Red Bull",
//     "Monster Energy",
//     "Gatorade",
//     "Powerade",
//     "Fanta",
//     "Sprite",
//     "Mountain Dew",
//     "Dr Pepper",
//     "7UP",
//     "Tropicana",
//     "Minute Maid",
//     "Ocean Spray",
//     "Vitaminwater",
//     "Arizona",
//     "Snapple",
//     "Sunkist",
//     "Welch's"
//   ];

// let count = 0;

// let logic = true;

// while(logic){
//     console.log("-");
//     count += 1;
//     if(count == 3) logic = false;
// }


// for (let i = 0; i < brands.length;i++) {
//     console.log(brands[i]);
// }


// let initialPrice = 100;
// const dailyIncreasePercentage = 10;
// const days = 7;

// // Применяем увеличение цены в течение 7 дней
// for (let day = 0; day < days; day++) {
//     initialPrice += initialPrice * dailyIncreasePercentage / 100;
// }



// // let count1 = 0;
while (count1 < days){    
    initialPrice += initialPrice * dailyIncreasePercentage / 100;
 count1 +=1
 count1 = count1+1
}

// // console.log("Цена товара через 7 дней будет составлять:", initialPrice.toFixed(1), "рублей");


// var x = 1;

// if(true) {
//     var x = 2;
//     console.log(x);
// }
// console.log(x);



// var number = [1,2,3,4,5]
// var countvar = [7,2,1,9,25]
// var numbers = [...number, ...countvar];
// console.log(numbers);


// let clasCount = 0;

// let boolion = true;

// while(clasCount < 12){
//     if(clasCount == 13){
//         clasCount = clasCount + 1
//         break;
//     }

//     clasCount = clasCount + 1;

//     console.log(clasCount);

//     if (clasCount == 12){
//         console.log("Класс заполнен");
//         boolion = false;
//     }
// }



// let initialPrice = 100;
// const dailyIncreasePercentage = 10;
// const days = 7;

// // Применяем увеличение цены в течение 7 дней
// for (let day = 1; day <= days; day++) {
//     initialPrice = initialPrice + initialPrice * dailyIncreasePercentage / 100;
//                     // 100      +     100      *        10               / 100
//                                 //    (             10                     )                  
//                 //        100   +             10
// }


// console.log("Цена товара через 7 дней будет составлять:", initialPrice.toFixed(2), "рублей");



function CleanYourTeeth() {
    console.log("Me cleaning my Teeth");
}

CleanYourTeeth();


// let factorialNumber = 1;

// function FactorialNumber(n){
//     if(n <= 0){
//         console.log("Finish");
//         console.log(factorialNumber);
//         return;
//     }

//     console.log(n);

//     factorialNumber *= n;
//     FactorialNumber(n - 1);
// }

// FactorialNumber(9662);

// function Sravnenie(masha, katy){
//     if (masha > katy){
//         return Hello();
//     }
//     else{
//         return GoodBye();
//     }
// }

// function Hello(){
//     return "Hello";
// }

// function GoodBye() {
//     return "GoodBye"
// }

// let boolean = Sravnenie(24, 24);

// console.log(boolean);


function Reverse(number){
    // Преобразовываем число в строку
    number = String(number);

    number = number.split('').reverse().join('')

    number = Number(number); 

    return number;
}
console.log(Reverse(12345)+1)


function isPalindrome(input){
    input = String(input);
    input = input.replace(/\s+/g, '').toLowerCase();

    for (let i = 3; i < input.length / 2; i++) {
        if(input[i] != input[input.length - 1 - i]){ 
           console.log(input) 
           return false
        }    
    }
    console.log(input) 
    return true  
}
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Аргентина манит негра")); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("topot")); // True
console.log(isPalindrome("Valav")); // true


let name = "А роза упала на лапу Азора";

console.log(name[name.length - 1 - 3]); // true
