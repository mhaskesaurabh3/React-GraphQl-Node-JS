const UserList = [
  {
    id: 1,
    name: 'John',
    age: 20,
    nationality: 'AMERICAN',
    friends: [
      {
        id: 2,
        name: 'Pedro',
        age: 20,
        nationality: 'IRISH',
      },
      {
        id: 3,
        name: 'Sarah',
        age: 25,
        nationality: 'INDIAN',
      },
    ],
  },
  {
    id: 2,
    name: 'Pedro',
    age: 20,
    nationality: 'IRISH',
  },
  {
    id: 3,
    name: 'Sarah',
    age: 25,
    nationality: 'INDIAN',
    friends: [
      {
        id: 2,
        name: 'Pedro',
        age: 20,
        nationality: 'IRISH',
      },
    ],
  },
  {
    id: 4,
    name: 'Rafe',
    age: 60,
    nationality: 'FRENCH',
  },
  {
    id: 5,
    name: 'Kelly',
    age: 5,
    nationality: 'RUSSIAN',
  },
];

const MovieList = [
  {
    id: 1,
    name: 'Avengers Endgame',
    yearOfPublication: 2019,
    isInTheatres: true,
  },
  {
    id: 2,
    name: 'Interstellar',
    yearOfPublication: 2007,
    isInTheatres: true,
  },
  {
    id: 3,
    name: 'Superbad',
    yearOfPublication: 2009,
    isInTheatres: true,
  },
  {
    id: 4,
    name: 'PedroTech The Movie',
    yearOfPublication: 2035,
    isInTheatres: false,
  },
];

module.exports = { UserList, MovieList };
