import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [AsyncPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  private readonly taskService = inject(TaskService);

  readonly tasks$ = this.taskService.tasks$;

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }

  removeTask(id: number): void {
    this.taskService.removeTask(id);
  }
}
