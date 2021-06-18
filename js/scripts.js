// Business Logic

function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}


let testPizza = new PizzaPie("small", "topping")

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
  if(this.toppings === "topping") {
    this.price += 20;
  }
  return this.price
}

// UI logic

$(document).ready(function() {
  $("#pie").submit(function(event) {
    event.preventDefault();
    const pieSize = $("#size").val();
    const pieToppings = $(".topping").val();

    let userPie = new PizzaPie(pieSize, pieToppings)
    userPie.sizePie();
    userPie.myToppings();
    $("#pizza-price").text(userPie.price)
  })
})