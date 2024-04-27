const catsRouter = require('express').Router();

const cats = [
  {
    id: 1,
    name: 'Morris',
    age: 2,
    breed: 'Tabby',
  },
  {
    id: 2,
    name: 'Paws',
    age: 1,
    breed: 'Siamese',
  },
];

catsRouter.get('/', (request, response) => {
  response.json(cats);
});

catsRouter.get('/:id', (request, response) => {
  const id = Number(request.params.id);
  const cat = cats.find((cat) => cat.id === id);

  if (cat) {
    response.json(cat);
  } else {
    response.status(404).end();
  }
});

catsRouter.post('/', (request, response) => {
  const cat = request.body;
  cat.id = Math.floor(Math.random() * 10000);
  cats.push(cat);
  response.json(cat);
});

catsRouter.put('/:id', (request, response) => {
  const id = Number(request.params.id);
  const newCat = request.body;

  cats = cats.map((cat) => (cat.id !== id ? cat : newCat));

  response.json(newCat);
});

catsRouter.delete('/:id', (request, response) => {
  const id = Number(request.params.id);
  cats = cats.filter((cat) => cat.id !== id);

  response.status(204).end();
});

module.exports = catsRouter;
