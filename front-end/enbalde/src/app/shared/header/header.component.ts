import { HttpStatusCode } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoApi } from 'src/app/models/modelo.resultado';
import { Usuario, TipoUsuario } from 'src/app/models/modelo.usuario';
import { AuthService } from 'src/app/services/auth.service';
import { ConfiguracionesService } from 'src/app/services/configuraciones.service';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Configuracion } from 'src/app/models/modelo.configuracion';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ ProductosService, UsuariosService ]
})

export class HeaderComponent {
  @Input() itemLogo: string = '../assets/img/logo_dorado_sin_fondo.png';
  itemCarrito = '../assets/img/carrito.png';
  itemLupa = '../assets/img/lupa.png';

  @Input() usuario?: Usuario;

  buscarTerm: string = '';
  buscarResults: any[] = [];
  showResults: boolean = false;
  isModalOpen: boolean = false;

  constructor (private productosService: ProductosService, private configuracionesService: ConfiguracionesService, private authService: AuthService, private router: Router) {
    this.authService.autenticado
      .subscribe((auth: boolean) => {
        if (auth) {
          this.usuario = this.authService.obtenerUsuarioSiNoExpiro();
        }
        else {
          this.usuario = undefined;
        }
      });

    this.configuracionesService.estado
     .pipe(
        filter((configuracion: Configuracion) => configuracion.nombre === 'logoHeader'),
        map((configuracion: Configuracion) => configuracion.valor)
      )
      .subscribe((logoUrl: string) => {
        this.itemLogo = logoUrl
      });
  }

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuarioSiNoExpiro();
    this.configuracionesService.obtenerConfiguraciones()
      .subscribe((configuraciones: Configuracion[]) => {
        let c: { [id: string] : string } = {};
        configuraciones.forEach((el, index) => c[el.nombre] = el.valor);

        this.itemLogo = c["logoHeader"];
      });
  }


  buscar() {
    this.productosService.buscarProductos(this.buscarTerm)
    .subscribe(
      (results: any[]) => {
      this.buscarResults = results;
      this.isModalOpen = true;
    },
    (error: any) => {
      console.error('Error en la búsqueda:', error);
    }
    );
  }

  cerrarModal(event?: MouseEvent) {
    if (!event || event.target === event.currentTarget) {
      this.isModalOpen = false;
  }
  }

  logout() {
    this.authService.logout()
      .subscribe((resultado: ResultadoApi) => {
        if (resultado.status == HttpStatusCode.Ok) {
          this.usuario = undefined;
          this.router.navigate((['/']));
        }
      });
  }

  esUsuarioAdministrador = () => this.usuario?.tipo == TipoUsuario.Administrador;

  esUsuarioCliente = () => this.usuario?.tipo == TipoUsuario.Cliente;
}
