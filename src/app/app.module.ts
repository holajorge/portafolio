import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// rutas
import {app_routing} from "./app.routes";
// servicios
import {InformacionService} from "./services/informacion.service";
import {ProductosService} from './services/productos.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, PortafolioComponent, AboutComponent, ProductoComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule
  ],
  providers: [InformacionService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
