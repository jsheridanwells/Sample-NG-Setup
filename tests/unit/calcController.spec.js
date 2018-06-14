'use strict';

localStorage.clear();

describe('CalcController :: ', () => {
    beforeEach(module('calculator'));

    describe('Methods', () => {
        let scope, calcController, location, num1, num2;

        beforeEach(inject(($controller, $rootScope, $location) => {
            scope = $rootScope.$new();
            location = $location;
            calcController = $controller('calcController', { $scope: scope });

            num1 = Math.round(Math.random() * 100);
            num2 = Math.round(Math.random() * 100);
        }));
    
        it('should be defined', () => expect(calcController).toBeDefined());
    
        it('should be able to ADD', () => expect(scope.add).toBeDefined());

        it('should ADD two random numbers correctly', () => {
            scope.currentVal = num1;
            scope.add();
            scope.currentVal = num2;
            scope.add();
            expect(scope.currentVal).toEqual((num1 + num2));
        });

        it('should be able to SUBTRACT', () => expect(scope.subtract).toBeDefined());

        it('should SUBTRACT two random numbers correctly', () => {
            scope.currentVal = num1;
            scope.subtract();
            scope.currentVal = num2;
            scope.subtract();
            expect(scope.currentVal).toEqual((num1 - num2));
        });

        it('should be able to MULTIPLY', () => expect(scope.multiply).toBeDefined());

        it('should MULTIPLY two random numbers correctly', () => {
            scope.currentVal = num1;
            scope.multiply();
            scope.currentVal = num2;
            scope.multiply();
            expect(scope.currentVal).toEqual((num1 * num2));
        });
        
        it('should be able to DIVIDE', () => expect(scope.divide).toBeDefined());
        
        it('should DIVIDE two random numbers correctly', () => {
            scope.currentVal = num1;
            scope.divide();
            scope.currentVal = num2;
            scope.divide();
            expect(scope.currentVal).toEqual((num1 / num2));
        });

        it('should be able to CLEAR ALL NUMBERS', () => {
            scope.currentVal = num1;
            scope.allClear();
            expect(scope.currentVal).toEqual(0);
        });

        it('should give total when EQUALS is entered', () => {
            scope.currentVal = num1;
            scope.add();
            scope.currentVal = num2;
            scope.equals();
            expect(scope.currentVal).toEqual((num1 + num2));
        });
    });
});