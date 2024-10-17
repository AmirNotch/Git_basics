function isPalindrome(input) {
    // Преобразуем входные данные в строку
    input = String(input);
    
    // Удаляем из строки пробелы и приводим к нижнему регистру
    input = input.replace(/\s/g, '').toLowerCase();

    // Проверяем, является ли строка палиндромом
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Примеры использования:
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Аргентина манит негра")); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("topot")); // True
console.log(isPalindrome("Valav")); // true

//////////////////////////////////////////////////////////////


function reverseNumber(number) {
    // Преобразуем число в строку
    let reversed = String(number);
    // Переворачиваем строку
    reversed = reversed.split('').reverse().join('');
    // Преобразуем строку обратно в число
    return parseInt(reversed);
}

// Пример использования:
console.log(reverseNumber(12345)); //

///////////////////////////////////////////////////////////////

function findLongestWord(str) {
    // Разбиваем строку на массив слов
    let words = str.split(' '); // ["The", "quick", "brown","fox","jumped","over","the","lazy","dog"]
    // Инициализируем переменную для хранения длины самого длинного слова
    let maxLength = 0;
    // Инициализируем переменную для хранения самого длинного слова
    let longestWord = 0;
    
    // Проходимся по каждому слову в массиве
    for (let i = 0; i < words.length; i++) {
        // Если длина текущего слова больше максимальной длины
        if (words[i].length > maxLength) {
            // Обновляем максимальную длину
            maxLength = words[i].length;
            // Обновляем самое длинное слово
            longestWord = words[i];
        }
    }
    
    return longestWord;
}

// Пример использования:
console.log(findLongestWord("The quick brown fox jumped  over the lazy dog")); // Вывод: jumped
console.log(findLongestWord("Hello world")); // Вывод: Hello
console.log(findLongestWord("This is a test sentence")); // Вывод: sentence

