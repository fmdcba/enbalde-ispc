import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from '../models/modelo.oferta';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})

export class OfertasService {
  private API_URL = environment.API_URL;
  private ofertasUrl: string = `${this.API_URL}/ofertas/`;

  constructor(private http: HttpClient) {
  }

  obtenerOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.ofertasUrl);
  }

  borrar(oferta: Oferta): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ofertasUrl}${oferta.id}/`);
  }

  crear(nombre: string, descuento: number, fechaVencimiento: Date): Observable<Oferta> {
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descuento', descuento.toString());
    formData.append('fecha_vencimiento', fechaVencimiento.toString());

    return this.http.post<Oferta>(this.ofertasUrl, formData);
  }

  modificar(oferta: Oferta, nuevoNombre: string, nuevoDescuento: number, nuevaFechaVencimiento: Date): Observable<Date> {
    const formData = new FormData();
    formData.append('nombre', nuevoNombre);
    formData.append('descuento', nuevoDescuento.toString());
    formData.append('fecha_vencimiento', nuevaFechaVencimiento.toString());

    return this.http.put<Date>(`${this.ofertasUrl}${oferta.id}/`, formData);
  }
}
