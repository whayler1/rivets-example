var data = {
		title: 'Welcome to the Candy Shop',
		
		products: [
			{
				title: 'lollipop',
				price: 0.5
			},
			{
				title: 'teakettle',
				price: 14.95
			},
			{
				title: 'magic stick',
				price: 89.12546
			},
			{
				title: 'low rider',
				price: 22450
			},
			{
				title: 'champagne',
				price: 45
			}
		],
		
		bag: [],
		
		subtotal: 0,
		
		tax: 0,
		
		total: 0
	},
	
	controller = {
		onAtbClick: function(e, model) {
			
			var product = model.data.products[model.index],
				bag = model.data.bag,
				i = 0,
				updatePrice = model.controller.updatePrice;
			
			for(; i < bag.length; i++) {
				
				if(bag[i].title === product.title) {
					
					bag[i].quantity++;
					updatePrice(model.data);
					return;
				}
			}
			
			bag.push(product);
			bag[bag.length - 1].quantity = 1;
			//console.log(product, bag);
			updatePrice(model.data);
		},
		
		addItem: function(e, model) {
			
			model.data.bag[model.index].quantity++;
			model.controller.updatePrice(model.data);
		},
		
		removeItem: function(e, model) {
			
			var index = model.index,
				bag = model.data.bag,
				product = bag[index],
				updatePrice = model.controller.updatePrice;
			
			if(product.quantity > 1) {
				
				product.quantity--;
				updatePrice(model.data);
				return;
			}
			
			bag.splice(index, 1);
			updatePrice(model.data);
		},
		
		updatePrice: function(data) {
			
			var bag = data.bag,
				product,
				subtotal = 0,
				i = 0;
			
			for(; i < bag.length; i++) {
				
				product = bag[i];
				
				subtotal += product.price * product.quantity;
			}
			
			data.subtotal = subtotal;
			data.tax = subtotal * 0.08875;
			data.total = subtotal + data.tax;
		}
	};

rivets.formatters.price = function(val) {
	
	var spl = String(val).split('.'),
		dollarsArray = spl[0].split(''),
		lastDollar = dollarsArray.length - 1,
		pow,
		i;
	
	if(dollarsArray.length > 3) {
		
		dollarsArray.reverse();
		
		for(i = lastDollar; i > -1; i--) {
			
			if(i % 3 === 0 && i !== 0) {
				
				dollarsArray.splice(i, 0, ',');
			}
		}
		
		spl[0] = dollarsArray.reverse().join('');
	}
	
	if(spl.length > 1) {
		
		//spl[1] = Math.round(spl[1] / Math.pow(10, spl[1].length - 2) );
		spl[1] = spl[1].substr(0, 2);
	}else {
		
		spl[1] = '00';
	}
	
	return '<abbr title="USD">$</abbr>' + spl.join('.');
};

rivets.formatters.length = function(val) {
	
	return val.length;
}

rivets.bind(document.querySelector('#candy-shop'), {
	data: data,
	controller: controller
});