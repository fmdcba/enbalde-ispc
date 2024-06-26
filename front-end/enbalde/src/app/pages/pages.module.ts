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
import { EnviosComponent } from './envios/envios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { VentasComponent } from './ventas/ventas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ItemEnvioComponent } from './item-envio/item-envio.component';
import { ComprasComponent } from './compras/compras.component';
import { ItemTipoProductoComponent } from './item-tipo-producto/item-tipo-producto.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ItemOfertaComponent } from './item-oferta/item-oferta.component';
import { ResultadoApiComponent } from './resultado-api/resultado-api.component';
import { ItemProductoComponent } from './item-producto/item-producto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ItemUsuarioComponent } from './item-usuario/item-usuario.component';
import { EnbaldePagoComponent } from './enbalde-pago/enbalde-pago.component';
import { ItemVentaComponent } from './item-venta/item-venta.component';
import { ItemConfiguracionComponent } from './item-configuracion/item-configuracion.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';

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
    EnviosComponent,
    VentasComponent,
    PerfilComponent,
    ItemEnvioComponent,
    ComprasComponent,
    ItemTipoProductoComponent,
    OfertasComponent,
    ItemOfertaComponent,
    ResultadoApiComponent,
    ItemProductoComponent,
    UsuariosComponent,
    ItemUsuarioComponent,
    EnbaldePagoComponent,
    ItemVentaComponent,
    ConfiguracionesComponent,
    ItemConfiguracionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class PagesModule { }
