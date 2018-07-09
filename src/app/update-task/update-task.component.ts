import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { SharedService } from '../Services/shared-service.service';
import { Task } from '../Models/task';
import { ParentTask } from '../Models/parent-task';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
taskID:number;
item:Task;
msg:string;
ParentTaskList:ParentTask[];
  constructor(private router:Router,private activate:ActivatedRoute,private service:SharedService) {
    this.item = new Task();
   }

  ngOnInit() {   

    this.service.GetParentTaskAll()
    .subscribe(p=>{this.ParentTaskList=p;  
    });

    this.activate.params.subscribe(p=>this.taskID=p["taskid"]);
    this.service.GetById(this.taskID)
    .subscribe(p=>{this.item=p;    
    }); 
  }

  Update()
  {    
    this.service.Put(this.item).subscribe(p=>this.msg=p);      
  }

  Cancel()
  {
    this.router.navigateByUrl('/viewtask');
  }

}
