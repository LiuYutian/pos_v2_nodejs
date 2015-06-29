var Cart = require("../model/cart.js");
var CartItem = require("../model/cartItem.js");

describe("cart", function(){

    it("cart attribute", function(){
        var cart = new Cart();
        var attribute = cart.cartItems;

        expect(Array.isArray(attribute)).toEqual(true);
    });

    it("cart function add", function(){
        var cart = new Cart();
        cart.add({barcode : 'ITEM000001', count : 5});
        var attribute = cart.cartItems;

        expect(attribute).toEqual(([ CartItem({ barcode: 'ITEM000001', count: 5 }) ]).toString());
    });


    //
    // cart.add({barcode : 'ITEM000005', count : 4});
    // cart.add({barcode : 'ITEM000005', count : 1});
    // cart.add({barcode : 'ITEM000003', count : 1});

});
