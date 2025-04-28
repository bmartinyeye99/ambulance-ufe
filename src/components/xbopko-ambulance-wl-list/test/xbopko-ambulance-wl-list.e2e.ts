import { newE2EPage } from '@stencil/core/testing';

describe('xbopko-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xbopko-ambulance-wl-list></xbopko-ambulance-wl-list>');

    const element = await page.find('xbopko-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
