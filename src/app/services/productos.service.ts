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
    this.http.get('https://paginaweb-a3abc.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        console.log(res);
        setTimeout( () => {
          this.cargando_p = false;
          this.productos = res;
        }, 1500);
      });
  }
  public getIdProducto(id:string){
    return this.http.get(`https://paginaweb-a3abc.firebaseio.com/productos/${id}.json`);
  }

}
