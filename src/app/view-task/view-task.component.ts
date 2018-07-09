import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import { ParentTask} from '../Models/parent-task';
import { Filter } from '../Models/filter';
import { SharedService } from '../Services/shared-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  list:Task[];
  filterCriteria:Filter;
  filteredList:Task[];
  item:Task;
  msg:string;
  constructor(private service:SharedService,private router:Router) { 
    this.filterCriteria = new Filter();   
  
  }

  ngOnInit() {
    this.service.GetAll()
  .subscribe(p=>{this.list=p;
  this.filteredList = p;
  });   
  }

  Search()
  {
     
      this.filteredList = this.list.filter(t=>
        (t.TaskDesc.startsWith(this.filterCriteria.Task) || (!this.filterCriteria.Task)) &&
        (t.ParentTask.ParentTaskDesc.startsWith(this.filterCriteria.ParentTask) || (!this.filterCriteria.ParentTask)) &&
        ((t.Priority >= this.filterCriteria.PriorityFrom && 
          t.Priority <= this.filterCriteria.PriorityTo) || (!this.filterCriteria.PriorityFrom) || (!this.filterCriteria.PriorityTo)) &&
          ((t.StartDate >= this.filterCriteria.StartDate && 
            t.EndDate <= this.filterCriteria.EndDate) || (!this.filterCriteria.StartDate) || (!this.filterCriteria.EndDate))
      
      );  
  }

  Edit(id)
  {
    console.log(id);
    
    this.router.navigateByUrl('/updatetask/'+ id);
  }

  EndTask(id)
  {
    this.service.GetById(id)
    .subscribe(p=>{this.item=p; 
      this.item.TaskStatus = true;
      this.service.Put(this.item).subscribe(p=>{this.msg=p;
        this.service.GetAll()
  .subscribe(p=>{this.list=p;
  this.filteredList = p;
  });
      });      
      
    });
  }

}
