import {
  Injectable,
  signal,
  computed,
  inject,
  DestroyRef
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

  private readonly destroyRef = inject(DestroyRef);

  constructor() {

    const resizeHandler = () => {
      this.windowWidth.set(window.innerWidth);
    };

    window.addEventListener('resize', resizeHandler);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('resize', resizeHandler);
    });
  }

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
}
