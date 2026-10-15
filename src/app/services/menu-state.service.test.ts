import {
  describe,
  it,
  expect
} from 'vitest';

import { MenuStateService } from './menu-state.service';

describe('MenuStateService', () => {

  it('should show menu on desktop', () => {

    const service = new MenuStateService();

    service.windowWidth.set(1024);

    expect(service.isDesktop()).toBe(true);
    expect(service.menuVisible()).toBe(true);
  });

  it('should hide menu on mobile by default', () => {

    const service = new MenuStateService();

    service.windowWidth.set(500);

    expect(service.isDesktop()).toBe(false);
    expect(service.menuVisible()).toBe(false);
  });

  it('should open menu when toggled', () => {

    const service = new MenuStateService();

    service.toggleMenu();

    expect(service.menuOpen()).toBe(true);
  });

  it('should close menu after navigation on mobile', () => {

    const service = new MenuStateService();

    service.windowWidth.set(500);
    service.menuOpen.set(true);

    service.closeMenuIfMobile();

    expect(service.menuVisible()).toBe(false);
  });

});
