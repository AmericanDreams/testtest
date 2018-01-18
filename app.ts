///string
//export {}

//string
let name2 = 'Mirali';
//name = 65;

//number ferqi yxdu float da ola biler integer de
let age = 65.6;

//boolean
let yes = true;

//any
let a;
a = 6;
a = 'A';

//array
let dizi = ["Bir" , "Iki"];
//dizi = [22];

//array string
let names :string[] = ["Mirali"];
names = ["Tural"];

//array any type
let neolsa : any[] = [100 , "salam"];
neolsa = [true];

//tuple bu deqiq arraydir
let address : [string , number] = ["Baki" , 45]; //yalniz birnci string ikinci nomre ola biler vesselam
address = ["oppp" , 99 , 90]; //amma xiyardi bunu da qebul edir :)
//address = [44 , "edde"]; bunu etmir

//enum
enum Color  {
    White ='Beyaz',
    Black = 'Qara'
};

console.log(Color.Black);

//functions

function sayHello(name :string) : string {
    return "Hello " + name;
}

console.log(sayHello("Mirali"));

function doHello(name : string) : void {
    console.log("Hello dedim alasan " + name);
}

doHello("Oppa");

function topla (bir:number , iki:number) :number {
    return bir + iki ;
}

//funtion type {lambda ifadeleri de demek olar}

let hesabla : (a:number , b:number)=> number; //2 dene number girecek bir dene number return olacaq
hesabla = topla;
console.log(hesabla(33 , 66));
//hesabla  = sayHello;  bu olmaz

//object  burdaki object bir nov javadaki arraydir amma 2 qat array yeni ki key value sheklinde olan
//amma burada keylerin adi cox onemlidir yeni obyeckt yaradanda da hemin adlardan istifade
//etmek mecburidir

let adam : {name :string , age :number} = {
    name : "Mirali",
    age : 25
};

console.log(adam.name);

adam  = {
    age : 45,
    name : "Tural" //gorunduyu kimi siranin ferqi yoxdu adlar onemlidir burda
};

console.log(adam.name);

//type alias  bu type sanki class kimi bir sheydir sanki class in blueprinti iimidi
//yeni class dan daha zeif amma class kimi bir shey

type Type1 = {name :string , age :number}; //day her yerde bunun sol terefini yazmaqa etiyac yoxdur
//onu elece Type1 ile de evez etdik

let yeniObyekt :Type1 = {
    name : "Opppa",
    age :333
};

//union tyoe ler
//bu axmaq sohbetdi yeni ki bir nece tip ola biler demekdi meselen

let myAge : string | number;
myAge = 55;
myAge = "elli besh";

//type check
let age1 = 66;
if(typeof age1 == "number"){
    console.log("Okay this is number")
}





