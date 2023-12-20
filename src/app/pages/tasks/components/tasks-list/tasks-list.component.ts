import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task/task.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit{
  tasksList: Task[] = [];

  @Input() newTask!: Task;

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe((tasks) => this.tasksList = tasks);
  }

  saveTask(task: Task) {
    this.tasksList.push(task);
  }

  removeTask(id: number) {
    this.tasksList = this.tasksList.filter((task) => task.id == id ? false : task);
  }
}