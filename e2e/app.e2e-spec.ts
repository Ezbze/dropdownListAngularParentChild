import { DropdownListAngularParentChildPage } from './app.po';

describe('dropdown-list-angular-parent-child App', () => {
  let page: DropdownListAngularParentChildPage;

  beforeEach(() => {
    page = new DropdownListAngularParentChildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
