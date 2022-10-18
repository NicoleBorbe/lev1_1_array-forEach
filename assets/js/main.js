let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]
 
getraenke.sort();
console.log(getraenke);

getraenke.forEach(function myDrinks(g) {
    console.log(g);
    document.write(g + `<br>`);
});