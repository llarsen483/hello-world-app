import { describe, expect, it } from 'vitest';
import { MenuStateService } from './menu-state';

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

    service.updateWindowWidth(500);

    service.toggleMenu();

    expect(service.menuVisible()).toBe(true);
  });

  it('should close menu after navigation on mobile', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(500);

    service.toggleMenu();

    service.closeMenuIfMobile();

    expect(service.menuVisible()).toBe(false);
  });

  it('should keep menu visible on desktop', () => {

    const service = new MenuStateService();

    service.updateWindowWidth(1200);

    service.closeMenuIfMobile();

    expect(service.menuVisible()).toBe(true);
  });

});
