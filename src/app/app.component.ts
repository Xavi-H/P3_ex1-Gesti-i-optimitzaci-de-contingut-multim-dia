import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('practica2');
}
