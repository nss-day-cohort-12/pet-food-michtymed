


var dogRequest = new XMLHttpRequest();

dogRequest.addEventListener("progress", dogFoodChunksArrive);
dogRequest.addEventListener("error", dogFoodXHRFails);
dogRequest.addEventListener("load", dogFoodLoaded);
dogRequest.open("GET", "dogFood.json");
dogRequest.send();

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
		console.log(this.responseText);
		var data = JSON.parse(this.responseText);
		console.log(data);

		var dogBrandArray = data.dog_brands;
		for (var i = 0; i < dogBrandArray.length; i++) {
			var brandsObject = dogBrandArray[i];
			var dogBrand = brandsObject.name;
			console.log(dogBrand);
			dogString += `<div class="dog-card"><h2>${dogBrand}</h2>`
			var brandTypesArray = brandsObject.types;
			console.log(brandTypesArray);
				for (var j = 0; j< brandTypesArray.length; j++) {
					var brandType = brandTypesArray[j].type;
					console.log(brandType);
					dogString += `<h4>${brandType}</h4><ul>`
					var volumesArray = brandTypesArray[j].volumes;
					console.log(volumesArray);
						for (var k = 0; k < volumesArray.length; k++) {
							var volumeName = volumesArray[k].name;
							console.log(volumeName);
							dogString += `<li>${volumeName} for `;
							var volumePrice = volumesArray[k].price;
							console.log(volumePrice);
							dogString += `$${volumePrice}</li>`
						}
				dogString += `</ul>`;
				}
			dogString += `</div>`;	
		}
		contentEl.innerHTML = dogString;
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


