(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  ShoppingListCheckOffService.fillToBuyItems();

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService()  {
  var service = this;

  // List of items
  var toBuyItems = [];
  var boughtItems = [];

  service.fillToBuyItems = function() {
    // Fill the toBuy list
    var itemNames = ['cookies', 'biscuits', 'pastry', 'juice', 'toffee'];
    itemNames.forEach(function(value) {
      var item = {
        name: value,
        quantity: Math.round(Math.random()*10) + 1
      };
      toBuyItems.push(item);
    });
  }

  service.getToBuyItems = function() {
      return toBuyItems;
  }

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.buyItem = function(itemIndex) {
    var item = toBuyItems.splice(itemIndex,1)[0];
    //console.log('Item: ', item);

    var itemToPush = {
      name: item.name,
      quantity: item.quantity
    };
    boughtItems.push(itemToPush);
  };
}

})();
