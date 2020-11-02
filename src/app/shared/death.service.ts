import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeathService {
  readonly rootURL = 'https://localhost:5001/api';

  constructor(public http : HttpClient) {

   }
   getAllDeaths()
   {
     return this.http.get(this.rootURL + '/death')
   }
}
