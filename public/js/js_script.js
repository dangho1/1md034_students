function menuItem(desc_1, desc_2, desc_3, imagePath) {
    this.desc_1 = desc_1;
    this.desc_2 = desc_2;
    this.desc_3 = desc_3;
}

function returnItem(menuItem) {
    return menuItem.desc_1 + ', ' + menuItem.desc_2;
}


let fire_burger = new menuItem("Not advised to eat on a date", "May cause side effects");
let hej_burger = new menuItem("Will sing you a song on your birthday", "Too cute to actually eat", "hej");
let uber_burger = new menuItem("Cheat meal godsent", "Questionable cheese", "May cause anxiety after consumption");

let lettuce_burger = new menuItem("Plain and boring", "Might as well have a picadeli salad");
let void_burger = new menuItem("Imaginary burger", "Seeing is not believing");

let return_fire = returnItem(fire_burger);
let return_hej = returnItem(hej_burger);

document.getElementById("fire").innerHTML = return_fire;
document.getElementById("hej").innerHTML = return_hej;
