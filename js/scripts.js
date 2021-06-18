// Business Logic

function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}


let testPizza = new PizzaPie("small",)

PizzaPie.prototype.sizePie = function() {
  let pieSize = this.size
  if(pieSize === "small") {
    this.price += 50;
  }
  return this.price;
}