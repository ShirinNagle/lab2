import {toDoInterface} from './interface';

class toDoClass implements toDoInterface{
    myTasks: Array <string> = [];
    addTask(task: string):number{
        return this.myTasks.push(task);
    }
    listAllTasks():void{
        console.log("Beginning of an array");
        this.myTasks.forEach(function(task){
        console.log(task);
    })
    console.log("End of an array")
    }

    deleteTasks(task):any {
        let index = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("Item " + task + " found");
        }
        else {
            console.log("Item " + task + "not found");
        }
        return this.myTasks.length;
    }


}
let testClass = new toDoClass();
testClass.addTask("Element 1");
testClass.addTask("Element 2");
testClass.addTask("Element 3");
testClass.addTask("Element 4");
testClass.listAllTasks();
testClass.deleteTasks("Element 2");
testClass.listAllTasks();
