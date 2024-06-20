const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
};


// Count the number of restaurants that we have stored
ScranAdvisor.prototype.countRestaurants = function (restaurants) {
    const count = this.restaurants.length;
    return count;
};


// // Find a restaurant by its name (full name)

ScranAdvisor.prototype.findRestaurantByName = function(name) {
    return this.restaurants.find(restaurant => restaurant.name === name);
};


// // Return an array containing each restaurant's name

ScranAdvisor.prototype.getAllRestaurantNames = function() {
    return this.restaurants.map(restaurant => restaurant.name);
};

// // Find all the restaurants from a given city (pass in the city name, e.g. "Glasgow" should return 4 restaurants)

ScranAdvisor.prototype.findRestaurantsByCity = function(city) {
    const restaurantsInCity = this.restaurants.filter(restaurant => restaurant.location.town === city);
    console.log(`Restaurants in ${city}:`, restaurantsInCity);
    return restaurantsInCity;
};

module.exports = ScranAdvisor;

ScranAdvisor.prototype.mostCommonCuisine = function (){
    // for each restaurant loop through the cusines, counting as we go
    const cuisineCounter = {};
    // for each restaurant
    this.restaurants.forEach(restaurant => {
        //  loop through the cuisines
        restaurant.cuisines.forEach(cuisine => {
            // if the cuisine is in the object, add 1 to the tally
            if(cuisineCounter[cuisine]){ // if "JAPANESE exists"
                cuisineCounter[cuisine]++; // add 1 to it
            } else { // if it doesn't exist...
                cuisineCounter[cuisine] = 1; // ... create JAPANESE: 1
            }
        })
    })

    // Return the Cuisine with the most tallies
    // loop though all the keys in the cuisineCounter, extracting the value
    // x is the accumulator
    const mostCommonCuisine = Object.keys(cuisineCounter).reduce((x, y) => cuisineCounter[x] > cuisineCounter[y] ? x : y);

    return mostCommonCuisine;
}

ScranAdvisor.prototype.search = function(searchTerm) {
    return this.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm));
}

module.exports = ScranAdvisor;

