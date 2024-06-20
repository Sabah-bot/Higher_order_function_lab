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

// EXTENSION Attepmted: Can find the most common cuisine type
ScranAdvisor.prototype.findMostCommonCuisine = function() {
    // loop through each resturant 
    // loop through the cusisines
    // count the instances of the cuisiine as a i go 
    // store these values....object/dictionary
    
    const cuisineCounter = {}; 
    this.restaurants.forEach(restaurant => {
        restaurant.cuisines.forEach(cuisine => {
            if (cuisineCounter[cuisine]){
                cuisineCounter[cuisine]++;
            } else{
                cuisineCounter[cuisine] = 1;
            }
        })
    })
    
    // returnthe cuisine with the most tallies 
    const mostCommonCuisine = Object.keys(cuisineCounter).reduce((trackingCuisine, nextCuisine) => cuisineCounter(trackingCuisine) > cuisineCounter[nextCuisine]? trackingCuisine : nextCuisine);
    return mostCommonCuisine;
}



// EXTENSION:Can find restaurant with substring






