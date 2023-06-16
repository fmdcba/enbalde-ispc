import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadoApi } from 'src/app/models/modelo.resultado';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { constantes } from 'src/environment/constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})

export class LoginComponent implements OnInit {
  readonly constantes = constantes;
  loginForm!: FormGroup;
  usuario;
  @Input() resultado: ResultadoApi | undefined;

  constructor(private fb: FormBuilder, private router: Router, private elementRef: ElementRef, private authService: AuthService) {
    this.usuario = { user: "", password:"" };
    this.resultado = undefined;
  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        user: [this.usuario.user, [Validators.required, Validators.minLength(constantes.MINIMO_USUARIO_USUARIO), Validators.maxLength(constantes.MAXIMO_USUARIO_USUARIO)]],
        password: [this.usuario.password, [Validators.required, Validators.minLength(constantes.MINIMA_CLAVE_USUARIO), Validators.maxLength(constantes.MAXIMA_CLAVE_USUARIO)]],
    });
  }

  get user() { return this.loginForm.get('user'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(value: any) {
    this.authService.login(value.user, value.password)
      .subscribe({
        next: (exito: ResultadoApi) => {
          this.resultado = undefined;
          this.router.navigate(['/']);
          this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop = 0;
        },
        error: (error: ResultadoApi) => {
          this.resultado = error;
        },
        complete: () => {}
      });
  }
}
