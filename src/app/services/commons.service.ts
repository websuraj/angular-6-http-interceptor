import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonsService {
  baseUrl: string = "https://jsonplaceholder.typicode.com";


  constructor(private Http: HttpClient) { }
  getAllTodos() {
    return this.Http.get(this.baseUrl + "/todos")
  }

}
