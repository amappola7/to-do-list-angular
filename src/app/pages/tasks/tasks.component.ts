import { Component, ViewChild } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @ViewChild(TasksListComponent) tasksListComponent!: TasksListComponent;

  onTaskSaved(task: Task) {
    this.tasksListComponent.saveTask(task); 
  }
}
