import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeathService {
  readonly rootURL = 'http://192.168.70.205:5001/api';

  constructor(public http : HttpClient) {

   }
   getAllDeaths()
   {
     return this.http.get(this.rootURL + '/death')
   }
}
