Describe: `sizePie()`

Test: It should add the price of the pizza by 50 if the user selects "small"
Code: 
`let testPizza = new PizzaPie("small")`
`testPizza.sizePie()`
Expected Output: `50`

Test: It should add the price of the pizza by 100 if the user selects "medium"
Code: 
`let testPizza = new PizzaPie("medium")`
`testPizza.sizePie()`
Expected Output: `100`

Test: It should add the price of the pizza by 150 if the user selects "large"
Code: 
`let testPizza = new PizzaPie("large")`
`testPizza.sizePie()`
Expected Output: `150`

Test: It should add the price of the pizza by 150 if the user selects "family"
Code: 
`let testPizza = new PizzaPie("family")`
`testPizza.sizePie()`
Expected Output: `200`

Describe: `myToppings()`

Test: It should add the price of the pizza by 20 if the user selects one topping.
Code: 
`let testPizza = new PizzaPie("topping1")`
`testPizza.myToppings()`
Expected Output: `20`

Test: It should add the price of the pizza by 25 if the user selects two toppings.
Code: 
`let testPizza = new PizzaPie("topping2")`
`testPizza.myToppings()`
Expected Output: `25`

Test: It should add the price of the pizza by 25 if the user selects three toppings.
Code: 
`let testPizza = new PizzaPie("topping3")`
`testPizza.myToppings()`
Expected Output: `30`