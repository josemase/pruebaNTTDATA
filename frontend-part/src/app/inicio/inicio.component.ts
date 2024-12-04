import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  isVisible: boolean = true;
  advertencia: boolean = false;
  advertenciaSelect: boolean = false;
  isButtonDisabled: boolean = true;

  constructor(private router: Router) {
  }

  async controlCambio() {
    const selectElement = document.getElementById('seleccion') as HTMLSelectElement;
    const selectValue: string = selectElement.value;
    const numID = document.getElementById('documento') as HTMLSelectElement;
    const numIDValue: number = Number(numID.value);

    if (selectValue === "default") {
      this.advertenciaSelect = true;
    } else {
      let name=await consumingApi(selectValue,numIDValue)
      if (typeof name !== "string") {
        this.isVisible = false;
        await this.router.navigate(['/information', {nombre: name.primerNombre, apellido: name.primerApellido}]);
      }
      else{
        alert(name);
      }
    }
  }

  validateInput(event: Event) {
    const selectElement = document.getElementById('seleccion') as HTMLSelectElement;
    const selectValue: string = selectElement.value;
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 6 && input.value.length < 11) {
      this.isButtonDisabled = selectValue === "default";
      this.advertencia = false;
    } else {
      this.advertencia = true;
      this.isButtonDisabled = true;
    }
  }
}


async function consumingApi(tipo: string, numero: number) {
  try {
    let url:string = `http://localhost:8090/getCliente?TipoDocumento=${tipo}&NumeroDocumento=${numero}`;
    let fetchResult:Response = await fetch(url);
    switch (fetchResult.status) {
      case 200:
        let json:any = await fetchResult.json();
        return { primerNombre: json.primerNombre, primerApellido: json.primerApellido };
      case 404:
        return "No se encontró el recurso";
      case 500:
        return "Error en el servidor";
    }
  }catch (error) {
    return "Error en la solicitud";
  }
  return "";
}
