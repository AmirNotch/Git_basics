const fullName = (name) => {
    let namefunction = "Baha";

    return name + namefunction;
}; 

// console.log(fullName("John"));

const age = function Age(age) {
    return age;
}

// console.log(age(30));


const person = {
    name: 'John',
    age: 30,
    greet: () => {
      console.log(`Привет, меня зовут ${fullName("John")} и мне ${age(30)} лет.`);
    }
  };

person.greet();


const findLongestWord = (str) => {
  // Разбиваем строку на массив слов
  // let words = str.split(' '); // ["The", "quick", "brown","fox","jumped","over","the","lazy","dog"]
  // Инициализируем переменную для хранения длины самого длинного слова
  let max = 0;
  // Инициализируем переменную для хранения самого длинного слова
  // let longestWord = 0;
  
  // Проходимся по каждому слову в массиве
  for (let i = 0; i < str.length; i++) {
      // Если длина текущего слова больше максимальной длины
      if (str[i] > max) {
          // Обновляем максимальную длину
          max = str[i];
          // Обновляем самое длинное слово
          // longestWord = words[i];
      }
  }
  
  return max;
}

console.log(findLongestWord([99,923,99999999,100000,43213]));


 