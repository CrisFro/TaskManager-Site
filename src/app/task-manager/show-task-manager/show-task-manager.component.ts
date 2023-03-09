import { TaskManagerApiService } from './../../task-manager-api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-show-task-manager',
  templateUrl: './show-task-manager.component.html',
  styleUrls: ['./show-task-manager.component.css']
})
export class ShowTaskManagerComponent implements OnInit{

  taskManagerList$!: Observable<any[]>;
  taskManagerTypesList$!: Observable<any[]>;
  taskManagerTypesList: any=[];
  public paginaAtual = 1;


  //Map para mostrar a associação entre as tabelas (FK)
  taskManagerTypesMap:Map<number, string> = new Map()

  constructor(private service:TaskManagerApiService) { }

  ngOnInit(): void {
    this.taskManagerList$ = this.service.getTaskList();
    this.taskManagerTypesList$ = this.service.getTaskTypesList();
    this.refreshTaskManagerTypesMap();
  }


  //Variável (propriedades)
  modalTitle:string = '';
  activateAddEditTaskManagerComponent:boolean = false;
  taskManager:any;

  modalAdd(){
    this.taskManager = {
      id: 0,
      status: ['', Validators.required],
      comments: null,
      taskTypeId: null,
      initialDate: null,
      endDate: null
    }

    this.modalTitle = "Nova Tarefa";
    this.activateAddEditTaskManagerComponent = true;
  }

  modalEdit(item: any) {
    this.taskManager = item;
    this.modalTitle = "Edição de tarefa";
    this.activateAddEditTaskManagerComponent = true;
  }

  delete(item: any){
    if(confirm(`Deseja realmente deletar a tarefa ${item.id}?`)){

      this.service.deleteTask(item.id).subscribe((res) => {
        this.taskManagerList$ = this.service.getTaskList();
      });
    }
  }

  modalClose(){
    this.activateAddEditTaskManagerComponent = false;
    this.taskManagerList$ = this.service.getTaskList();
  }

  exportTaskManager() {
    this.service.exportCsv().subscribe((x) => {
      // const data = new Blob([x.body], { type: x.headers.get('Content-Type') });
      const name = document.createElement('a');
      const format = 'dd-MM-yyyy hhmmss';
      const myDate = new Date();
      const locale = 'pt-BR';
      const formattedDate = formatDate(myDate, format, locale);
      // name.href = window.URL.createObjectURL(data);
      name.download = ('Teste' + formattedDate + '.csv');
      name.click();
    });


  }



  refreshTaskManagerTypesMap(){
    this.service.getTaskTypesList().subscribe(data => {
      this.taskManagerTypesList = data;

      for(let i = 0; i < data.length; i++){
        this.taskManagerTypesMap.set(this.taskManagerTypesList[i].id, this.taskManagerTypesList[i].nameTask);
      }

    })
  }

}

