// Business Logic

function PizzaPie(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}



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
  if(this.topping1 === "topping1") {
    this.price += 20;
  } 
  if(this.topping2 === "topping2") {
    this.price += 25;
  } 
  if(this.topping3 === "topping3") {
    this.price += 30;
  }
  return this.price
}

// UI logic

$(document).ready(function() {
  $("#pie").submit(function(event) {
    event.preventDefault();
    const pieSize = $("#size").val();
    const topping1 = $(".topping1").val();
    const topping2 = $(".topping2").val();
    const topping3 = $(".topping3").val();

    let userPie = new PizzaPie(pieSize, topping1, topping2, topping3)
    userPie.sizePie();
    userPie.myToppings();
    $("#pizza-price").text(`The price of your pizza is $${userPie.price}.00 dollars. Thank you for choosing the E-pizza parlor!`)
  })
})