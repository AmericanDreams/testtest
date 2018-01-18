"use strict";
///string
//export {}
//string
var name2 = 'Mirali';
//name = 65;
//number ferqi yxdu float da ola biler integer de
var age = 65.6;
//boolean
var yes = true;
//any
var a;
a = 6;
a = 'A';
//array
var dizi = ["Bir", "Iki"];
//dizi = [22];
//array string
var names = ["Mirali"];
names = ["Tural"];
//array any type
var neolsa = [100, "salam"];
neolsa = [true];
//tuple bu deqiq arraydir
var address = ["Baki", 45]; //yalniz birnci string ikinci nomre ola biler vesselam
address = ["oppp", 99, 90]; //amma xiyardi bunu da qebul edir :)
//address = [44 , "edde"]; bunu etmir
//enum
var Color;
(function (Color) {
    Color["White"] = "Beyaz";
    Color["Black"] = "Qara";
})(Color || (Color = {}));
;
console.log(Color.Black);
//functions
function sayHello(name) {
    return "Hello " + name;
}
console.log(sayHello("Mirali"));
function doHello(name) {
    console.log("Hello dedim alasan " + name);
}
doHello("Oppa");
function topla(bir, iki) {
    return bir + iki;
}
//funtion type {lambda ifadeleri de demek olar}
var hesabla; //2 dene number girecek bir dene number return olacaq
hesabla = topla;
console.log(hesabla(33, 66));
//hesabla  = sayHello;  bu olmaz
//object  burdaki object bir nov javadaki arraydir amma 2 qat array yeni ki key value sheklinde olan
//amma burada keylerin adi cox onemlidir yeni obyeckt yaradanda da hemin adlardan istifade
//etmek mecburidir
var adam = {
    name: "Mirali",
    age: 25
};
console.log(adam.name);
adam = {
    age: 45,
    name: "Tural" //gorunduyu kimi siranin ferqi yoxdu adlar onemlidir burda
};
console.log(adam.name);
//onu elece Type1 ile de evez etdik
var yeniObyekt = {
    name: "Opppa",
    age: 333
};
//union tyoe ler
//bu axmaq sohbetdi yeni ki bir nece tip ola biler demekdi meselen
var myAge;
myAge = 55;
myAge = "elli besh";
//type check
var age1 = 66;
if (typeof age1 == "number") {
    console.log("Okay this is number");
}
