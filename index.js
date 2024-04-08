// Setting up server
const express = require('express');
const app = express();

PORT = 8080;

app.listen(PORT, () => {
  console.log(`Currently in port: ${PORT}`);
});


// "database"
const pets = [
  {
    id: 1,
    name: "Spark",
    owner: "Sam"
  },
  {
    id: 2,
    name: "Bin",
    owner: "Becky"
  },
  {
    id: 3,
    name: "Love",
    owner: "Laura",
  },
  {
    id: 4,
    name: "Lee",
    owner: "Laura" 
  },
  {
    id: 5,
    name: "Car",
    owner: "Cat"
  }
];


// Retrieve and display all pets from the "database"
app.get('/api/v1/pets', (req, res) => {

  res.send(pets);
});

// Retrieve and display requested from the "database" using params
app.get('/api/v1/pets/:petname', (req, res) => {
  const { petname } = req.params;
  const foundPet = pets.filter((pet) => {
    return pet.name === petname;
  });

  res.send(foundPet);
});

// Retrieve and display requested pets from the "database" using query
app.get('/api/v1/pets-query', (req, res) => {
//  let foundOwner = pets;

//  const { person } = req.query;

 const foundOwner = pets.filter((owner) => {
    return owner.owner === req.query.person;
  })

 res.send(foundOwner)
});