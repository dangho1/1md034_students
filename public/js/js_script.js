function menuItem(name, has_gluten, has_lactose, kcal, imagePath,) {
		this.name = name;
    this.has_gluten = has_gluten;
    this.has_lactose = has_lactose;
    this.kcal = kcal;
}

function returnItem(menuItem) {
    return menuItem.name + ': ' + menuItem.has_gluten + ', ' + menuItem.has_lactose + ',' + menuItem.kcal;
}

let fire_burger = new menuItem("Fire Burger", true, true, 600);
let hej_burger = new menuItem("Hej Burger", false, false, 1);
let uber_burger = new menuItem("Uber Burger", true, true, 9000);

let lettuce_burger = new menuItem("Lettuce Burger", false, false, 230);
let void_burger = new menuItem("Void Burger", false, false, 0);

let return_fire = returnItem(fire_burger);
let return_hej = returnItem(hej_burger);
let return_uber = returnItem(uber_burger);
let return_lettuce = returnItem(lettuce_burger);
let return_voider = returnItem(void_burger);
/*document.getElementById("fire").innerHTML = return_fire;
document.getElementById("hej").innerHTML = return_hej;
*/

let menu = [fire_burger, hej_burger, uber_burger, void_burger, lettuce_burger];

let burgers = document.getElementById("burgerarr");
let big_list = document.createElement("ul");

burgers.appendChild(big_list);

for (var burger of menu) {
    let listItem = document.createElement("li");
    let burger_name = document.createTextNode(burger.name);
    listItem.appendChild(burger_name);
    let allergy_list = document.createElement("ul");
    listItem.appendChild(allergy_list);
    big_list.appendChild(listItem);
    
    
    if(burger.has_gluten) {
  	let gluten_item = document.createElement("li");
	let gluten_text = document.createTextNode("Contains gluten");
	gluten_item.appendChild(gluten_text);
	allergy_list.appendChild(gluten_item);
    }
    
    if(burger.has_lactose) {
	let lactose_item = (document.createElement("li"));
	let lactose_text = document.createTextNode("Contains lactose")
	lactose_item.appendChild(lactose_text);
	allergy_list.appendChild(lactose_item);
    }
    
    let kcal_item = document.createElement("li");
    let kcal_text = document.createTextNode("Kcal: " + burger.kcal);
    kcal_item.appendChild(kcal_text);
    allergy_list.appendChild(kcal_item);
    
  
}
