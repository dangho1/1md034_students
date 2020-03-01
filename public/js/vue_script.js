
const vm = new Vue ({
    el: '#burgerarr',
    data: {
	copiedMenu: food,
	chosen: '',
	},
	methods: {
		addInfo: function(burg) {
			console.log(burg);
			info.info.push(burg);
		}
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
	infoDesc: ["Burger:", "Name:", "Email:", "Street: ", "House: ", "Payment: ", "Gender: "]
	
      },
  
  
    methods: {
	
	markDone: function() {
		this.isHidden = false;
		this.info.push(this.name, this.email, this.street, this.house,   this.payment, this.gender);
		//return(this.info);
	}
}
  
    
   
});

