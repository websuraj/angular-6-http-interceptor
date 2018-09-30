import { Component, Injectable } from '@angular/core'
import { CommonsService } from './services/commons.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  response: any = []
  isloading: boolean = true
  baseUrl: string = "https://developers.zomato.com/api/v2.1/";


  constructor(private HttpCommons: CommonsService) {
    console.log("Appliction  start")
   
  }

  ngOnInit() {
    this._getTodos();
    
  }
  _getTodos() {
    this.HttpCommons.getAllTodos().pipe(first()).subscribe(Todos => {
      this.response = Todos;
      this.response.push(Todos)
      this.isloading = false;
    })
  }
}
