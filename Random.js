// Генерация случайного имени клиента
function generateRandomCustomerName() {
    var prefixes = ["ООО", "ЗАО", "ИП"];
    var names = ["Ромашка", "Пион", "Гвоздика", "Лилия", "Роза", "Тюльпан"];
    var prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    var name = names[Math.floor(Math.random() * names.length)];
    return `${prefix} '${name}'`;
  }
  
  // Генерация случайного продукта и категории
  function generateRandomProductAndCategory() {
    var products = ["Планшет", "Ноутбук", "Смартфон", "Клавиатура", "Мышь"];
    var categories = ["Мебель", "Одежда", "Электроника", "Бытовая техника"];
    var product = products[Math.floor(Math.random() * products.length)];
    var category = categories[Math.floor(Math.random() * categories.length)];
    return { product: product, category: category };
  }
  
  // Генерация случайной даты
  function generateRandomDate() {
    var startDate = new Date(2023, 0, 1); // 1 января 2023
    var endDate = new Date(2023, 11, 31); // 31 декабря 2023
    var randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().slice(0, 10); // Формат YYYY-MM-DD
  }
  
  // Генерация случайного имени менеджера продаж
  function generateRandomSalesManagerName() {
    var firstNames = ["Иван", "Петр", "Александр", "Сергей", "Михаил"];
    var lastNames = ["Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов"];
    var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName.charAt(0)}.`;
  }
  
  // Генерация случайной суммы покупки и продажи
  function generateRandomPurchaseAndSale() {
    var minPurchase = 10000;
    var maxPurchase = 50000;
    var purchase = Math.floor(minPurchase + Math.random() * (maxPurchase - minPurchase + 1));
  
    // Продажная цена в два раза выше покупной
    var sale = purchase * 2;
  
    return { purchase: purchase, sale: sale };
  }
  
  // Генерация случайной региона
  function generateRandomRegion() {
    var regions = ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Новосибирск"];
    return regions[Math.floor(Math.random() * regions.length)];
  }
  
  // Генерация 30 случайных объектов данных
  var salesData = [];
  for (var i = 0; i < 30; i++) {
    var customer = generateRandomCustomerName();
    var productAndCategory = generateRandomProductAndCategory();
    var date = generateRandomDate();
    var salesManager = generateRandomSalesManagerName();
    var purchaseAndSale = generateRandomPurchaseAndSale();
    var region = generateRandomRegion();
  
    var data = {
      customer: customer,
      product: productAndCategory.product,
      category: productAndCategory.category,
      date: date,
      salesManager: salesManager,
      region: region,
      purchase: purchaseAndSale.purchase,
      sale: purchaseAndSale.sale
    };
  
    salesData.push(data);
  }
  
  console.log(salesData);
  