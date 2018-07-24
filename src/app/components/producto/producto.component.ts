import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //clase para obtener parametros de la url
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {
  producto:any = undefined;
  cod:string = undefined;
  constructor(private route:ActivatedRoute, private productService:ProductosService){
    //obteniendo el parametro enviado de la url
    route.params.subscribe( parametro => {
      this.productService.getIdProducto(parametro['id'])
        .subscribe( res => {
          this.cod = parametro['id'];
          console.log(res);
          this.producto = res;
        });
    });
  }
}
