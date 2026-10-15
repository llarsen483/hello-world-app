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

  it('should hide menu on mobile', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    expect(service.isDesktop()).toBe(false);
    expect(service.menuVisible()).toBe(false);
  });

  it('should open menu when toggled on mobile', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    service.toggleMenu();

    expect(service.menuOpen()).toBe(true);
    expect(service.menuVisible()).toBe(true);
  });

  it('should close menu when toggled on desktop', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(1024);

    expect(service.menuVisible()).toBe(true);

    service.toggleMenu();

    expect(service.menuVisible()).toBe(false);
  });

  it('should close menu after navigation on mobile', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    service.openMenu();

    service.closeMenuIfMobile();

    expect(service.menuOpen()).toBe(false);
    expect(service.menuVisible()).toBe(false);
  });

  it('should keep menu state on desktop after navigation', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(1024);

    service.closeMenu();

    service.closeMenuIfMobile();

    expect(service.menuVisible()).toBe(false);
  });

  it('should open menu when resizing from mobile to desktop', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    expect(service.menuVisible()).toBe(false);

    service.updateWindowWidth(1024);

    expect(service.isDesktop()).toBe(true);
    expect(service.menuVisible()).toBe(true);
  });

  it('should close menu when resizing from desktop to mobile', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(1024);

    expect(service.menuVisible()).toBe(true);

    service.updateWindowWidth(500);

    expect(service.isDesktop()).toBe(false);
    expect(service.menuVisible()).toBe(false);
  });

});
