import {
  Injectable,
  computed,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  readonly windowWidth = signal(window.innerWidth);

  readonly isDesktop = computed(
    () => this.windowWidth() >= 768
  );

  readonly menuOpen = signal(false);

  readonly menuVisible = computed(
    () => this.isDesktop() || this.menuOpen()
  );

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenuIfMobile(): void {
    if (!this.isDesktop()) {
      this.menuOpen.set(false);
    }
  }

  updateWindowWidth(width: number): void {
    this.windowWidth.set(width);
  }
}
