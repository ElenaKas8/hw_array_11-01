//*Задан массив goods:

let goods = [
  { id: 1, title: "Микроволновка", price: 1500, count: 4 },
  { id: 2, title: "Телевизор", price: 2500, count: 1 },
  { id: 3, title: "Тумба", price: 5500, count: 5 },
  { id: 4, title: "Холодильник", price: 200, count: 2 },
  { id: 5, title: "Стол", price: 5600, count: 5 },
  { id: 6, title: "Телефон", price: 1900, count: 12 },
  { id: 7, title: "Компьютер", price: 4200, count: 11 },
  { id: 8, title: "Мангал", price: 250, count: 7 },
  { id: 9, title: "Люстра", price: 300, count: 3 },
];
// */1.Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

// let result = goods.filter((item) => item.id % 2 === 0);
//
// console.log(result);

//*2.Отфильтруйте продукты с количеством менее 5 единиц

// console.log(goods.filter((item) => item.count < 5));

//*3.Найдите значение элемента массива (продукта), цена которого будет кратна 5

//console.log(goods.filter((item) => item.price % 5 === 0));

//*4.Найдите индекс элемента, count которого будет больше 11

//console.log(goods.findIndex((item) => item.count > 11));

//*5.Посчитайте количество элементов, count которых является нечетным числом

//console.log(goods.filter((item) => item.count % 2 !== 0).length);

//*6.Посчитайте количество элементов, имя которых начинается на “Т”

//console.log(goods.filter((item) => item.title.startsWith("Т")).length);

//*7.Проверьте, есть ли хотя бы один продукт с ценой выше 500.
//console.log(goods.some((item) => item.price > 500));

//*8.Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

//console.log(goods.map((item) => item.price * 0.65));

//*9.Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех
// let newArray = goods.map((item) => {
// item.count = 0;
// return item;
//
// });
// console.log(newArray);
//

//*10.Отсортируйте продукты по возрастанию цены

//console.log(goods.sort((a, b) => a.price - b.price));
//*11.Отсортируйте массив по сво-ву title
console.log(goods.sort((a, b) => a.title.localeCompare(b.title)));

//^^Метод localeCompare используется для сравнения двух строк в соответствии с правилами сортировки языка (локали). Он возвращает число, которое указывает, какая строка предшествует другой при сортировке, или равны, или следует за ней.
