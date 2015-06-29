'use strict';

var Cart = require("./model/cart.js");
var Pos = require("./model/pos.js");

function printInventory(tags) {
    var cart = new Cart();

    tags.forEach(function(n){
        cart.add(Pos.scan(n));
    });

    return Pos.print(cart);
}

module.exports = printInventory;
