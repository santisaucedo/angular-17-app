import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h1>Hola Mundo desde {{city.toUpperCase() }}</h1>`,
  styles: `

  `,
})
export class AppComponent {
  city = 'Buenos Aires';
}
