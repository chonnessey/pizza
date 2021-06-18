// Business Logic

function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}


let testPizza = new PizzaPie("small", "1")

PizzaPie.prototype.sizePie = function() {
  let pieSize = this.size
  if(pieSize === "small") {
    this.price += 50;
  } else if(pieSize === "medium") {
    this.price += 100;
  } else if(pieSize === "large") {
    this.price += 150;
  } else if(pieSize === "family") {
    this.price += 200;
  } else {
    this.price += 0;
  }
  return this.price;
}

PizzaPie.prototype.myToppings = function() {
  let toppingArray = []
  const toppings = this.toppings
  toppings.forEach(function(topping) {
    toppingArray.push(topping)
    if(topping === "1") {
      this.price += 20
    }
  })
  return this.price;
}