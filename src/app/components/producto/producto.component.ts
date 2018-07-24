import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {

  constructor(private route:ActivatedRoute){
    route.params.subscribe( parametro => {
      console.log(parametro);
    })
  }
}
