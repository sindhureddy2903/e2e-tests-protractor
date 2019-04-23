import {Homepage} from '../page-objects/homepage';
import {by,element,browser} from 'protractor';

const homePage = new Homepage();

describe('Google Home Page', () => {
    beforeAll(() => {
        homePage.navigateToHomepage();
    });

    it('logo is displayed', () => {
        var element = browser.driver.findElement(by.className('logo'));
        expect(element.isDisplayed()).toBe(true);
    });
});