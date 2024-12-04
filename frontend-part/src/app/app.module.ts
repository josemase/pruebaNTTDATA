import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {InicioComponent} from './inicio/inicio.component';
import {InfoComponent} from './info/info.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

const routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'infomation', component: InfoComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,
    InicioComponent,
    InfoComponent,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  providers: []
})
export class AppModule { }
