// // 1
// function sum (a, b) {
//     let suma = a + b;
//     return suma
// }

// console.log (sum (10,20))
// // 2
// let table = [1, 2, 3, 4, 5]

// function returnTabLen (table) {
//     let length = table.length
//     return length
// }

// console.log (returnTabLen(table))
// // 3
// function isP (x) {
//     let wynik = x % 2 === 0;
//     if (wynik === true) {
//         return "liczba parzysta"
//     } else {
//         return  "liczba nieparzysta"
//     }
// }
//  console.log (isP(6))
//  4
// function KArea (a) {
//     let area = a * a;
//     return area
// }

// console.log (KArea(7))
// 5
// function Odwr (a) {
//     sum = 1/a;
//     return sum
// }
// console.log (Odwr(5))
// 6
// function celFar (a) {
//     let sum = 9/5*a+32;
//     return sum
// }
// console.log (celFar(30))
// 7
// let table2 = [1, 2, 3, 4, 5, 6]

// function FirstElem () {
//     let sum = table2[1];
//     return sum
// }
// console.log (FirstElem(table2))
// 8
// function words(word, word2) {
//     let wynik = word + word2;
//     if (typeof word === 'string' && typeof word2 === 'string') {
//         return wynik;
//     } else {
//         return "Przynajmniej jedno ze słów nie jest stringiem.";
//     }
// }

// console.log(words("słowo", 123));
// 9
// function whatType (zmienna) {
//     let type = typeof zmienna
//     return type
// }

// console.log (whatType(true))
// 10
// function absolute (a) {
//     if (a < 0){
//         return -1*a
//     } else {
//         return a
//     } 
// }
// console.log (absolute(-5))



// PĘTLE 


// 1
// function numbers() {
//     for (i = 0; i <= 10; i++) {
//         console.log (i)
//     }
// } console.log (numbers())
// 2
// function parzDo20() {
//     let a = 0;
//     while (a <= 20) {
//         if (a % 2 === 0) {
//             console.log(a);
//         }
//         a++;
//     }
// }

// console.log (parzDo20())
// 3
// function TenToOne () {
//     let a = 10;
//     do {console.log(a);
//     a--}
//     while (a >= 0)
// }

// console.log(TenToOne())
// 4


// function Break5() {
//     let a = 0; 
//     console.log(a);
//     a++;

//     while (a === 5) {
//         break;
//     }

//     return a;
// }

// console.log(Break5()); 
// 5
// let auto = {
//     model: 'astra',
//     year: 2000,
//     color: 'blue',
// };

// function iter(auto) {
//     for (let property in auto) {
//         console.log(`${property}: ${auto[property]}`);
//     }
// }

// iter(auto);
// 6
// let tablica = [1, 2, 3, 4];

// function iterTab (tablica) {
//     for (let index in tablica) {
//         console.log(`${index}: ${tablica[index]}`)
//     }
// }
// iterTab(tablica)
// 7
// let tablica2 = [1, 2, 3, 4];

// function suma2(tablica2) {
//     for (let i = 0; i < tablica2.length; i++) {
//         suma += tablica[i];
//     }
//     return suma;
// }
// console.log (suma2(tablica2))
// 8
// 9
// 10
// matody na tablicach
// 1
// let tablica = [1, 2, 3];

// function add (tablica) {
//     tablica.push(4);
//    console.log (tablica)
// }

// add(tablica)
// 2
// let tablica = [1, 2, 3];

// function add (tablica) {
//     tablica.pop();
//    console.log (tablica)
// }

// add(tablica)
// 3
// let tablica = [1, 2, 3];

// function add (tablica) {
//     tablica.shift();
//    console.log (tablica)
// }

// add(tablica)
// 4
// let tablica = [1, 2, 3];

// function add (tablica) {
//     tablica.unshift(0);
//    console.log (tablica)
// }

// add(tablica)
// 5
// let tablica = [1, 2, 3];

// function add (tablica) {
//     tablica.push(tablica.length +1, tablica.length +2);
//    console.log (tablica)
// }

// add(tablica)
// 6
// let tablica = [1, 2, 3];

// function add (tablica) {
//    let newtablica =  tablica.pop();
//    let newtablica2 = tablica.pop();
//    console.log (newtablica2)
   
// }

// add(tablica)
// 7
// let tablica = [1, 2, 3];

// function add (tablica) {
//    let newtablica1 =  tablica.shift();
//    let newtablica2 = tablica.shift();
//    console.log (newtablica2)
   
// }

// add(tablica)

// 11
// tablica = [1, 2, 3, 4, 5]

// function bigger (num) {
//     let biggerNum = num + 1
//     return biggerNum
// }

// let newTablica = tablica.map (bigger)

// console.log(newTablica)
// 12

// tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function onlyParzyste (num) {
//     let parz = num % 2 === 0 
// if (parz) {
//     return num
// }  {
// null
// }
// }

// let parzyste = tablica.filter (onlyParzyste)

// console.log (parzyste)
// 13
 
// tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function double (num){
//     let dab = num * 2
//     return dab
// }

// let tablica2 = tablica.map (double)
// console.log (tablica2)
// 14

// tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function biggerThen10 (num) {
//     if (num > 10) {
//         return num
//     } else {
//         return undefined
//     }
// }

// let tablica2 = tablica.filter (biggerThen10)
// console.log (tablica2)

// 15
// tablica = ["jeden dwa trzy cztery piec szesc"]

// function podziel (element) {
//     return element.split (' ')
// }

// let tablica2 = tablica.map (podziel)
// console.log (tablica2)
// 16
// tablica = ["jeden", "dwa", "trzy", "cztery", "piec", "szesc"]

// function long (element) {
//     let dlugosc = element.length
//     return dlugosc
// }

// let tablica2 = tablica.map (long)
// console.log (tablica2)
// 17

// tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function nieparz (num) {
//     let nieparzNum = num % 2 !== 0 
//     return nieparzNum
// }

// let tablica2 = tablica.filter (nieparz)
// console.log (tablica2)
// 18

// tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function kwadrat (num) {
//     let num2 = num * num
//     return num2
// }

// let tablica2 = tablica.map (kwadrat)
// console.log (tablica2)
// 19
// tablica = ["jeden", "dwa", "trzy", "cztery", "piec", "szesc"]

// function moreThen3 (element) {
//     let wiecej = element.length > 3
//     return wiecej
// }

// tablica2 = tablica.filter (moreThen3)
// console.log (tablica2)
// 20
// tablica = ["jeden", "dwa", "trzy", "cztery", "piec", "szesc"]
// function BigChar (element) {
//     let big = element.toUpperCase ()
//     return big
// }

// let tablica2 = tablica.map (BigChar)
// console.log (tablica2)

