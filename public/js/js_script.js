/*function menuItem(name, has_gluten, has_lactose, kcal, alias, imagePath,) {
		this.name = name;
    this.has_gluten = has_gluten;
    this.has_lactose = has_lactose;
    this.kcal = kcal;
    this.alias = alias;
    this.imagePath = imagePath;
}

function returnItem(menuItem) {
    return menuItem.name + ': ' + menuItem.has_gluten + ', ' + menuItem.has_lactose + ',' + menuItem.kcal;
}

let fire_burger = new menuItem("Fire Burger", true, true, 600, "burger fire", 'https://ro-images-reserveout.netdna-ssl.com/crop/460x250/1635939370183026831.jpg' );
let hej_burger = new menuItem("Hej Burger", false, false, 1, "burger hej", 'https://media.istockphoto.com/vectors/cartoon-cute-burger-icon-isolated-on-white-background-vector-id1142855781');
let uber_burger = new menuItem("Uber Burger", true, true, 9000, "burger uber", 'https://i.pinimg.com/originals/68/74/96/6874969142851c9e5714e580aaec7fee.jpg');

let lettuce_burger = new menuItem("Lettuce Burger", false, false, 230, "burger lettuce", 'https://hips.hearstapps.com/vidthumb/manual_upload/597b9b2dbbddbd58db5aac61/thumb_1501272879.png');
let void_burger = new menuItem("Void Burger", false, false, 0, "burger void", 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTie9lseRnYgGalOeVShMW88rHYzRulF6aiqFcR7dK2NXwDKnCb');
*/
/*let return_fire = returnItem(fire_burger);
let return_hej = returnItem(hej_burger);
let return_uber = returnItem(uber_burger);
let return_lettuce = returnItem(lettuce_burger);
let return_voider = returnItem(void_burger);
var menu = [fire_burger, hej_burger, uber_burger, void_burger, lettuce_burger];





let myElements = document.getElementById("burgers");
let big_list = document.createElement("ul");
//myElements.appendChild(big_list);



for (var burger of menu) {
    let burgNameList = document.createElement("div");
    let listItem = document.createElement("li");
    myElements.appendChild(burgNameList);
    let burgNameHeading = document.createElement("h3");
    let burgNameValue = document.createTextNode(burger.name);
    burgNameHeading.appendChild(burgNameValue);
    burgNameList.appendChild(burgNameHeading);
    let imageItem = document.createElement("img");
    imageItem.src = burger.imagePath;
    imageItem.width = 480;
    imageItem.height = 480;
    burgNameList.appendChild(imageItem);
    //listItem.appendChild(burgNameList);
    let burgInfoList = document.createElement("ul");
    burgNameList.appendChild(burgInfoList);

  
    
    
    if(burger.has_gluten) {
	let glutenItem = document.createElement("li");
	let gluten = document.createTextNode("Contains gluten");
	glutenItem.appendChild(gluten);
	burgInfoList.appendChild(glutenItem);
    }
    if(burger.has_lactose) {
	let lactoseItem = document.createElement("li");
	let lactose = document.createTextNode("Contains lactose");
	lactoseItem.appendChild(lactose);
	burgInfoList.appendChild(lactoseItem);
    }
    let kcalItem = document.createElement("li");
    let kcal = document.createTextNode("kcal: " + burger.kcal);
    kcalItem.appendChild(kcal);
    burgInfoList.appendChild(kcalItem);
}
*/












