import { Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { PersonatgeComponent } from './personatge/personatge.component';
import { HistoriaComponent } from './historia/historia.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { VideoPlayerComponent } from '../video-player/video-player.component';

export const routes: Routes = [
  { path: '', component: IniciComponent, pathMatch: 'full' },
  { path: 'personatges', component: PersonatgeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'audio', component: AudioPlayerComponent },
  { path: 'video', component: VideoPlayerComponent },
  { path: '**', redirectTo: '' },
];
