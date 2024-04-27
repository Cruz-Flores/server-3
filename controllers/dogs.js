const dogsRouter = require('express').Router();

const dogs = [
  {id :1, name: 'Rex', age: 4 },
  {id:2, name: 'Spot', age: 3 },
];

dogsRouter.get('/', (req, res) => {
  res.json(dogs);
});

dogsRouter.get('/:id', (req, res) =>{
 const id = req.params.id;
 const dog = dogs.find((dog) => dog.id === Number(id));
 res.json(dog);
})

module.exports = dogsRouter;