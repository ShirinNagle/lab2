"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task);
    };
    toDoClass.prototype.listAllTasks = function () {
        console.log("Beginning of an array");
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of an array");
    };
    toDoClass.prototype.deleteTasks = function (task) {
        var index = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item " + task + " found");
        }
        else {
            console.log("Item " + task + "not found");
        }
        return this.myTasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("Element 1");
testClass.addTask("Element 2");
testClass.addTask("Element 3");
testClass.addTask("Element 4");
testClass.listAllTasks();
testClass.deleteTasks("Element 2");
testClass.listAllTasks();
