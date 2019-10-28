////////////////////////////////////////////////////
/////// OBJECT DESTRUCTURING
////////////////////////////////////////////////////

//Let's assume an object
const person = {
    name: 'Jean-Claude',
    age: 40,
    location: {
        city: 'Brussels',
        temp: 18
    }
};

// We can print
console.log(`${person.name} is ${person.age}.`);

// We can also do 
//   const name = person.name;
//   const age = person.age;
//   console.log(`${name} is ${age}.`);

// We can also now write this which does exactly the same thing on one line
// Note that we cannot change the variable names as they need to be related to the object attributes (name, age in this case)
//   const { name, age } = person;
//   console.log(`${name} is ${age}.`);

// Let's assume we want to verify if those exist

//   if (person.location.city && person.location.temp) {
//       console.log(`It's ${person.location.temp} in ${person.location.city}.`);
//   }

// can be re-written using a destructuring object
//   const { city , temp } = person.location;
//   if (city && temp) {
//       console.log(`It's ${temp} in ${city}.`);
//   }

// We can rename the variable that is created
  const { city , temp: temperature } = person.location;
  if (city && temperature) {
      console.log(`It's ${temperature} in ${city}.`);
  }

// We can set defaults to be used if the object does not have the attribute we are looking for
// we can rename at the same time
const { name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'self-published'} = book.publisher;

console.log(publisherName);




////////////////////////////////////////////////////
/////// ARRAY DESTRUCTURING
////////////////////////////////////////////////////

const address = ['999 streetname', 'Brussels', 'Belgium', '1234'];

// This is possible but is not very clear
// We could also create one variable for each item in the array we need, but it is not very scalable
console.log(`You are in ${address[1]} ${address[2]}.`);

// So we can destructure : we use square brackets
// Because a table has no "named" reference to be used as with objects, the match is done by position
//   const [ street, town, country, zip ] = address;
//   console.log(`You are in ${town} ${country}.`);

// We do not have to destructure all items, in this case we just leave an empty space in the destructuring table
// This means we have to put the comas !
// It is also possible to set a default
const [ , town, country = 'Belgium', ] = address;
console.log(`You are in ${town} ${country}.`);

const item = ['Coffee (hot)', '€2.00', '€2.50', '€2.75'];

const [ itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);