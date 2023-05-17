import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistracionComponent } from './registracion/registracion.component';
import { CatalogComponent } from './catalogo/catalogo.component';
import { RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { AbmEnviosComponent } from './abm-envios/abm-envios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { VentasComponent } from './ventas/ventas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ItemEnvioComponent } from './item-envio/item-envio.component';
import { ComprasComponent } from './compras/compras.component';
import { ItemTipoProductoComponent } from './item-tipo-producto/item-tipo-producto.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    LoginComponent,
    RegistracionComponent,
    CatalogComponent,
    ProductoComponent,
    RestablecerComponent,
    CarritoComponent,
    DashboardComponent,
    TipoProductoComponent,
    AbmEnviosComponent,
    VentasComponent,
    PerfilComponent,
    ItemEnvioComponent,
    ComprasComponent,
    ItemTipoProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class PagesModule { }
