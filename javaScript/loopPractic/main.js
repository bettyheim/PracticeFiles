var animals = ['puppy', 'kitten', 'penguin', 'muskrat', 'hippo', 'baboon']

var moreAnimals = [
  {
    type: 'canine',
    legs: 4,
    eyes: 2,
    teeth: 'sharp'
  },
  {
    type: 'cat',
    legs: 4,
    eyes: 2,
    teeth: 'sharp'
  },
  {
    type: 'bird',
    legs: 2,
    eyes: 2,
    teeth: 'none',
    wings: true
  },
  {
    type: 'rodent',
    legs: 4,
    eyes: 2,
    teeth: 'pointy'
  },
  {
    type: 'large mammal',
    legs: 4,
    eyes: 2,
    teeth: 'blunt'
  },
  {
    type: 'ape',
    legs: 2,
    eyes: 2,
    teeth: 'sharp and blunt'
  }
]

 var len = animals.length;

// while (len--) {
//   console.log(animals[len])
// }

// for (i = 0; i < len; i++) {
//   console.log(animals[i]);
// }

// animals.forEach(function (elem) {
//   console.log(elem);
// })

var objLen = moreAnimals.length;

// while (objLen--) {
//   console.log(moreAnimals[objLen].type)
// }

// for (i = 0; i < objLen; i++) {
//   console.log(moreAnimals[i].type)
// }

// moreAnimals.forEach(function (elem) {
//   console.log(elem.type);
// })

// while (objLen--) {
//   if (moreAnimals[objLen].legs > 2) {
//     console.log(moreAnimals[objLen].type) 
//   }
// }

// for (i = 0; i < objLen; i++) {
//   if (moreAnimals[i].legs > 2) {
//     console.log(moreAnimals[i].type);
//   }
// }

moreAnimals.forEach(function (elem) {
  if (elem.legs > 2) {
    console.log(elem.type);
  }
})