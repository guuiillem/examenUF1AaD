import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-component-examen',
  standalone: true,
  imports: [],
  templateUrl: './component-examen.component.html',
  styleUrl: './component-examen.component.css'
})
export class ComponentExamenComponent {
constructor(private http: HttpClient) {

this.http.get<any>("http://localhost:3030/llegirImatgesPujol").subscribe(() => {

})
this.http.get<any>("http://localhost:3030/mostraNomsPujol").subscribe(() => {

})
this.http.put<any>("http://localhost:3030/writeBuffersPujol", "hola").subscribe(() => {

})
}
}
