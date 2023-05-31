import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadoApi } from 'src/app/models/modelo.resultado';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UsuariosService ]
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuario = {user: '', password: ''};

  constructor(private fb: FormBuilder, private router: Router, private elementRef: ElementRef, private authService: AuthService) {
  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        user: [this.usuario.user, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        password: [this.usuario.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  get user() { return this.loginForm.get('user'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(value: any) {
    this.authService.login(value.user, value.password)
      .subscribe((resultado: ResultadoApi) => {
        this.router.navigate(['/']);
        this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop = 0;
      });
  }
}
