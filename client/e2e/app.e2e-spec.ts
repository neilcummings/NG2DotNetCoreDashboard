import { AbsencePlanner2Page } from './app.po';

describe('absence-planner2 App', () => {
  let page: AbsencePlanner2Page;

  beforeEach(() => {
    page = new AbsencePlanner2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
