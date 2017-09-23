import { C64SymbolsPage } from './app.po';

describe('c64-symbols App', () => {
  let page: C64SymbolsPage;

  beforeEach(() => {
    page = new C64SymbolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
