import { browser, by, element } from 'protractor';

export class DetailPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  menuHome = element(by.id('home-menu'));
  menuUnits = element(by.id('unit-menu'));
  hdetail = element(by.css('.border-bottom'));


}
