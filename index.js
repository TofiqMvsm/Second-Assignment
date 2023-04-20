function dishes(recipe, availableIng) {
    let maxDishes =Infinity;

   Object.keys(recipe).map(ingredient=>{
    if(availableIng.hasOwnProperty(ingredient)){
        const maxIngDishes = Math.floor(availableIng[ingredient]/recipe[ingredient])
        maxDishes = Math.min(maxDishes,maxIngDishes)
    }
    else{
        maxDishes = 0;
    }

   
   })
   return maxDishes
  }


  console.log(dishes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))