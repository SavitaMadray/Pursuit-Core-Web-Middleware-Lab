document.addEventListener("DOMContentLoaded", () => {
  animalBtn();
  numBtn();
  peekBtn();
  enqueueBtn();
  dequeueBtn();
});

const animalBtn = () => {
  let animalBtn = document.querySelector("#animalBtn");
  animalBtn.addEventListener("click", () => {
    getAnimal();
  });
};

const getAnimal = async () => {
  let input = document.querySelector("#text");
  inputVal = input.value;
  let url = `http://localhost:3300/animal/?q=${inputVal}`;
  try {
    let response = await axios.get(url);
    console.log(url);
    let data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const numBtn = () => {
  let numBtn = document.querySelector("#numBtn");
  numBtn.addEventListener("click", () => {
    getNum();
  });
};

const getNum = async () => {
  let floor = document.querySelector("#floor");
  floorVal = floor.value;
  let ceiling = document.querySelector("#ceiling");
  ceilingVal = ceiling.value;
  let url = `http://localhost:3300/random/?floor=${floorVal}&ceil=${ceilingVal}`;

  try {
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
    displayNums(data);
  } catch (err) {
    console.log(err);
  }
};

const displayNums = (data) => {
  const displayNum = document.querySelector("#displayNum");
  const arrP = document.createElement("p");
  arrP.innerText = `Array = [${data.arr}]`;
  const floorP = document.createElement("p");
  floorP.innerText = `Floor = ${data.floor}`;
  const ceilP = document.createElement("p");
  ceilP.innerText = `Ceiling = ${data.ceiling}`;
  const randNumP = document.createElement("p");
  randNumP.innerText = `Random Number = ${data.num}`;
  displayNum.append(arrP, floorP, ceilP, randNumP);
};

const peekBtn = () => {
  let peekBtn = document.querySelector("#peek");
  peekBtn.addEventListener("click", () => {
    getPeek();
  });
};

const enqueueBtn = () => {
  let enqueueBtn = document.querySelector("#enqueue");
  enqueueBtn.addEventListener("click", () => {
    getEnqueue();
  });
};

const dequeueBtn = () => {
  let dequeueBtn = document.querySelector("#dequeue");
  dequeueBtn.addEventListener("click", () => {
    getDequeue();
  });
};

const getPeek = async () => {
  let url = `http://localhost:3300/queue/peek`;
  try {
    let response = await axios.get(url);
    console.log(url);
    let data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const getEnqueue = async () => {
  let input = document.querySelector("#text2");
  let inputVal = input.value;
  let url = `http://localhost:3300/queue/enqueue/?name=${inputVal}`;
  try {
    let response = await axios.get(url);
    console.log(url);
    let data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const getDequeue = async () => {
  let input = document.querySelector("#text2");
  let inputVal = input.value;
  let url = `http://localhost:3300/queue/dequeue/?name=${inputVal}`;
  try {
    let response = await axios.get(url);
    console.log(url);
    let data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
