import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskManagerApiService } from 'src/app/task-manager-api.service';

@Component({
  selector: 'app-add-edit-task-manager',
  templateUrl: './add-edit-task-manager.component.html',
  styleUrls: ['./add-edit-task-manager.component.css'],
})
export class AddEditTaskManagerComponent implements OnInit {
  taskList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  taskTypeList$!: Observable<any[]>;

  constructor(private service: TaskManagerApiService) {}

  @Input() task: any;
  id: number = 0;
  status: string = '';
  comments: string = '';
  taskTypeId!: number;
  initialDate: Date | string | null = '';
  endDate: Date | string | null = '';


  ngOnInit(): void {
    this.id = this.task.id;
    this.status = this.task.status;
    this.comments = this.task.comments;
    this.taskTypeId = this.task.taskTypeId;
    this.initialDate = this.task.initialDate;
    this.endDate = this.task.endDate;
    this.statusList$ = this.service.getStatusList();
    this.taskList$ = this.service.getTaskList();
    this.taskTypeList$ = this.service.getTaskTypesList();
  }

  addTask() {
    var task = {
      status: this.status,
      comments: this.comments,
      taskTypeId: this.taskTypeId,
      initialDate: this.initialDate,
      endDate: this.endDate,
    };

    this.service.addTask(task).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 4000);
    });
  }

  updateTask() {
    var task = {
      id: this.id,
      status: this.status,
      comments: this.comments,
      taskTypeId: this.taskTypeId,
      initialDate: this.initialDate,
      endDate: this.endDate,
    };

    var id: number = this.id;
    this.service.updateTask(id, task).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSucces = document.getElementById('update-success-alert');
      if (showUpdateSucces) {
        showUpdateSucces.style.display = 'block';
      }
      setTimeout(function () {
        if (showUpdateSucces) {
          showUpdateSucces.style.display = 'none';
        }
      }, 4000);
    });
  }
}
