import { ExchangeAngularPage } from './app.po';

describe('exchange-angular App', () => {
  let page: ExchangeAngularPage;

  beforeEach(() => {
    page = new ExchangeAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
