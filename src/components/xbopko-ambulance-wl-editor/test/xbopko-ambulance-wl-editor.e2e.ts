import { newE2EPage } from '@stencil/core/testing';

describe('xbopko-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xbopko-ambulance-wl-editor></xbopko-ambulance-wl-editor>');

    const element = await page.find('xbopko-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
