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

