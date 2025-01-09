let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");
let counter4 = document.getElementById("counter4");
let counter5 = document.getElementById("counter5");
let counter6 = document.getElementById("counter6");
let counter7 = document.getElementById("counter7");
let counter8 = document.getElementById("counter8");
let counter9 = document.getElementById("counter9");
let cartQuant1 = document.getElementById("cartQuantity1");
let cartQuant2 = document.getElementById("cartQuantity2");
let cartQuant3 = document.getElementById("cartQuantity3");
let cartQuant4 = document.getElementById("cartQuantity4");
let cartQuant5 = document.getElementById("cartQuantity5");
let cartQuant6 = document.getElementById("cartQuantity6");
let cartQuant7 = document.getElementById("cartQuantity7");
let cartQuant8 = document.getElementById("cartQuantity8");
let cartQuant9 = document.getElementById("cartQuantity9");

function btn(value) {
  if (value === "btn1") {
    counter1.classList.add("counterVis");
    counter1.classList.remove("counter");
    btn1.classList.add("addToCartInv");
    cartQuant1.innerHTML = 1;
  } else if (value === "btn2") {
    counter2.classList.add("counterVis");
    counter2.classList.remove("counter");
    btn2.classList.add("addToCartInv");
    cartQuant2.innerHTML = 1;
  } else if (value === "btn3") {
    counter3.classList.add("counterVis");
    counter3.classList.remove("counter");
    btn3.classList.add("addToCartInv");
    cartQuant3.innerHTML = 1;
  } else if (value === "btn4") {
    counter4.classList.add("counterVis");
    counter4.classList.remove("counter");
    btn4.classList.add("addToCartInv");
    cartQuant4.innerHTML = 1;
  } else if (value === "btn5") {
    counter5.classList.add("counterVis");
    counter5.classList.remove("counter");
    btn5.classList.add("addToCartInv");
    cartQuant5.innerHTML = 1;
  } else if (value === "btn6") {
    counter6.classList.add("counterVis");
    counter6.classList.remove("counter");
    btn6.classList.add("addToCartInv");
    cartQuant6.innerHTML = 1;
  } else if (value === "btn7") {
    counter7.classList.add("counterVis");
    counter7.classList.remove("counter");
    btn7.classList.add("addToCartInv");
    cartQuant7.innerHTML = 1;
  } else if (value === "btn8") {
    counter8.classList.add("counterVis");
    counter8.classList.remove("counter");
    btn8.classList.add("addToCartInv");
    cartQuant8.innerHTML = 1;
  } else if (value === "btn9") {
    counter9.classList.add("counterVis");
    counter9.classList.remove("counter");
    btn9.classList.add("addToCartInv");
    cartQuant9.innerHTML = 1;
  }
}

btn1.addEventListener("click", () => {
  btn("btn1");
});

btn2.addEventListener("click", () => {
  btn("btn2");
});

btn3.addEventListener("click", () => {
  btn("btn3");
});

btn4.addEventListener("click", () => {
  btn("btn4");
});

btn5.addEventListener("click", () => {
  btn("btn5");
});

btn6.addEventListener("click", () => {
  btn("btn6");
});

btn7.addEventListener("click", () => {
  btn("btn7");
});

btn8.addEventListener("click", () => {
  btn("btn8");
});

btn9.addEventListener("click", () => {
  btn("btn9");
});

let cartQuantity = 1;

function increase(param) {
  if (param === "add1") {
    cartQuant1.innerHTML = cartQuantity++;
  } else if (param === "add2") {
    cartQuant2.innerHTML = cartQuantity++;
  } else if (param === "add3") {
    cartQuant3.innerHTML = cartQuantity++;
  } else if (param === "add4") {
    cartQuant4.innerHTML = cartQuantity++;
  } else if (param === "add5") {
    cartQuant5.innerHTML = cartQuantity++;
  } else if (param === "add6") {
    cartQuant6.innerHTML = cartQuantity++;
  } else if (param === "add7") {
    cartQuant7.innerHTML = cartQuantity++;
  } else if (param === "add8") {
    cartQuant8.innerHTML = cartQuantity++;
  } else if (param === "add9") {
    cartQuant9.innerHTML = cartQuantity++;
  }
}

function decrease() {
  cartQuant.innerHTML = cartQuantity--;
}

const add1 = () => {
  console.log("click");
  increase("add1");
};

const sub1 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add2 = () => {
  console.log("click");
  increase("add2");
};

const sub2 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add3 = () => {
  console.log("click");
  increase();
};

const sub3 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add4 = () => {
  console.log("click");
  increase();
};

const sub4 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add5 = () => {
  console.log("click");
  increase();
};

const sub5 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add6 = () => {
  console.log("click");
  increase();
};

const sub6 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add7 = () => {
  console.log("click");
  increase();
};

const sub7 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add8 = () => {
  console.log("click");
  increase();
};

const sub8 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};

const add9 = () => {
  console.log("click");
  increase();
};

const sub9 = () => {
  console.log("click");
  if (cartQuantity === 0) {
    btn1.classList.add("addToCart");
    counter1.classList.remove("counterVis");
    counter1.classList.add("counter");
    btn1.classList.remove("addToCartInv");
  } else if (cartQuantity > 0) {
    decrease();
  }
};
