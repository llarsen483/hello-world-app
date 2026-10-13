import {
  Component,
  signal,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('hello-world-app');

  protected readonly menuVisible =
    signal(window.innerWidth >= 768);

  toggleMenu(): void {
    this.menuVisible.update(v => !v);
  }

  closeMenuIfMobile(): void {
    if (window.innerWidth < 768) {
      this.menuVisible.set(false);
    }
  }

  @HostListener('window:resize')
  onResize(): void {

    if (window.innerWidth >= 768) {
      this.menuVisible.set(true);
    } else {
      this.menuVisible.set(false);
    }
  }
}
