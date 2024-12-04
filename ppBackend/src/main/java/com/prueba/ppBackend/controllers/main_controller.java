package com.prueba.ppBackend.controllers;

import com.prueba.ppBackend.models.Cliente;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/getCliente")
public class main_controller {

    private Cliente chucho;

    @GetMapping
    public ResponseEntity<String>  getCliente(@RequestParam(value="TipoDocumento", required = false)String tipoDocumento,
                             @RequestParam(value="NumeroDocumento", required = false)Integer numeroDocumento){

        try {
            if (tipoDocumento == null || numeroDocumento == null) {
                return ResponseEntity.badRequest().body("Ningun parametro (Tipo de documento y numero de documento) puede estar vacio");//400
            }else if (numeroDocumento <= 0 || numeroDocumento > 99999999) {
                return ResponseEntity.badRequest().body("El numero de documento ingresado no es valido");//400
            }else if (!tipoDocumento.equalsIgnoreCase("C")&& !tipoDocumento.equalsIgnoreCase("P")) {
                    return ResponseEntity.badRequest().body("El tipo de documento ingresado no es valido");//400
                }
            if(numeroDocumento==23445322)
            {
                chucho = new Cliente();
                return new ResponseEntity<>(getJson(chucho), org.springframework.http.HttpStatus.OK);//200
            }
            else {
                return ResponseEntity.notFound().build();//404
            }

        }catch (Exception e){
            return ResponseEntity.internalServerError().body("Error al buscar el cliente"); //500
        }
    }
    private static String getJson(Cliente chucho) {
        return "{\n" +
                "    \"primerNombre\": \"" + chucho.getPrimerNombre() + "\",\n" +
                "    \"segundoNombre\": \"" + chucho.getSegundoNombre() + "\",\n" +
                "    \"primerApellido\": \"" + chucho.getPrimerApellido() + "\",\n" +
                "    \"segundoApellido\": \"" + chucho.getSegundoApellido() + "\",\n" +
                "    \"tipoDocumento\": \"" + chucho.getTipoDocumento() + "\",\n" +
                "    \"numeroDocumento\": " + chucho.getNumeroDocumento() + ",\n" +
                "    \"telefono\": \"" + chucho.getTelefono() + "\",\n" +
                "    \"direccion\": \"" + chucho.getDireccion() + "\",\n" +
                "    \"cuidad\": \"" + chucho.getCuidad() + "\"\n" +
                "}";
    }
}
