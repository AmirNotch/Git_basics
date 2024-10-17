function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while(low < high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];

        if(guess === target) {
            return mid;
        }
        if(guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return "элемент не найден"; // если элемент не найден
}





// array = [-10, 100, -20, -60, 144]
// console.log(array.sort());
// console.log(binarySearch(array, 101));


// var salesData = [
//     { customer: "ООО 'Созвездие'", category: "Электроника", date: "2023-05-12", salesManager: "Андреев А.А.", region: "Москва", purchase: 32000,   product: "Ноутбук"},
//     { customer: "ИП 'Алмаз'", product: "Смартфон", category: "Электроника", date: "2023-09-28", salesManager: "Сидоров С.П.", region: "Санкт-Петербург", purchase: 22000, sale: 44000 },
//     { customer: "ООО 'Золотой ключ'", product: "Мышь", category: "Электроника", date: "2023-02-15", salesManager: "Иванов И.И.", region: "Москва", purchase: 8000, sale: 16000 },
//     { customer: "ООО 'Лунный свет'", product: "Планшет", category: "Электроника", date: "2023-11-05", salesManager: "Кузнецов К.К.", region: "Екатеринбург", purchase: 18000, sale: 36000 },
//     { customer: "ООО 'Зеленый лес'", product: "Клавиатура", category: "Электроника", date: "2023-08-20", salesManager: "Петров П.П.", region: "Казань", purchase: 10000, sale: 20000 },
//     { customer: "ЗАО 'Черная роза'", product: "Ноутбук", category: "Электроника", date: "2023-04-17", salesManager: "Смирнов С.С.", region: "Новосибирск", purchase: 35000, sale: 70000 },
//     { customer: "ООО 'Радуга'", product: "Планшет", category: "Электроника", date: "2023-10-09", salesManager: "Алексеев А.А.", region: "Санкт-Петербург", purchase: 19000, sale: 38000 },
//     { customer: "ИП 'Звездочка'", product: "Смартфон", category: "Электроника", date: "2023-07-24", salesManager: "Павлов П.П.", region: "Москва", purchase: 24000, sale: 48000 },
//     { customer: "ООО 'Солнечный луч'", product: "Металл", category: "Стройка", date: "2023-01-30", salesManager: "Соколов С.С.", region: "Казань", purchase: 9000, sale: 18000 },
//     { customer: "ООО 'Северный ветер'", product: "Клавиатура", category: "Электроника", date: "2023-06-18", salesManager: "Козлов К.К.", region: "Новосибирск", purchase: 11000, sale: 22000 },
//     { customer: "ИП 'Синий океан'", product: "Ноутбук", category: "Электроника", date: "2023-12-08", salesManager: "Лебедев Л.Л.", region: "Екатеринбург", purchase: 30000, sale: 60000 },
//     { customer: "ООО 'Белая рыбка'", product: "Планшет", category: "Электроника", date: "2023-03-11", salesManager: "Калинин К.К.", region: "Санкт-Петербург", purchase: 17000, sale: 34000 },
//     { customer: "ООО 'Звездный путь'", product: "Смартфон", category: "Электроника", date: "2023-09-04", salesManager: "Сергеев С.С.", region: "Москва", purchase: 26000, sale: 52000 },
//     { customer: "ИП 'Радужный мост'", product: "Дерево", category: "Стройка", date: "2023-02-22", salesManager: "Федоров Ф.Ф.", region: "Казань", purchase: 9500, sale: 19000 },
// ];


// const person = {
//     name: "Ivan",
//     age: 19,
//     height: 1.9,
//     hair: "blonde",
//     skin: "black",
//     date: () => 'Hello'
// }

// console.table(salesData)
// person.name = 'Denis'
// const date = person.date;
// console.log(salesData)

// [1,3,4,5]

// const symbol = 'char';
// const stroke = "Ivan";


function bubbleSortingConcept1(arr){
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i].length > arr[i + 1].length) {
                let temp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp;
            }
            
        }
    }
    return arr;
}


sortedArray = (bubbleSortingConcept1(['Мехрона', "Зулайхо", "Абдулло", "Абдурашид", "Абубакр", "Ахмад", "Шахром", "Умар", "Шервин", "Масрурджон"]));
console.log(sortedArray)
console.log(binarySearch(sortedArray, "Абдулло"))