import {
  Component,
  HostListener,
  computed,
  signal
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  windowWidth = signal(window.innerWidth);

  isDesktop = computed(
    () => this.windowWidth() >= 768
  );

  menuVisible = signal(window.innerWidth >= 768);

  toggleMenu(): void {
    this.menuVisible.update(v => !v);
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
