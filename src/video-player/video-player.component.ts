import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  // "nom" és el nom base dels fitxers de public/video/
  // Ex: 'hollow-knight' -> hollow-knight.webm, hollow-knight.mp4 i hollow-knight-ca.vtt
  video = {
    titol: 'Tràiler de Hollow Knight',
    descripcio: 'Un tast del món d\'insectes de Hallownest.',
    nom: 'hollow-knight',
  };

  carregat = signal(false); // Mentre sigui false, el video no descarrega res

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>; // Referència al <video> del HTML (#videoRef)

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    // Vigila el vídeo: quan s'apropa a la pantalla, activa la càrrega
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.carregat.set(true);
          this.observer?.disconnect(); // ja no cal seguir vigilant
        }
      },
      { rootMargin: '200px' } // comença a carregar 200px abans que es vegi
    );
    this.observer.observe(this.videoRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
