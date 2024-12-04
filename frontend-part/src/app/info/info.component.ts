import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {

  nombreSet: string = '';
  apellidoSet: string = '';
  nombre: HTMLInputElement | null = null;
  apellido: HTMLInputElement | null = null;
  constructor(private route: ActivatedRoute,private router: Router) {}
  regreso(){
    this.router.navigate(['/inicio']);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nombreSet = params['nombre'];
      this.apellidoSet= params['apellido'];
    });
    this.nombre = document.getElementById('primerNombre') as HTMLInputElement;
    this.nombre.value = this.nombreSet;
    this.apellido = document.getElementById('primerApellido') as HTMLInputElement;
    this.apellido.value=this.apellidoSet;
  }

}
