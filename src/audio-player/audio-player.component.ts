import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
})
export class AudioPlayerComponent {
  // "nom" és el nom base dels fitxers de public/audio/
  // Ex: 'ambient-hallownest' -> ambient-hallownest.ogg i ambient-hallownest.mp3
  pista = {
    titol: 'Ambient de Hallownest',
    descripcio: 'Melodia tranquil·la per acompanyar l\'exploració del regne en ruïnes.',
    nom: 'ambient-hallownest',
  };
}
