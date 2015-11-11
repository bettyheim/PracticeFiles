var animals = ['puppy', 'kitten', 'penguin', 'muskrat', 'hippo', 'baboon']

var moreAnimals = [
  {
    type: 'canine',
    legs: 4,
    eyes: 2,
    teeth: ['sharp']
  },
  {
    type: 'cat',
    legs: 4,
    eyes: 2,
    teeth: ['sharp']
  },
  {
    type: 'bird',
    legs: 2,
    eyes: 2,
    teeth: [],
    wings: true
  },
  {
    type: 'rodent',
    legs: 4,
    eyes: 2,
    teeth: ['pointy']
  },
  {
    type: 'large mammal',
    legs: 4,
    eyes: 2,
    teeth: ['blunt']
  },
  {
    type: 'ape',
    legs: 2,
    eyes: 2,
    teeth: ['sharp', 'blunt']
  }
]

// i = 0;

// while( i < animals.length) {
//   console.log(animals[i++])
// }

// console.log ('hello');

// for (var i = 0; i < animals.length; i++) {
//   console.log(animals[i])
// };

// animals.forEach(function (elem) {
//   console.log(elem)
// })

i = 0;
while(i < moreAnimals.length) {
  console.log(moreAnimals[i].type);
  i++;
}