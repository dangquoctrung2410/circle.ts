"use strict";
exports.__esModule = true;
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
        this.count = 0;
    }
    Dictionary.prototype.add = function (key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    };
    Dictionary.prototype.containsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    Dictionary.prototype.size = function () {
        return this.count;
    };
    Dictionary.prototype.getItem = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.removeItem = function (key) {
        var value = this.items[key];
        delete this.items[key];
        this.count--;
        return value;
    };
    Dictionary.prototype.getKeys = function () {
        var keySet = [];
        for (var property in this.items) {
            if (this.items.hasOwnProperty(property)) {
                keySet.push(property);
            }
        }
        return keySet;
    };
    Dictionary.prototype.values = function () {
        var values = [];
        for (var property in this.items) {
            if (this.items.hasOwnProperty(property)) {
                values.push(this.items[property]);
            }
        }
        return values;
    };
    return Dictionary;
}());
exports["default"] = Dictionary;
var personHobbies = new Dictionary();
personHobbies.add('jack', 'swimming');
personHobbies.add('mary', 'singing');
personHobbies.add('tom', 'dancing');
var keys = personHobbies.getKeys(); // will return ['jack', 'mary', 'tom']
var values = personHobbies.values(); // will return ['swimming', 'singing', 'dancing']
