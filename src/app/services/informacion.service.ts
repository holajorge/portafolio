import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class InformacionService {
  info:any = {};
  equipo:any = [];

  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;

  constructor(private http: HttpClient) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }
  public carga_info(){

    this.http.get("assets/data/info.pagina.json")
      .subscribe(data => {
        this.cargada = true;
        this.info = data;
      });

  }
  carga_sobre_nosotros(){

    this.http.get("https://paginaweb-a3abc.firebaseio.com/equipo.json")
      .subscribe(data => {
        this.cargada = true;
        this.equipo = data;

        this.cargada_sobre_nosotros = true;
      });
  }

}
