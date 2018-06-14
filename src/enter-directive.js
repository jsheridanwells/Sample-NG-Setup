'use strict';

app.directive('enter', function () {
    return (scope, element, attrs) => {
        element.bind("keydown keypress", (e) => {
            if (e.which === 13) {
                scope.$apply(() => scope.$eval(attrs.enter));
                e.preventDefault();
            }
        });
    };
});