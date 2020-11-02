import { UnitsPage } from './unit.po';
import { browser, logging } from 'protractor';

describe('Units Page', () => {
  let units: UnitsPage;

  beforeEach(() => {
    units = new UnitsPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display nav Home menu', async () => {
    browser.get('/units');
    await browser.sleep(1000);
    expect(units.menuHome.getText()).toEqual('HOME');
  });
  it('should display nav Unit menu', () => {
    expect(units.menuUnits.getText()).toEqual('UNITS');
  });
  it('should check Ages Header', async () => {
    expect(units.headerAges.getText()).toEqual('Ages');
  })
  it('should check Dark button and click', async () => {
    expect((units.btnDark).isDisplayed()).toBe(true);
    units.btnDark.click();
    expect(units.td_ages.getText()).toEqual('Dark');
  })
  it('should check Feudal button and click', async () => {
    expect((units.btnFeudal).isDisplayed()).toBe(true);
    units.btnFeudal.click();
    expect(units.td_ages.getText()).toEqual('Feudal');
  })
  it('should check Castle button and click', async () => {
    expect((units.btnCastle).isDisplayed()).toBe(true);
    units.btnCastle.click();
    expect(units.td_ages.getText()).toEqual('Castle');
  })
  it('should check Imperiial button and click', async () => {
    expect((units.btnImperial).isDisplayed()).toBe(true);
    units.btnImperial.click();
    expect(units.td_ages.getText()).toEqual('Imperial');
  })   
  it('should check range slider Wood and click', async () => {
    expect(units.rangeWood.isEnabled()).toBe(false);
    ((units.switch).get(0)).click();
    await browser.sleep(1000);
    expect(units.rangeWood.isEnabled()).toBe(true);
  }) 
  it('should check range slider Food and click', async () => {
    expect(units.rangeFood.isEnabled()).toBe(false);
    ((units.switch).get(1)).click();
    await browser.sleep(1000);
    expect(units.rangeFood.isEnabled()).toBe(true);
  }) 
  it('should check range slider Gold and click', async () => {
    expect(units.rangeGold.isEnabled()).toBe(false);
    ((units.switch).get(2)).click();
    await browser.sleep(1000);
    expect(units.rangeGold.isEnabled()).toBe(true);
  }) 
  it('should change value range slider Wood', async () => {
 
    browser.actions().dragAndDrop(
        units.rangeWood,
        {x:100, y:0}
    ).perform();
    await browser.sleep(500);
  }) 
  it('should change value range slider Food', async () => {
 
    browser.actions().dragAndDrop(
        units.rangeFood,
        {x:100, y:0}
    ).perform();
    await browser.sleep(500);
  }) 
  it('should change value range slider Gold', async () => {
 
    browser.actions().dragAndDrop(
        units.rangeGold,
        {x:100, y:0}
    ).perform();
    await browser.sleep(500);
  }) 
  it('should check  data is received according to the filters', async () => {
 
  }) 
  it('should click range sliders', async () => {
 
    ((units.switch).get(0)).click();
    ((units.switch).get(1)).click();
    ((units.switch).get(2)).click();
  }) 
  it('should click unit and go detail page', async () => {
    units.td_ages.click();
    await browser.sleep(1000);
   }) 


});
