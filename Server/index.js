const express = require("express");
const cors = require("cors");
const port = 3300;
const app = express();

app.use(cors());

const animal = ["elephant", "zebra", "bear", "horse"];

const isAnimal = (req, res, next) => {
  //return true or false if animal is in list
  let animalInput = req.query.q;
  let payload = {};
  for (let i = 0; i < animal.length; i++) {
    let arrIn = animal[i];
    if (animalInput === arrIn) {
      return res.json({
        status: "success",
        message: true,
      });
    }
  }
  res.json({
    status: "failed",
    message: false,
  });
};

app.get("/animal", isAnimal);

const generateSpread = (req, res, next) => {
  let floor = parseInt(req.query.floor);
  let ceiling = parseInt(req.query.ceil);
  let arr = [];
  for (let i = floor; i <= ceiling; i++) {
    arr.push(i);
  }
  let random = Math.floor(Math.random() * arr.length);
  let randNum = arr[random];
  res.json({
    arr: arr,
    num: randNum,
    floor: floor,
    ceiling: ceiling,
  });
};

app.get("/random/", generateSpread);

let people = ["xavier", "michelle", "corey", "reed", "ann"];

const handleQueue = (req, res, next) => {
  console.log(req.params);
  let action = req.params.action;
  let name = req.query.name;
  let person;
  if (action === "peek") {
    person = people[people.length - 1];
  }
  if (action === "enqueue") {
    people.push(name);
  }
  if (action === "dequeue") {
    let index = people.indexOf(name);
    delete people[index];
  }

  res.json({
    status: "success",
    data: person,
    people: people,
  });
};

app.get("/queue/:action", handleQueue);

app.listen(port, () => {
  console.log(`server on ${port}`);
});
