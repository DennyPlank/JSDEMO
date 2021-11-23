const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}

// Array of tacos
const tacos = [taco, taco1, taco2]


// write a function that takes an taco OBJ and a id 
// and returns a new object with name changed to "changed"

const changeName = (id, name) => {
  let newTaco = []
  const updateName = tacos.map((place) => {
    if (place.id !== id) {
    } else {
      newTaco = { ...place, name: name};
    }
  }); return newTaco
};
// let x = changeName(1, 'String Here')
// console.log(x)


// write a function that takes aa taco OBJ and returns some
// formatted html (will be a string technically)
const someInfoHere = (places) => {
return places.map((place) => {
  return `${place.name} costs $${place.price} and people say it is ${place.about}`
  });
};
// let y = someInfoHere(tacos)
// console.log(y)


// write a function that takes an taco OBJ and return formatted price with .00 
const findPrice = (place) => {
 let newPrice = place.price.toFixed(2)
 return `The price for ${place.name} is $${newPrice}`;
};
// x = findPrice(taco1)
// console.log(x)


// create a new array where all of the prices is formatted with .00
const findAllPrices = (places) => {
  return places.map ((place) => {
    let newPrice = place.price.toFixed(2)
    return `The price for ${place.name} is $${newPrice}`;
  });
 };
//  x = findAllPrices(tacos)
//  console.log(x)

// write a function that takes an array and logs each item in the array

// hint forEach
const allItems = (arr) => {
  return arr.forEach ((item)=> {
    console.log(`The ${item.name} has been logged`)
  });
};
//allItems(tacos)

// use the find method to return the object with id:1
const findItemID1 = (array) => {
  return array.find ((place) => {
    if (place.id === 1){
      return place
    }
  });
};
// x = findItemID1(tacos)
// console.log(x)

// return a new array with all prices greater than 19
const returnAbove19 = (array) => {
  return array.filter ((place)=> {
    if (place.price > 19) {
      return place
    } else {}
  })
}
// x = returnAbove19(tacos)
// console.log(x)

// return a new array with a info key where it is a combo of
// name, price, and about
const newArray = (place) => {
  return 
}




///CRUD

// don't change tacos array or change objects




// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own