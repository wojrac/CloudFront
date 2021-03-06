import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContagionService {
  readonly rootURL = 'https://192.168.23.51:8083/api';

  constructor(public http : HttpClient) {

   }
  getAllContagions()
  {
    return this.http.get(this.rootURL + '/contagion');
  }
}
