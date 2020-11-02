import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContagionComponent } from './contagion/contagion.component';
import {ContagionService} from './shared/contagion.service';
import { DeathComponent } from './death/death.component';
import {DeathService} from './shared/death.service';

@NgModule({
  declarations: [
    AppComponent,
    ContagionComponent,
    DeathComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [ContagionService, DeathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
