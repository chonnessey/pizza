# _E-Pizza Parlor_ :pizza:

#### _This project updates the price of a pizza depending on the options the user selects._


#### By _**Adrian Camacho**_

## Technologies Used :floppy_disk:

* _HTML_
* _CSS_
* _VS code_
* _Bootstrap_
* _JavaScript_
* _JQuery 3.6.0_

## Description :pencil:

_This application gives users the options to select the size of a pizza and toppings. It updates the price of the pizza depending on the size and toppings of the user's choosing._

## Specs :pushpin:
```
Describe: sizePie()

Test: It should add the price of the pizza by 50 if the user selects "small"
Code: 
let testPizza = new PizzaPie("small")
testPizza.sizePie()
Expected Output: 50

Test: It should add the price of the pizza by 100 if the user selects "medium"
Code: 
let testPizza = new PizzaPie("medium")
testPizza.sizePie()
Expected Output: 100

Test: It should add the price of the pizza by 150 if the user selects "large"
Code: 
let testPizza = new PizzaPie("large")
testPizza.sizePie()
Expected Output: 150

Test: It should add the price of the pizza by 150 if the user selects "family"
Code: 
let testPizza = new PizzaPie("family")
testPizza.sizePie()
Expected Output: 200

Describe: `myToppings()`

Test: It should add the price of the pizza by 20 if the user selects one topping.
Code: 
let testPizza = new PizzaPie("topping1")
testPizza.myToppings()`
Expected Output: `20`

Test: It should add the price of the pizza by 25 if the user selects two toppings.
Code: 
let testPizza = new PizzaPie("topping2")
testPizza.myToppings()
Expected Output: 25

Test: It should add the price of the pizza by 25 if the user selects three toppings.
Code: 
let testPizza = new PizzaPie("topping3")
testPizza.myToppings()
Expected Output: `30`
```


## Setup/Installation Requirements :triangular_ruler:

* Clone this repo: `git clone https://github.com/chonnessey/pizza.git`
* Navigate to directory `cd pizza`
* Open file into a text editor of your choosing.
* Open `index.html` in your browser.
* Choose a size and toppings for your pizza to see your price!


## Known Bugs :bug:

* _No Known Bugs._ 

## License :guardsman:

MIT &copy; 2021 _Adrian Camacho_

## Contact Information :mailbox:

_Adrian Camacho: adriancamacho18@gmail.com_