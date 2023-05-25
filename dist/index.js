"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function createUser(name, age) {
    var user = { id: (0, uuid_1.v4)(), name: name, age: age, cart: [] };
    return user;
}
function createItem(name, price, desc) {
    var item = { id: (0, uuid_1.v4)(), name: name, price: price, desc: desc };
    return item;
}
function addToCart(user, item) {
    return user.cart.push(item);
}
function removeFromCart(item, user) {
    var i = user.cart.length;
    while (i--) {
        if (user.cart[i] === item) {
            user.cart.splice(i, 1);
        }
    }
    return user.cart;
}
function removeQuantityFromCart(item, user, num) {
    var n = user.cart.indexOf(item);
    return user.cart.splice(n, num);
}
function cartTotal(user) {
    console.log("total price in ".concat(user.name, "'s cart is: ").concat(user.cart.reduce(function (acc, item) { return acc + item.price; }, 0), "$"));
    return user.cart.reduce(function (acc, item) { return acc + item.price; }, 0);
}
function printCart(user) {
    console.log(user.cart);
}
function driver(name, age) {
    var user = createUser(name, age);
    var apple = createItem('apple', 3, 'red deliciuos');
    var banana = createItem('banana', 1, 'rype and ready to go');
    var orange = createItem('orange', 2, 'easy peel');
    addToCart(user, apple);
    cartTotal(user);
    printCart(user);
    addToCart(user, banana);
    addToCart(user, banana);
    addToCart(user, banana);
    printCart(user);
    addToCart(user, orange);
    addToCart(user, orange);
    addToCart(user, orange);
    cartTotal(user);
    printCart(user);
    removeFromCart(banana, user);
    cartTotal(user);
    printCart(user);
    removeQuantityFromCart(orange, user, 2);
    cartTotal(user);
    printCart(user);
}
driver('ray', 25);
