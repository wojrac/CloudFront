import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContagionService {
  readonly rootURL = 'https://localhost:5001/api';

  constructor(public http : HttpClient) {

   }
  getAllContagions()
  {
    return this.http.get(this.rootURL + '/contagion');
  }
}
