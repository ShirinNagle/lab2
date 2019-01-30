export interface toDoInterface{
    myTasks: Array<string>;
    addTask(task: string):number;
    listAllTasks():void;
    deleteTasks(task: string):number;
}

