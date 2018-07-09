import { ParentTask } from "./parent-task";

export class Task {
    TaskID:number;
    ParentTaskID:number;
    TaskDesc:string;    
    StartDate:Date;
    EndDate:Date;
    Priority:number; 
    ParentTask:ParentTask;
    TaskStatus:boolean;   
}
