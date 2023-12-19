import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit{
  tasksList: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe((tasks) => this.tasksList = tasks);
  }
}
