const dogsRouter = require('express').Router();

const dogs = [
  { name: 'Rex', age: 4 },
  { name: 'Spot', age: 3 },
];

dogsRouter.get('/', (req, res) => {
  res.json(dogs);
});
