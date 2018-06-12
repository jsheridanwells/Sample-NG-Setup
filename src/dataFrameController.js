'use strict';

app.controller('dataFrameController', function ($scope, dataFactory) {
    
    $scope.myData = [];

    const loadSomeData = () => {
        dataFactory.fetchData()
            .then(posts => {
                console.log('POSTS:::', posts.data);
                $scope.myData = posts.data;
            })
            .catch(error => console.error(error));
    };

    loadSomeData();
});

app.factory('dataFactory', function ($q, $http) {
    
    const fetchData = () => {
        return $q((resolve, reject) => {
            $http.get('https://jsonplaceholder.typicode.com/posts')
                .then(posts => resolve(posts))
                .catch(error => reject(error));
        });
    };
    
    return { fetchData };
});