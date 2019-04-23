import {by, element, browser} from 'protractor';

export class Homepage {
    navigateToHomepage() {
        return browser.driver.get('http://www.way2automation.com/protractor-angularjs-practice-website.html');
    }
}