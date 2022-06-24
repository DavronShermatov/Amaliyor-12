//  1 masala
const numberOfSerius = prompt("nechta serial ko'rdingiz", "15");
console.log(numberOfSerius);
//  2 masala
const seriesDB = {
    count:numberOfSerius,
    series:{},
    actors:{},
    genres:[],
    privat:false
};
// 3 masala
const a = prompt("oxirgi ko'rgan serialingiz", "Umar Ibn Hattob"),
b = +prompt("Nechta serial ko'rgansiz" ,"10"),
d = prompt("oxirgi ko'rgan serialingiz", "Ahmad Ibn Hanbai"),
c = +prompt("Nechta serial ko'rgansiz","10");
 seriesDB.series[a]=b;
 seriesDB.series[d]=c;
 console.log(seriesDB);
