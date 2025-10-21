// frontend/src/app/components/header/header.component.ts

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;
  scrolled = false;

  // Alternar menú móvil
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    
    // Prevenir scroll del body cuando el menú está abierto
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Cerrar menú
  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  // Detectar scroll para cambiar estilo del header
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  // Cerrar menú al presionar Escape
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }
}
