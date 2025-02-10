import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private backendUrl = 'http://172.16.8.24:8080/api/todos'

  constructor(private http: HttpClient) { }
  getPosts():Observable<any> {
    return this.http.get(this.backendUrl);
}
}

