/*const fire = new Vue({
  el: '#fire',
  data: {
    burgerFire: return_fire
  }
})

const hej = new Vue({
  el: '#hej',
  data: {
    burgerHej: return_hej
  }
})
*/
//let menu = [fire_burger, hej_burger, uber_burger, void_burger, lettuce_burger];



const vm = new Vue ({
    el: '#burgerarr',
    data: {
	copiedMenu: food
    }
})

const info = new Vue({
    el: '#button_id',
    data: {
	isHidden: true,
	name: '',
	email: '',
	street: '',
	house: '',
	payment: '',
	gender: '',
	info: [],
	infoDesc: ["Name:", "Email:", "Street: ", "House: ", "Payment: ", "Gender: "]
	
      },
  
  
    methods: {
	
	markDone: function() {
		this.isHidden = false;
		this.info = [this.name, this.email, this.street, this.house, this.payment, this.gender];
		console.log(this.info);
		//return info;
		return(this.info);
	}
}
  
    
   
});

/*
 /*let myButton = document.getElementById('button_id');
	    let fetch = function() {
		let nameValue = document.getElementById('fullname').value
		let emailValue = document.getElementById('email').value;
		let streetValue = document.getElementById('street').value;
		let houseValue = document.getElementById('house').value;
		let paymentValue = document.getElementById('payment').value;
		let genderValue = function() {
		  var selected;
		    if(document.getElementById("male_gender").checked) {
			selected = document.getElementById("male_gender").value;
		    }
		    else if(document.getElementById("female_gender").checked) {
			selected = document.getElementById("female_gender").value;
		    }
		    else if(document.getElementById("other_gender").checked) {
			selected = document.getElementById("other_gender").value;
		    }
		    else {
			selected = "No gender chosen";
		    }
		    return selected;
		}
		let checkedBurger = function() {
		    for (burger of vm.copiedMenu) {
			if (burger.checked) {
			    return burger.name;
			}
		    }
		    return "No burger selected";
		}
		

		selected_array = [nameValue, emailValue, streetValue, houseValue, paymentValue, genderValue(), checkedBurger()];
	
		return selected_array;
	
		
		
	    }
	    console.log(fetch());
	    let hej = fetch();
		return hej;
		*/