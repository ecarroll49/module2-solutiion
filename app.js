(function () {
'use strict';

angular.module('CheckShoppingListApp', [])
.controller('BoughtController', BoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListService', ShoppingListService);

BoughtController.$inject = ['ShoppingListService'];
function BoughtController(ShoppingListService) {
  var itemBought = this;
  itemBought.nothingBoughtMessage = "Nothing bought yet.";

  itemBought.itemName = "";
  itemBought.itemQuantity = "";

  itemBought.boughtItems = ShoppingListService.getBoughtItems();

  // itemBought.addItem = function () {
  //   ShoppingListService.addItem(itemBought.itemName, Bought.itemQuantity);
  // }
}


ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var showList = this;
  showList.boughtMessage = "Bought";
  showList.allBoughtMessage = "Everything is bought!";

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  }
 }


function ShoppingListService() {
  var service = this;

  var boughtMessage = "Bought";

  // List of shopping items
  var items = [{name: "soda", quantity: 8},
  {name: "Cookies", quantity: 10},
  {name: "Donuts", quantity: 12},
  {name: "Candy bars", quantity: 10},
  {name: "Bagels", quantity: 6}];

  var boughtItems = [];

  service.removeItem = function(itemIndex) {
    var item = {
      name: items[itemIndex].name,
      quantity: items[itemIndex].quantity
    };
    boughtItems.push(item);

    items.splice(itemIndex, 1);
  }

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function() {
    // var item = {
    //   name: items[0],
    //   quantity: itmes[0]
    // };
    // boughtItems.push(item);

    return boughtItems;
  }
}

})();
