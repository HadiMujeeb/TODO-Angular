import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpclient = inject(HttpClient);

  constructor() { }
httpClient = inject(HttpClient)
  addTask(task: string) {
  return this.httpClient.post("http://localhost:3000/task",{
    title:task
  })
  }

  getAllTasks(){
   return this.httpclient.get("http://localhost:3000/task")
  }
  updateTask(task:any){
   return this.httpclient.put("http://localhost:3000/task/"+task.id ,task)
  }
}
