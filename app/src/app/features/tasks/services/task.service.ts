import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly tasksSubject = new BehaviorSubject<Task[]>([
    {
      id: 1,
      title: 'Estudar Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Criar testes',
      completed: false,
    },
    {
      id: 3,
      title: 'Configurar projeto',
      completed: true,
    },
  ]);

  readonly tasks$ = this.tasksSubject.asObservable();

  addTask(title: string): void {
    const currentTasks = this.tasksSubject.value;

    const task: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.tasksSubject.next([...currentTasks, task]);
  }

  toggleTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    this.tasksSubject.next(updatedTasks);
  }

  removeTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.filter((task) => task.id !== id);

    this.tasksSubject.next(updatedTasks);
  }
}
