var toppings = [];
var currentCost = 0;

function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  currentCost = 10
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
  var toppings = $('input:checkbox:checked').map(function(){
    return $(this).val();
  }).get();
  console.log(size, crust, toppings);

  var newPizza = new Pizza(size, crust, toppings);
  console.log(newPizza);

  var cost = newPizza.cost();
  console.log(cost);

  $("#insertOrder").show();
  });
});
