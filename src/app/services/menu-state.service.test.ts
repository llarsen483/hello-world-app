import {
  describe,
  it,
  expect
} from 'vitest';

import { MenuStateService } from './menu-state.service';

describe('MenuStateService', () => {

  it('should show menu on desktop', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(1024);

    expect(service.isDesktop()).toBe(true);
    expect(service.menuVisible()).toBe(true);
  });

  it('should hide menu on mobile by default', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    expect(service.isDesktop()).toBe(false);
    expect(service.menuVisible()).toBe(false);
  });

  it('should open menu when toggled', () => {

    const service = new MenuStateService();

    service.toggleMenu();

    expect(service.menuOpen()).toBe(true);
    expect(service.menuVisible()).toBe(true);
  });

  it('should close menu when toggled twice', () => {

    const service = new MenuStateService();

    service.toggleMenu();
    service.toggleMenu();

    expect(service.menuOpen()).toBe(false);
  });

  it('should close menu after navigation on mobile', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);
    service.openMenu();

    service.closeMenuIfMobile();

    expect(service.menuOpen()).toBe(false);
    expect(service.menuVisible()).toBe(false);
  });

  it('should keep menu open on desktop after navigation', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(1024);
    service.openMenu();

    service.closeMenuIfMobile();

    expect(service.menuVisible()).toBe(true);
  });

  it('should update desktop state when resized', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    expect(service.isDesktop()).toBe(false);

    service.updateWindowWidth(1024);

    expect(service.isDesktop()).toBe(true);
  });

});
