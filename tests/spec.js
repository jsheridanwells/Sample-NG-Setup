'use strict';

describe('Calculator', () => {
    beforeAll(() => {
        browser.get('http://127.0.0.1:8080/');
    });

    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    let input = element(by.model('currentVal'));
    let addBtn = element(by.buttonText('+'));
    let subBtn = element(by.buttonText('-'));
    let multBtn = element(by.buttonText('x'));
    let divBtn = element(by.buttonText('/'));
    let eqBtn = element(by.buttonText('='));
    let clearBtn = element(by.buttonText('AC'));

    it('should add numbers', () => {
        input.sendKeys(num1)
        .then(() => {
            return addBtn.click();
        })
        .then(() => {
            input.clear();
            return input.sendKeys(num2);
        })
        .then(() => {
            return eqBtn.click();
        })
        .then(() => {
            expect(input.getAttribute('value')).toEqual(String(num1 + num2));
        });        
    });

    it('should subtract numbers', () => {        
        input.sendKeys(num1)
            .then(() => {
                return subBtn.click();
            })
            .then(() => {
                input.clear();
                return input.sendKeys(num2);
            })
            .then(() => {
                return eqBtn.click();
            })
            .then(() => {
                expect(input.getAttribute('value')).toEqual(String(num1 - num2));
            });      
    });

    it('should multiply numbers', () => {
        input.sendKeys(num1)
            .then(() => {
                return multBtn.click();
            })
            .then(() => {
                input.clear();
                return input.sendKeys(num2);
            })
            .then(() => {
                return eqBtn.click();
            })
            .then(() => {
                expect(input.getAttribute('value')).toEqual(String(num1 * num2));
            });   
    });

    it('should divide numbers', () => {
        input.sendKeys(num1)
            .then(() => {
                return divBtn.click();
            })
            .then(() => {
                input.clear();
                return input.sendKeys(num2);
            })
            .then(() => {
                return eqBtn.click();
            })
            .then(() => {
                expect(input.getAttribute('value')).toEqual(String(num1 / num2));
            });   

    });

    afterEach(() => clearBtn.click());
});