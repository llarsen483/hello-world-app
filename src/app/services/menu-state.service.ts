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

  readonly menuOpen = signal(
    window.innerWidth >= this.desktopBreakpoint
  );

  readonly menuVisible = computed(
    () => this.menuOpen()
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

    const wasDesktop = this.isDesktop();

    this.windowWidth.set(width);

    const isDesktop = this.isDesktop();

    if (!wasDesktop && isDesktop) {
      this.menuOpen.set(true);
    }

    if (wasDesktop && !isDesktop) {
      this.menuOpen.set(false);
    }
  }
}
