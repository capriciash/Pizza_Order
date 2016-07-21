var toppings = [];

function Pizza(size, crust, toppings, cost) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  currentCost = 10
  if (this.size === "medium") {
    currentCost += 2;
  } else if (this.size === "large"){
    currentCost += 4;
  } else if (this.size === "extra large") {
    currentCost += 6;
  }
  if (this.crust === "garlic") {
    currentCost += 1;
  } else if (this.crust === "stuffed") {
    currentCost += 3;
  } else if (this.crust === "gluten") {
    currentCost +=4;
  }
  //Add foreach loop to deal with toppings
  return currentCost;
}

// jQuery
$(document).ready(function() {
  $("form#order").submit(function(event) {
  event.preventDefault();
//reset order on page  $("#idfordisplayonpage").text("");
  var size = $("#size").val();
  var crust = $("#crust").val();
  var toppings = foreach
//turn into loop to input into array  var toppings = $("input:radio[name=time]:checked").val();


  var newPizza = new Pizza(size, crust, toppings);
  console.log (newTicket);

  var cost = newPizza.cost();

  $("#insertOrder").show();
  });
});
