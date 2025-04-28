import { newSpecPage } from '@stencil/core/testing';
import { xbopkoAmbulanceWlApp } from '../xbopko-ambulance-wl-app';

describe('xbopko-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [xbopkoAmbulanceWlApp],
      html: `<xbopko-ambulance-wl-app base-path="/"></xbopko-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xbopko-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [xbopkoAmbulanceWlApp],
      html: `<xbopko-ambulance-wl-app base-path="/ambulance-wl/"></xbopko-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xbopko-ambulance-wl-list");
  });
});