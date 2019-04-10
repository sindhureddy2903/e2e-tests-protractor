import {Homepage} from '../page-objects/homepage';
import {by,element,browser} from 'protractor';

const homePage = new Homepage();

describe('Google Home Page', () => {
    beforeAll(() => {
        homePage.navigateToHomepage();
    });

    it('Just a demo test', () => {
    });
});