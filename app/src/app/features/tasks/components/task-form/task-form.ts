import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  private readonly taskService = inject(TaskService);

  title = '';

  addTask(): void {
    const title = this.title.trim();

    if (!title) {
      return;
    }

    this.taskService.addTask(title);
    this.title = '';
  }
}
