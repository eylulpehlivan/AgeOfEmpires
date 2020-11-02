import { DetailPage } from './detail.po';
import { browser, logging } from 'protractor';

describe('Detail Page', () => {
  let detail: DetailPage;

  beforeEach(() => {
    detail = new DetailPage();
  });
  it('should display nav Home menu', async () => {
    await browser.sleep(1000);
    expect(detail.menuHome.getText()).toEqual('HOME');
  });
  it('should display nav Unit menu', () => {
    expect(detail.menuUnits.getText()).toEqual('UNITS');
  });
  it('should check Ages Header', async () => {
    expect(detail.hdetail.getText()).toEqual('Unit Details');
  })


});
