var Button = document.querySelector(".button-container");
var wholeWheatBun = 10;
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderPrice();
}

function renderPatty() {
  let patty = document.getElementById("patty");
  patty.style.display = state.Patty ? "inherit" : "none";
}

function renderCheese() {
  let cheese = document.getElementById("cheese");
  cheese.style.display = state.Cheese ? "inherit" : "none";
}

function renderTomatoes() {
  let tomatoe = document.getElementById("tomato");
  tomatoe.style.display = state.Tomatoes ? "inherit" : "none";
}

function renderOnions() {
  let onion = document.getElementById("onion");
  onion.style.display = state.Onions ? "inherit" : "none";
}

function renderLettuce() {
  let lettuce = document.getElementById("lettuce");
  lettuce.style.display = state.Lettuce ? "inherit" : "none";
}

document.querySelector(".btn-patty").onclick = function() {
  state.Patty = !state.Patty;
  PricePatty();
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function() {
  state.Cheese = !state.Cheese;
  PriceCheese();
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function() {
  state.Tomatoes = !state.Tomatoes;
  PriceTomatoes();
  renderAll();
};

document.querySelector(".btn-onions").onclick = function() {
  state.Onions = !state.Onions;
  PriceOnions();
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function() {
  state.Lettuce = !state.Lettuce;
  PriceLettuce();
  renderAll();
};

function renderButtons() {
  PopPatty();
  PopCheese();
  PopLettuce();
  PopOnion();
  PopTomatoes();
}

function PopPatty() {
  document.querySelector(".btn-patty").classList.toggle("active", state.Patty);
}

function PopTomatoes() {
  document.querySelector(".btn-tomatoes").classList.toggle("active", state.Tomatoes);
}

function PopCheese() {
  document.querySelector(".btn-cheese").classList.toggle("active", state.Cheese);
}

function PopOnion() {
  document.querySelector(".btn-onions").classList.toggle("active", state.Onions);
}

function PopLettuce() {
  document.querySelector(".btn-lettuce").classList.toggle("active", state.Lettuce);
}
var Costs = 0;
function renderPrice() {
  document.querySelector(".TotalCost").textContent = Costs + wholeWheatBun;
}

function PricePatty() {
  Costs += state.Patty ? ingredients.Patty : -ingredients.Patty;
}

function PriceTomatoes() {
  Costs += state.Tomatoes ? ingredients.Tomatoes : -ingredients.Tomatoes;
}

function PriceOnions() {
  Costs += state.Onions ? ingredients.Onions : -ingredients.Onions;
}

function PriceCheese() {
  Costs += state.Cheese ? ingredients.Cheese : -ingredients.Cheese;
}

function PriceLettuce() {
  Costs += state.Lettuce ? ingredients.Lettuce : -ingredients.Lettuce;
}
