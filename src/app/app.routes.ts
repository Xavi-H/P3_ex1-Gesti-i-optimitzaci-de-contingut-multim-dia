import { Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { PersonatgeComponent } from './personatge/personatge.component';
import { HistoriaComponent } from './historia/historia.component';

export const routes: Routes = [
  { path: '', component: IniciComponent, pathMatch: 'full' },
  { path: 'personatges', component: PersonatgeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: '**', redirectTo: '' },
];
