	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Organic Brocolli",
		nutfree: true,
		lactosefree: true,
		organic: true,
		lowcal: true,
		price: 1.99
	},
	{
		name: "Bread",
		nutfree: true,
		lactosefree: true,
		price: 2.35
	},
	{
		name: "Orgamic Salmon",
		nutfree: true,
		lactosefree: true,
		organic: true,
		lowcal:true,
		price: 10.00
	},
	{
		name: "Ground Beef",
		nutfree: true,
		lactosefree: true,
		price: 12.00
	},
	{
		name: "Organic Avocados",
		nutfree: true,
		lactosefree: true,
		organic: true,
		lowcal:true,
		price: 3.00
	},
	{
		name: "Milk Chocolate",
		nutfree: true,
		lactosefree: false,
		price: 2.00
	},
	{
		name: "Pickles",
		nutfree: true,
		lactosefree: true,
		price: 1.00
	},
	{
		name: "Pasta",
		nutfree: true,
		lactosefree: true,
		price: 4.00
	},
	{
		name: "Organic Trail Mix",
		nutfree: false,
		lactosefree: true,
		organic: true,
		price: 5.50
	}, 
	{
		name: "Frozen Pizza",
		nutfree: true,
		lactosefree: false,
		price: 7.20
	}

];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let products = [];

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "nutfree") && (prods[i].nutfree == true)){
			var product = {prodname:prods[i].name, price:prods[i].price}
			products.push(product);
		}
		else if ((restriction == "lactosefree") && (prods[i].lactosefree == true)){
			var product = {prodname:prods[i].name, price:prods[i].price}
			products.push(product);
		}
		else if ((restriction == "organic") && (prods[i].organic == true)){
			var product = {prodname:prods[i].name, price:prods[i].price}
			products.push(product);
		}
		else if ((restriction == "lowcal") && (prods[i].lowcal == true)){
			var product = {prodname:prods[i].name, price:prods[i].price}
			products.push(product);
		}
		else if (restriction == "None"){
			var product = {prodname:prods[i].name, price:prods[i].price}
			products.push(product);
	}
}
	return products;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
