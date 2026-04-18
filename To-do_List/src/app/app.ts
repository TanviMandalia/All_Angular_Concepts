import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('To-do_List');

  task = "";
  taskList:{id:number, task:string}[] = [];

  addTask(){
     this.taskList.push({id:this.taskList.length+1,task:this.task});
     this.task = "";
     console.log(this.taskList)
  }

  deledteTask(taskId:number){
    this.taskList=this.taskList.filter((item)=>item.id!=taskId);
  }
}
 