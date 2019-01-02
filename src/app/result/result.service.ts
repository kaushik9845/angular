import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../result';

@Injectable({ providedIn: 'root' })
export class ResultService implements OnInit {

    url="http://localhost:8081/inputservice";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submitvalues(result:Result)
  {
      const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    console.log(result);
  return this.http.post<Result[]>(this.url, result, httpOptions);
  }



}
