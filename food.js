var dogRequest = new XMLHttpRequest();

dogRequest.addEventListener("progress", dogFoodChunksArrive);
dogRequest.addEventListener("error", dogFoodXHRFails);
dogRequest.addEventListener("load", dogFoodLoaded);
dogRequest.open("GET", "dogFood.json");
dogRequest.send();


var catRequest = new XMLHttpRequest();

catRequest.addEventListener("progress", catFoodChunksArrive);
catRequest.addEventListener("error", catFoodXHRFails);
catRequest.addEventListener("load", catFoodLoaded);
catRequest.open("GET", "catFood.json");
catRequest.send();


function dogFoodXHRFails (xhrEvent) {
	console.log("An error occured while transferring the...");
};

function dogFoodChunksArrive (xhrEvent) {
	// if (xhrEvent.lengthComputable) {
	// 	console.log("dogFoodChunksArrive");
	// 	console.log(Date.now());
	// 	var percentComplete = xhrEvent.loaded / xhrEvent.total
	// 	console.log("percentComplete", percentComplete);
	// }
}

function dogFoodLoaded () {
		var contentEl = document.getElementById("dog-food-div");
		console.log(contentEl);
		var dogString = "";
		var data = JSON.parse(this.responseText);
		console.log(data);
		
		function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
		}

		function replaceUnderscore (string) {
			return string.replace("_", " ");
		}

		var dogBrandArray = data.dog_brands;
		
		dogBrandArray.forEach(function(object){
			var brandsObject = object;
			var dogBrand = brandsObject.name;
			console.log(dogBrand);
			dogString += `<div class="dog-card col-md-3 col-md-offset-2"><h2>${dogBrand}</h2>`
			var brandTypesArray = brandsObject.types;
			console.log(brandTypesArray);
			
			brandTypesArray.forEach(function(object){
				var brandType = object.type;
				console.log(brandType);
				brandType = capitalizeFirstLetter(brandType);
				brandType = replaceUnderscore(brandType);
				dogString += `<h4>${brandType}</h4><ul>`
				var volumesArray = object.volumes;
				console.log(volumesArray);

				volumesArray.forEach(function(object){
					var volumeName = object.name;
					console.log(volumeName);
					dogString += `<li>${volumeName} for `;
					var volumePrice = object.price;
					console.log(volumePrice);
					dogString += `$${volumePrice}</li>`
				
				})
				dogString += `</ul>`;
			})	
			dogString += `</div>`;	
		});		
		contentEl.innerHTML = dogString;
	}

function catFoodXHRFails (xhrEvent) {
	console.log("An error occured while transferring the...");
};

function catFoodChunksArrive (xhrEvent) {

}

function catFoodLoaded () {
		var contentEl = document.getElementById("cat-food-div");
		console.log(contentEl);
		var catString = "";
		var data = JSON.parse(this.responseText);
		console.log(data);

		function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
		}

		var catBrandArray = data.cat_brands;
		
		catBrandArray.forEach(function(object){
			var brandsObject = object;
			var catBrand = brandsObject.name;
			console.log(catBrand);
			catString += `<div class="cat-card col-md-3 col-md-offset-2"><h2>${catBrand}</h2>`
			var breedArray = brandsObject.breeds;	
			catString += `<h4>For the following breeds:</h4><ul>`;
		
			breedArray.forEach(function(breed){
					catString += `<li>${breed}</li>`;
			})
			catString += `</ul>`;	
			var brandTypesArray = brandsObject.types;
			console.log(brandTypesArray);
		
			brandTypesArray.forEach(function(object){
				var brandType = object.type;
				console.log(brandType);
				brandType = capitalizeFirstLetter(brandType);
				catString += `<h4>${brandType}</h4><ul>`
				var volumesArray = object.volumes;
				console.log(volumesArray);
		
				volumesArray.forEach(function(object){
					var volumeName = object.name;
					console.log(volumeName);
					catString += `<li>${volumeName} for `;
					var volumePrice = object.price;
					console.log(volumePrice);
					catString += `$${volumePrice}</li>`
				})
				catString += `</ul>`;
			})
			catString += `</div>`;	
		});
		contentEl.innerHTML = catString;
	}


// data = {}
// data.dog_brands = []
// data.dog_brands[0] = {}
// console.log(data.dog_brands[0].name);
// data.dog_brands[0].name = "Chuck wagon"
// data.dog_brands[0].types = []
// data.dog_brands[0].types[0] = {}
// data.dog_brands[0].types[0].type = "All_natural"
// console.log(data.dog_brands[0].types[0]);
// data.dog_brands[0].types[0].volumes = []
// data.dog_brands[0].types[0].volumes[0] = {}
// data.dog_brands[0].types[0].volumes[0].name = "32oz"
// data.dog_brands[0].types[0].volumes[0].price = 9.99
// data.dog_brands[0].types[0].volumes[1].name = "64oz"
// data.dog_brands[0].types[0].volumes[1].price = 17.99