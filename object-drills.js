'use strict';
/*
Object drills

1. Object initializers and methods

Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
Use console.log to print the flour and water properties.
Add an empty method to the loaf object called hydration.
Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
Call the hydration method and use console.log to print the result.
*/

const loaf = {
  flour: 300,
  water: 210,
};
console.log(`Flour: ${loaf.flour}, Water: ${loaf.water}`);

const loaf2 = {
  flour: 300,
  water: 210,
  hydration: function() {}
};

const loaf3 = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/this.flour)*100;
  }
};
console.log('Hydration:', loaf3.hydration());


/*
 2. Iterating over an object's properties

Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value.
*/

const obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 100,
  quux: 400,
  spam: 'spam'
};

for(let key in obj) {
  console.log(`key: ${key}, value: ${obj[key]}`);
}

/*
3. Arrays in objects

Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
Use console.log to show the name of a hobbit's fourth meal of the day.
Don't forget that humans and hobbits count from 1, but computers count from 0.
*/

const mealObject = {
  meals: [
    'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'
  ],
};
console.log(`hobbit's 4th meal of the day is ${mealObject.meals[3]}`);


/*
4. Arrays of objects

Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name.
*/

const objArray = [
  {
    name: 'David',
    jobTitle: 'Thinkful student'
  },
  {
    name: 'Kevin',
    jobTitle: 'Also Thinkful student'
  },
  {
    name: 'Luke',
    jobTitle: 'Jedi'
  }
];
for(let i=0;i<objArray.length;i++) {
  const employee = objArray[i];
  console.log(`name: ${employee.name}, jobTitle: ${employee.jobTitle}`);
}

/*
5. Properties that aren't there

Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.
*/

const company = [
  {
    name: 'David',
    jobTitle: 'Thinkful student',
    boss: 'LucyBoss'
  },
  {
    name: 'Kevin',
    jobTitle: 'Thinkful student',
    boss: 'BillBoss'

  },
  {
    name: 'Luke',
    jobTitle: 'Jedi',
    boss: 'TedBoss'
  },
  {
    name: 'Fred',
    jobTitle: 'Founder'
  }
];
for(let i=0; i < company.length; i++) {
  const employee = company[i];
  if (!employee.boss){
    console.log(`${employee.jobTitle} ${employee.name} doesn't report to anyone`);
  } else {
    console.log (`${employee.jobTitle} ${employee.name} reports to ${employee.boss}`);
  }
}

//   console.log(`${jobTitle} ${name} ${employee.boss === true ? 'reports to ${employee.boss}'} ${boss} ${employee.boss} : ${jobTitle} ${name} doesn't report to anyone.`)
// }

//Reference from yesterday ? : method --
// console.log(The ${typeOfWarning} has triggered ${warningCounter} ${warningCounter === 1 ? 'time' : 'times'}.);

/*
6. Cracking the code

Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. Additionally, instead of having the function accept a single word, have the function accept a single string of words, and then return the fully decoded message.
A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

First letter	Character number
a	2
b	3
c	4
d	5
So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.
*/

function decode(words) {
  const cipher = {
    //these are the indexes we want.
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
  const wordsSplit = words.split(' ');
  const result = [];
  for(let i=0;i<wordsSplit.length;i++) {
    let firstLetter = wordsSplit[i].charAt(0);
    if(firstLetter in cipher) {
      //have a variable to find and get the letter you want.
      //the other way is to change the object on line 166. increment all by -1.
      result.push(wordsSplit[i].charAt(cipher[firstLetter]-1));
    } else {
      result.push(' ');
    }
  }
  return result.join('');
}
console.log(decode('craft block argon meter bells brown croon droop'));


/*
7. Factory Functions with LOTR

Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
===============================================================================================
| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
-----------------------------------------------------------------------------------------------
| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
-----------------------------------------------------------------------------------------------
| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
-----------------------------------------------------------------------------------------------
| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
-----------------------------------------------------------------------------------------------
| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
-----------------------------------------------------------------------------------------------
| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
-----------------------------------------------------------------------------------------------
Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

Add a new character to characters (make up any attributes not provided):

Arwen Undomiel is a Half-Elf of Rivendell
Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

What if you wanted to equip a weapon for each character and change how they are described? For example:

Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
Bilbo Baggings is a Hobbit of the Shire who uses the Ring
Frodo ... String and Barrow Blade
Aragon .... Anduril
Legolas ... Bow and Arrow
Arwen .... Hadhafang
How would you change the factory function and other methods?
*/


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
     name, nickname, race, origin, attack, defense,
     describe: function() {
       console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
     },
     evaluateFight: function(character) {
        let x = this.attack - character.defense;
        let y = character.attack - this.defense;
       if (this.defense > character.attack){
        y = 0;
       }
       if (character.defense > this.attack){
         x = 0;
       }
       console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
     }
  }
}



let Legolas = createCharacter('Legolas', 'nickname', 'monster', 'neverland', 7, 2);
Legolas.describe();
let Frodo = createCharacter('Frodo', 'nickname2', 'hobbit', 'shier', 8, 4)
Frodo.describe();
Frodo.evaluateFight(Legolas);
