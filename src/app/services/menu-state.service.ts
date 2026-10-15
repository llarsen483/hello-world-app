import {
  Injectable,
  computed,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  private readonly desktopBreakpoint = 768;

  readonly windowWidth = signal(window.innerWidth);

  readonly isDesktop = computed(
    () => this.windowWidth() >= this.desktopBreakpoint
  );

  readonly menuOpen = signal(false);

  readonly menuVisible = computed(
    () => this.isDesktop() || this.menuOpen()
  );

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  openMenu(): void {
    this.menuOpen.set(true);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  closeMenuIfMobile(): void {
    if (!this.isDesktop()) {
      this.closeMenu();
    }
  }

  updateWindowWidth(width: number): void {
    this.windowWidth.set(width);
  }
}
