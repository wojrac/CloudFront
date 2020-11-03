import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContagionService {
  readonly rootURL = 'http://192.168.70.205:5002/api';

  constructor(public http : HttpClient) {

   }
  getAllContagions()
  {
    return this.http.get(this.rootURL + '/contagion');
  }
}
