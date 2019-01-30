var myTasks = [];
//myTasks = ["Oak", "Maple","Ash","Sycamore"];
function addTask(task) {
    return myTasks.push(task);
}
function listAllTasks() {
    console.log("Beginning of an array");
    myTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of an array");
}
function deleteTask(task) {
    var index = myTasks.indexOf(task, 0);
    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("Item " + task + " found");
    }
    else {
        console.log("Item " + task + "not found");
    }
    return myTasks.length;
}
addTask("element 1");
addTask("element 2");
addTask("element 3");
addTask("element 4");
listAllTasks();
deleteTask("element 3");
