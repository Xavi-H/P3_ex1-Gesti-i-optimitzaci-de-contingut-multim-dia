import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-inici',
  templateUrl: './inici.component.html',
})
export class IniciComponent {
  protected readonly imgFondo = 'assets/imgPersonatges/fondo2.jpg';

  // Els enllaços que s'utilitzen en el html, per tindrels més ordenats i facils de modificar dinamicament
  protected readonly enllacos = [
    { text: 'Team Cherry', url: 'https://www.teamcherry.com.au/' },
    { text: 'Web oficial', url: 'https://www.hollowknight.com/' },
    { text: 'Steam', url: 'https://store.steampowered.com/app/367520/Hollow_Knight/' }
  ];
}
