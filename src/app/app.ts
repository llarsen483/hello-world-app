import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  inject
} from '@angular/core';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { MenuStateService } from './services/menu-state.service';

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

  protected readonly menu =
    inject(MenuStateService);

  @HostListener('window:resize')
  onResize(): void {
    this.menu.updateWindowWidth(window.innerWidth);
  }
}
