import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


// Angular Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'; // Certifique-se de importar o MatDialogModule
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todoList/todo-list/todo-list.component';
import { TodoListService } from './service/todo-list.service';
import { CreateTodoDialog } from './todoList/todo-list/todo-list.component'; // Adicione a importação

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTodoDialog,  // Adicione o componente do diálogo aqui
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    MatNativeDateModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
