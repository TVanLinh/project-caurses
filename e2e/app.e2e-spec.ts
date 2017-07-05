import { ProjectCaursesPage } from './app.po';

describe('project-caurses App', () => {
  let page: ProjectCaursesPage;

  beforeEach(() => {
    page = new ProjectCaursesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
