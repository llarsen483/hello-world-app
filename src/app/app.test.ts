import { describe, expect, it } from 'vitest';
import { App } from './app';

describe('App', () => {

  it('should create', () => {
    const app = new App();

    expect(app).toBeTruthy();
  });

  it('should toggle menu visibility', () => {
    const app = new App();

    const initialValue = app['menuVisible']();

    app.toggleMenu();

    expect(app['menuVisible']()).toBe(!initialValue);
  });

  it('should close menu on mobile', () => {
    const app = new App();

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    });

    app['menuVisible'].set(true);

    app.closeMenuIfMobile();

    expect(app.menuVisible()).toBe(false);
  });

});
