import { SvgIconSystemNgPage } from './app.po';

describe('svg-icon-system-ng App', () => {
  let page: SvgIconSystemNgPage;

  beforeEach(() => {
    page = new SvgIconSystemNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
