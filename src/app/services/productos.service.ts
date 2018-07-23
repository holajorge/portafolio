import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[] = [];
  cargando_p:boolean = true;

  constructor(private http:HttpClient) {
    this.cargar_productos();
  }
  public cargar_productos(){
    this.cargando_p = true;
    this.http.get('https://paginaweb-a3abc.firebaseio.com/productos.json')
      .subscribe( res => {
        console.log(res);
        this.cargando_p = false;
      });
  }

}
