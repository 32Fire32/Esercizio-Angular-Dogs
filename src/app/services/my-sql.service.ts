import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MySqlService {

  constructor(private http: HttpClient) { }

  insertDog(url: string, body: {}){
    return this.http.post(url, body)
  }

  getDogs(url: string){
    return this.http.get(url)
  }
}
