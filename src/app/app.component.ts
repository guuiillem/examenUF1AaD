import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentExamenComponent} from "./component-examen/component-examen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentExamenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UF1ExGuillemPujol';
}
