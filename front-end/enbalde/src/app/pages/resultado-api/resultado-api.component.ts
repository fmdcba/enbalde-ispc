import { HttpStatusCode } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ResultadoApi } from 'src/app/models/modelo.resultado';

@Component({
  selector: 'app-resultado-api',
  templateUrl: './resultado-api.component.html',
  styleUrls: ['./resultado-api.component.css']
})

export class ResultadoApiComponent {
  @Input() resultado!: ResultadoApi | undefined;

  constructor() {
    setTimeout(() => {
      this.resultado = undefined;
    }, 2500);
  }

  successfulResponse(status: HttpStatusCode): boolean {
    return status >= 200 && status <= 299;
  }

  failureResponse(status: HttpStatusCode): boolean {
    return status >= 400 && status <= 599;
  }
}
