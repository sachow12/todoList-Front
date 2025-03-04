import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoListService } from 'src/app/service/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoLists: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'date', 'codigo', 'status', 'todo', 'actions'];

  constructor(private todoListService: TodoListService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadTodoLists();
  }

  loadTodoLists(): void {
    this.todoListService.getTodoList().subscribe((data) => {
      this.todoLists = data;
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.todoListService.createTodoList(result).subscribe(() => {
          this.loadTodoLists();
        });
      }
    });
  }

  completeTodoList(id: number): void {
    this.todoListService.putTodoList(id, { status: true }).subscribe(() => {
      this.loadTodoLists();
    });
  }

  deleteTodoList(id: number): void {
    this.todoListService.deleteTodoList(id).subscribe(() => {
      this.loadTodoLists();
    });
  }
}

@Component({
  selector: 'create-todo-dialog',
  template: `
    <h2 mat-dialog-title>Crie uma nova lista de tarefas</h2>
    <mat-dialog-content>
      <mat-form-field>
        <mat-label>Título</mat-label>
        <input matInput [(ngModel)]="title" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Descrição</mat-label>
        <input matInput [(ngModel)]="description" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Tarefas</mat-label>
        <textarea matInput [(ngModel)]="todo" placeholder="Digite as tarefas separadas por vírgula"></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <button mat-button (click)="save()">Salvar</button>
    </mat-dialog-actions>
  `
})
export class CreateTodoDialog {
  title: string = '';
  description: string = '';
  todo: string = '';

  constructor(public dialogRef: MatDialogRef<CreateTodoDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    const todoList = {
      title: this.title,
      description: this.description,
      todo: this.todo.split(','),
      status: false
    };
    this.dialogRef.close(todoList);
  }
}

