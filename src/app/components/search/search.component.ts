import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  termino:string = undefined;
  constructor(private route:ActivatedRoute, private productService:ProductosService) {
    route.params.subscribe( parametro => {
      this.termino = parametro['termino'];

      this.productService.buscar_pruductos(this.termino);

    });
  }

}
