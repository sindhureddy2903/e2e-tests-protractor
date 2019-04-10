import {by, element, browser} from 'protractor';

export class Homepage {
    navigateToHomepage() {
        return browser.get('https://www.google.com/');
    }
}