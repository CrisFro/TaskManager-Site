import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ShowTaskManagerComponent } from './task-manager/show-task-manager/show-task-manager.component';
import { AddEditTaskManagerComponent } from './task-manager/add-edit-task-manager/add-edit-task-manager.component';
import { TaskManagerApiService } from './task-manager-api.service';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ShowTaskManagerComponent,
    AddEditTaskManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxPaginationModule,
    MatCardModule,

  ],
  providers: [TaskManagerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
