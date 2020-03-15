
const vm = new Vue ({
    el: '#burgerarr',
    data: {
	copiedMenu: food,
	chosen: [],
	},
	methods: {
		addInfo: function(burg) {
      if(vm.contains(burg, info.burgers)) {
        for(var i in info.burgers) {
          if(info.burgers[i] == burg){
            info.burgers.splice(i, 1);
            break;
          }
        }
      }
      else {
      info.burgers.push(burg);
      }
    },
    contains: function(burger, arr) {
      var index = arr.length;
      while (index--) {
        if (arr[index] == burger) {
          return true;
        }
      }
      return false;
    }
	}
	
})


const info = new Vue({
    el: '#button_id',
    data: {
	isHidden: true,
	name: '',
	email: '',
	payment: '',
	gender: '',
  info: [],
  burgers: [],
	infoDesc: ["Burger:", "Name:", "Email:", "Payment: ", "Gender: "]
	
      },
  
  
    methods: {
	
	markDone: function() {
		this.isHidden = false;
		this.info.push(this.burgers, this.name, this.email, this.payment, this.gender);
		return(this.info);
	}
}   
});

const orderButton = new Vue({
	el: '#order_button',
	data: {
		customer_info: info.infoDesc,
		hidden: true,
		order: []
	},
	methods: {
		finishOrder: function() {
			this.hidden = false;
			this.order = info.markDone();
		}
	}
})

'use strict';
const socket = io();

const deli = new Vue({
  el: '#dots',
  data: {
    orders: {},
    details: {x: 0, y: 0},
    orderNum: 0,
  },
  methods: {
    getNext: function () {
      /* This function returns the next available key (order number) in the orders object,
       * it works under the assumptions that all keys are integers. */
      return this.orderNum + 1;
    },
    addOrder: function (event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different coordinates 
       * that we need when calculating where in the map the click actually happened. */
    
      this.displayOrder(event);
      socket.emit("addOrder", { 
        orderId: this.getNext(),
        details: {
          x: this.details.x,
          y: this.details.y,
        },
        orderItems: [info.burgers]
      });
    },
    displayOrder: function (event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different coordinates 
       * that we need when calculating where in the map the click actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };

        this.details.x = event.clientX - 10 - offset.x;
        this.details.y = event.clientY - 10 - offset.y;
        return this.details;
    }
  }
});


