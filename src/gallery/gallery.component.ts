import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  imatges = [
    { nom: 'cavaller', alt: 'El Cavaller dret amb el seu agulló davant la porta de Hallownest' },
    { nom: 'hornet', alt: 'Hornet llançant la seva agulla entre les ombres' },
    { nom: 'cityTears', alt: 'Vista de la Ciutat de les Llàgrimes sota la pluja' },
    { nom: 'camins-verds', alt: 'Passadís de vegetació als Camins Verds' },
    { nom: 'conca-cristalls', alt: 'Cavernes lluents de cristalls a la Conca de Cristall' },
    { nom: 'abisme', alt: 'Entrada fosca de l\'Abisme' },
  ];
}
