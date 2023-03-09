import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerApiService {

  readonly taskManagerApiUrl = "https://localhost:7083/api"

  constructor(private http : HttpClient) { }

  //Tarefa
  getTaskList(): Observable<any[]>{
    return this.http.get<any>(this.taskManagerApiUrl + '/tasks');
  }

  addTask(data:any){
    return this.http.post(this.taskManagerApiUrl + '/tasks', data);
  }

  updateTask(id:number|string, data:any){
    return this.http.put(this.taskManagerApiUrl + `/tasks/${id}`, data);
  }

  deleteTask(id:number|string){
    return this.http.delete(this.taskManagerApiUrl + `/tasks/${id}`);
  }

  //Tarefa Tipos
  getTaskTypesList(): Observable<any[]>{
    return this.http.get<any>(this.taskManagerApiUrl + '/taskTypes');
  }

  addTaskTypes(data:any){
    return this.http.post(this.taskManagerApiUrl + '/taskTypes', data);
  }

  updateTaskTypes(id:number|string, data:any){
    return this.http.put(this.taskManagerApiUrl + `/taskTypes/${id}`, data);
  }

  deleteTaskTypes(id:number|string){
    return this.http.delete(this.taskManagerApiUrl + `/taskTypes/${id}`);
  }

  //Status
  getStatusList(): Observable<any[]>{
    return this.http.get<any>(this.taskManagerApiUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.taskManagerApiUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.taskManagerApiUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.taskManagerApiUrl + `/status/${id}`);
  }

  exportCsv(): Observable<any[]>{
    return this.http.get<any>(this.taskManagerApiUrl + 'export' + {responseType:'blob', observe:'response'});
  }
}
