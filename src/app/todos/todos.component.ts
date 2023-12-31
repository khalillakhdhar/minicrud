import { Component } from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
todos: Todo[] = [];
p:number=0;
// inject the service into the component
constructor(private todoService: TodoService) { }
// load the todos on init
ngOnInit() {
this.loadTodos();
}
// load the todos
loadTodos() {
this.todoService.getAllTodos().subscribe(datas => {
this.todos = datas;
console.log("todos liste",this.todos);
}
); 
}
// delete a todo
delete(id: number) {
 if(confirm("Are you sure to delete ")) {
this.todoService.deleteTodo(id).subscribe(() => {
this.todos = this.todos.filter(todo => todo.id !== id); // remove the todo from the list in fake backend

});
}
  
}
}
