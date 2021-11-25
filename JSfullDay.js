const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}

// Array of tacos
const tacos = [taco, taco1, taco2]


// write a function that takes an taco OBJ and a id 
// and returns a new object with name changed to "changed"

const changeID = (places, id) => {
  let newArr = []
  const returnArr = places.map ((place) => {
    if (place.id === id){
     newArr = { ...place, name: 'changed'}
    } 
  }); return newArr
}
// let x = changeID(tacos, 1)
// console.log(x)


// write a function that takes a taco OBJ and returns some
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
// Destructive way
const newArr1 = (places) => {
  return places.map((place) =>{
    place.price = place.price.toFixed(2)
  }); 
}; 

//Non-destructive way
const findAllPrices = (places) => {
  return places.map ((place) => {
    let newPrice = place.price.toFixed(2)
    return `The price for ${place.name} is $${newPrice}`;
  });
 };
//  x = findAllPrices(tacos)
//  console.log(x)


// write a function that takes an array and logs each item in the array
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
const returnOver19 = (places) => {
  return places.filter ((place)=>{
    if (place.price > 19)
    return place
  })
}
// x = returnOver19(tacos)
// console.log(x)

// return a new array with a info key where it is a combo of
// name, price, and about
const newArray = (place) => {
   newArr = {info: ""}
  newInfo = {name: place.name, price: place.price, about:place.about}
  newArr.info = newInfo
  return newArr
}
//  x = newArray(taco1)
//  console.log(x)


///CRUD
// Create (add a taco) 
const newPlace = (id, name, price, about) => {
  return newUser = {id: id, name: name, price: price, about: about}
}

// x = newUser(id, 'name', price, 'about')
// console.log(createUser(x))

// Read (array of obj to array of html) 
const readArray = (place) => {
  console.log(place)
}
// readArray(taco)


// Update (update a taco) 
const update = (place, aNewName) => {
  let newArr = { ...place, name: aNewName}
  return newArr;
}

// Remove (delete a taco) 
const deleteTaco = (places, id) => {
  let newArr = places.filter ((place)=>{
    return (place.id !== id);
  }); 
  return newArr
};


// bonus use reduce to return the sum of prices in tacos array
// using forEach
const returnSum = (places) => {
  let sum = 0
  places.reduce ((place)=>{
    sum = sum + place.price 
  }); return sum;
}
x = returnSum(tacos)
console.log(x)

// using .reduce  -Not Commplete-
const returnSum2 = (places) => {
  const equeation = places.reduce ((place)=>{
      return place.price.total
  })
}


