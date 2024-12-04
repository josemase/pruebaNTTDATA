import { Component } from '@angular/core';
import {InicioComponent} from './inicio/inicio.component';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [InicioComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
