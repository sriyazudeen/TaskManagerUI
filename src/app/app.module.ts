import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedService } from './Services/shared-service.service';

const appRoutes:Routes=[
  {path:'',component:AddTaskComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'viewtask',component:ViewTaskComponent},  
  {path:'updatetask/:taskid',component:UpdateTaskComponent}, 
  {path:"**",component:PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    PagenotfoundComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
