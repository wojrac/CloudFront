import { Component, OnInit } from '@angular/core';
import {ContagionService} from 'src/app/shared/contagion.service'

@Component({
  selector: 'app-contagion',
  templateUrl: './contagion.component.html',
  styleUrls: ['./contagion.component.css']
})
export class ContagionComponent implements OnInit {
  contagions;
  constructor(private service: ContagionService) { }

  ngOnInit(): void {
      /*this.service.getAllContagions().subscribe(
        res=>{
          this.contagions = res;
        }
      )*/
  }

}
