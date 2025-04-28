import { newE2EPage } from '@stencil/core/testing';

describe('xbopko-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xbopko-ambulance-wl-app></xbopko-ambulance-wl-app>');

    const element = await page.find('xbopko-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
