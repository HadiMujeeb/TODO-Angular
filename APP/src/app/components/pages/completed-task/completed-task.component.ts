import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [CommonModule,FormsModule,PageTitleComponent,TaskListComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {
  newTask=''
  TaskList:any[] =[]
  httpServer =inject(HttpService)
  
  ngOnInit(){
    this.getAllTask()
  }
  getAllTask(){
    this.httpServer.getAllTasks().subscribe((result:any)=>{
      this.TaskList=result.filter((x:any)=>x.completed==true)
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
