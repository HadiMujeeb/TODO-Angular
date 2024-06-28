import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
@Input()TaskList:any[]=[]
@Output() important=new EventEmitter<any>();
@Output() complete=new EventEmitter<any>();
markImportant(task:any){
this.important.emit(task)
}
markComplete(task:any){
this.complete.emit(task)
}
}
