// Business Logic

function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}


let testPizza = new PizzaPie("large",)

PizzaPie.prototype.sizePie = function() {
  let pieSize = this.size
  if(pieSize === "small") {
    this.price += 50;
  } else if(pieSize === "medium") {
    this.price += 100;
  } else if(pieSize === "large") {
    this.price += 150;
  }
  return this.price;
}