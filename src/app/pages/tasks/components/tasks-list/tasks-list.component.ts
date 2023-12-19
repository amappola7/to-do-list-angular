import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  tasksList: Task[] = [];
}
