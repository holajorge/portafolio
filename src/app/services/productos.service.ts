import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:any[] = [];
  productos_filtrados:any[] = [];
  cargando_p:boolean = true;

  constructor(private http:HttpClient) {
    this.cargar_productos();
  }
  public cargar_productos(){
    this.cargando_p = true;
    let promesa = new Promise( (resolve, reject ) => {
      this.http.get('https://paginaweb-a3abc.firebaseio.com/productos_idx.json')
        .subscribe( res => {
          setTimeout( () => {
            this.cargando_p = false;
            this.productos = res;
            resolve(); //cuando termina la promesa
          }, 1500);
        });
    });
    return promesa;
  }

  public buscar_pruductos(termino:string){

    if (this.productos.length === 0){
      this.cargar_productos().then( () => {
        //termino la carga del metodo cargar_productos
        this.filtrar_producto(termino);
      });
    }else{
      this.filtrar_producto(termino);
    }

  }
  private filtrar_producto(termino:string){
    this.productos_filtrados = [];
    this.productos.forEach(product => {
      // console.log(product); //all product
      termino = termino.toLowerCase();
      if (product.categoria.indexOf(termino) >= 0 || product.titulo.toLowerCase().indexOf(termino) >= 0) {
          this.productos_filtrados.push(product);
      }
    });
  }
  public getIdProducto(termino:string){
    return this.http.get(`https://paginaweb-a3abc.firebaseio.com/productos/${termino}.json`);
  }



}
