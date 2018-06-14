app.controller('calcController', function ($scope) {

    let total = 0;
    let lastOperation = '';

    $scope.currentVal = 0;

    $scope.add = () => {
        let valToAdd = parseFloat($scope.currentVal);
        total += valToAdd;
        $scope.currentVal = total;
        lastOperation = '+';
    };

    $scope.subtract = () => {
        let valToSub = parseFloat($scope.currentVal);
        if (total === 0) {
            $scope.currentVal = valToSub;
            total = valToSub;
        } else {
            total -= valToSub;
            $scope.currentVal = total;
        }
        lastOperation = '-';
    };

    $scope.multiply = () => {
        let valToMult = parseFloat($scope.currentVal);
        if (total === 0) {
            $scope.currentVal = valToMult;
            total = valToMult;
        } else {
            total *= valToMult;
            $scope.currentVal = total;
        }
        lastOperation = 'x';
    };

    $scope.divide = () => {
        let valToDiv = parseFloat($scope.currentVal);
        if (total === 0) {
            $scope.currentVal = valToDiv;
            total = valToDiv;
        } else {
            total /= valToDiv;
            $scope.currentVal = total;
        }
        lastOperation = '/';
    };

    $scope.allClear = () => {
        $scope.currentVal = 0;
        total = 0;
    };

    $scope.equals = () => {
        switch (lastOperation) {
            case '+':
                $scope.add();
                break;
            case '-':
                $scope.subtract();
                break;
            case 'x':
                $scope.multiply();
                break;
            case '/':
                $scope.divide();
                break;
            default:
                break;
        }
        lastOperation = '';
    };
});