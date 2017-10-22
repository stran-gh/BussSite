import { BussSitePage } from './app.po';

describe('buss-site App', () => {
  let page: BussSitePage;

  beforeEach(() => {
    page = new BussSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
