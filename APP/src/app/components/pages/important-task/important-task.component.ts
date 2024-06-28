import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../../task-list/task-list.component';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [CommonModule,FormsModule,TaskListComponent,PageTitleComponent],
  templateUrl: './important-task.component.html',
  styleUrl: './important-task.component.scss'
})
export class ImportantTaskComponent {
  newTask=''
TaskList:any[] =[]
httpServer =inject(HttpService)

ngOnInit(){
  this.getAllTask()
}
getAllTask(){
  this.httpServer.getAllTasks().subscribe((result:any)=>{
    this.TaskList=result.filter((x:any)=>x.important==true)
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
  }
}
