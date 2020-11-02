import { browser, by, element } from 'protractor';

export class UnitsPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  menuHome = element(by.id('home-menu'));
  menuUnits = element(by.id('unit-menu'));
  headerAges = element(by.css('.hages'));
  btnDark = element(by.id('Dark'));
  btnFeudal= element(by.id('Feudal'));
  btnCastle= element(by.id('Castle'));
  btnImperial= element(by.id('Imperial'));
  td_ages = element(by.name('ageName'));
  switch = element.all(by.css('.switch'));
  rangeWood = element(by.id('Wood'));
  rangeFood = element(by.id('Food'));
  rangeGold = element(by.id('Gold'));
  table = element(by.tagName('tr'));


}
