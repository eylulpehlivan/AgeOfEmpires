import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Home Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should display nav Home menu', () => {
    page.navigateTo();
    expect(page.menuHome.getText()).toEqual('HOME');
  });
  it('should display nav Unit menu', () => {
    expect(page.menuUnits.getText()).toEqual('UNITS');
  });
  it('should display nav Unit menu', () => {
    expect(page.divContainer);
  });

  it('should click home  and check conteiner', () => {
    page.menuHome.click();
    expect(page.divContainer);
  });
  it('should click Units', async () => {
    await browser.sleep(100);
    page.menuUnits.click();
  });
});
