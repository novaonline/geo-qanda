import { GeoQandaAppPage } from './app.po';

describe('geo-qanda-app App', () => {
  let page: GeoQandaAppPage;

  beforeEach(() => {
    page = new GeoQandaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
