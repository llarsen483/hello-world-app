import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { MenuStateService } from './services/menu-state';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('hello-world-app');

  readonly menu = inject(MenuStateService);

  @HostListener('window:resize')
  onResize(): void {
    this.menu.updateWindowWidth(window.innerWidth);
  }
}
