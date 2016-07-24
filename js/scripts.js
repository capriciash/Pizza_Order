var toppings = [];
var currentCost = 10;
var totalCost = 0;
var numToppings = 0;

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

function resetValues() {
  toppings = [];
  currentCost = 10;
  totalCost = 0;
  numToppings = 0;
}

Pizza.prototype.numToppings = function () {
  numToppings = this.toppings.length;
}

Pizza.prototype.costCalculator = function() {
  if (this.size === "Medium") {
    currentCost += 2;
  } else if (this.size === "Large"){
    currentCost += 4;
  } else if (this.size === "Extra Large") {
    currentCost += 6;
  }
  if (this.crust === "Garlic Butter") {
    currentCost += 1;
  } else if (this.crust === "Stuffed with Cheese") {
    currentCost += 3;
  } else if (this.crust === "Gluten Free") {
    currentCost +=4;
  }
  numToppings *= 2;
  currentCost += numToppings;
  return currentCost;
}

// jQuery
$(document).ready(function() {
  $("form#order").submit(function(event) {
  event.preventDefault();
  $("#insertOrder").text("");
  resetValues();

  var size = $("#size").val();
  var crust = $("#crust").val();
  var toppings = $('input:checkbox:checked').map(function(){
    return $(this).val();
  }).get();

  var newPizza = new Pizza(size, crust, toppings);

  newPizza.numToppings();

  totalCost = newPizza.costCalculator();

  $("ul#insertOrder").append("<li>Size: <em>" + newPizza.size + "</em></li>" +
  "<li>Crust: <em>" + newPizza.crust + "</em></li>" +
  "<li>Toppings: <em>" + newPizza.toppings + "</em></li>" +
  "<li>Cost: <em>$" + totalCost + "</em></li>"
  );

  $("#insertOrder").show();

  });
});
