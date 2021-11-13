import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

  // PLATFORM-ID: diz qual plataforma está rodando o projeto
  // @Inject(PLA...)é um token que permite injetar um cara específico
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }
}
