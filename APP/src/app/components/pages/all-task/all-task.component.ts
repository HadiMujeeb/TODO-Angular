import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,CommonModule,PageTitleComponent,TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
newTask=''
InitialTaskList:any[] =[]
TaskList:any[] =[]
httpServer =inject(HttpService)
stateServies=inject(StateService)
ngOnInit(){
  this.stateServies.searchSubject.subscribe((value)=>{
   if(value){
    this.TaskList=this.InitialTaskList.filter(x=>x.title.toLowerCase().includes(value.toLowerCase()))
   }else{
    this.TaskList=this.InitialTaskList
   }
  })
  this.getAllTask()
}
addTask(){
  console.log("addTask",this.newTask)
  if(this.newTask!=''){
    this.httpServer.addTask(this.newTask).subscribe(()=>{
      this.newTask=''
      this.getAllTask()
     
    })
    
  }
  
  
}
getAllTask(){
  this.httpServer.getAllTasks().subscribe((result:any)=>{
    this.InitialTaskList= this.TaskList=result
  })
}
onComplete(task:any){
  task.completed=true
console.log("complete",task)
this.httpServer.updateTask(task).subscribe(()=>{ })
}
onImportant(task:any){
  task.important=true
console.log("important",task)
this.httpServer.updateTask(task).subscribe(()=>{ })
}

search(searchTerm:any){
  console.log(searchTerm)
}
}

