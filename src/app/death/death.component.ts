import { Component, OnInit } from '@angular/core';
import {DeathService}  from 'src/app/shared/death.service'

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {
  deaths;
  constructor(private service : DeathService) { }

  ngOnInit(): void {
    this.service.getAllDeaths().subscribe(
      res=>{
        this.deaths = res;
      }
    )
  }

}
